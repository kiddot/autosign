//需要使用的包文件
const axios = require("axios");
const schedule = require("node-schedule");
//相关参数保存在文件内
const { nuggets, pushPlus } = require("./config");

/**
 * 获取当前时间的格式化时间
 * @param {String} key 调用js日期函数 
 * @returns 当前时间格式化的字符串
 */
const getNowTime = (key) => {
  let nowTime = ``;
  try {
    nowTime = new Date()[key]();
  } catch (e) {
    nowTime = `获取时间函数错误！`;
    console.error(`请传入日期函数 —— ${e}`);
  }
  return nowTime;
}

/**
 * pushplus消息推送，关注wx公众号可以调用他们的接口进行wx消息推送
 * @param {String} title 
 * @param {JSON} content 
 */
const pushMsg = async (title, content) => {
  //暂时不进行wx推送
  return;
  console.log(`\n------${getNowTime(`toLocaleString`)} 开始推送wx消息 ------`);
  //获取配置参数
  const { url, token } = pushPlus;
  const res = await axios({
    url,
    method: `get`,
    params: {
      token,
      template: `json`,
      title,
      content,
    }
  });
  if (res && res.data) {
    console.log(`\n ${JSON.stringify(res.data)} \n\n------ ${getNowTime(`toLocaleTimeString`)} 推送成功 ------\n`);
  } else {
    console.log(res);
    console.log(`\n------ ${getNowTime(`toLocaleTimeString`)} 推送失败 ------ \n`);
  }
}

/**
 * 自动签到 请求方法
 */
const hacpaiSignRequest = async () => {
  console.log(`\n\n------${getNowTime(`toLocaleDateString`)} - 开始签到------\n`);
  const { headers, signInUrl, body } = nuggets; //签到相关参数
  var timestamp1 =Date.parse(new Date());
  var timestamp2 = (timestamp1 + 1);
  

  var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'gameId': '',
  'sArea': '',
  'iSex': '',
  'sRoleId': '',
  'iGender': '',
  'sServiceType': 'sg',
  'objCustomMsg': '',
  'areaname': '',
  'roleid': '',
  'rolelevel': '',
  'rolename': '',
  'areaid': '',
  'iActivityId': body.iActivityId,
  'iFlowId': body.iFlowId,
  'g_tk': body.g_tk,
  'e_code': '0',
  'g_code': '0',
  'eas_url': 'http://sg.qq.com/cp/a20200228signin/',
  'eas_refer': 'http://sg.qq.com/comm-htdocs/milo_mobile/login.html?reqid=ddd7837d-3bbd-4873-98d2-335d3e25e4e2&version=25',
  'sServiceDepartment': 'group_a' 
});
var config = {
  method: 'post',
  url: 'https://comm.ams.game.qq.com/ams/ame/amesvr?ameVersion=0.3&sServiceType=sg&iActivityId=290183&sServiceDepartment=group_a&sSDID=dce61d56b9c5c3348c29102422c720e2&sMiloTag=AMS-MILO-290183-647421-o0492275410-' + timestamp1 + '-PAlDAp&_=' + timestamp2,
  headers: { 
    'authority': 'comm.ams.game.qq.com', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="99", "Google Chrome";v="99"', 
    'sec-ch-ua-mobile': '?0', 
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.84 Safari/537.36', 
    'sec-ch-ua-platform': '"macOS"', 
    'content-type': 'application/x-www-form-urlencoded', 
    'accept': '*/*', 
    'origin': 'https://sg.qq.com', 
    'sec-fetch-site': 'same-site', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://sg.qq.com/', 
    'accept-language': 'zh-CN,zh;q=0.9', 
    'cookie': headers.cookie
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));


  if (response && response.data) {
    console.log(`\n ${JSON.stringify(response.data)} \n \n ------ ${getNowTime(`toLocaleTimeString`)} 签到成功 ------\n`);
    console.log(response.data.flowRet.sMsg)
    //签到成功后推送消息
    pushMsg(`签到结果`, response.data.flowRet.sMsg);
  } else {
    console.log(response);
    console.log(`\n ------ ${getNowTime(`toLocaleTimeString`)} 签到失败 ------ \n`);
    pushMsg(`签到结果`, { '签到失败': response.data.flowRet.sMsg }); //签到成功后推送消息
  }

})
.catch(function (error) {
  console.log(error);
});
}

//定时触发任务
const signTask = () => {
  //每天在12:00-12:10随机签到
  // schedule.scheduleJob("0 0 12 * * *", () => {
  //   setTimeout(() => {
  //     hacpaiSignRequest(); //签到函数
  //   }, Math.random() * 10 * 60 * 1000)
  // })
  hacpaiSignRequest(); //签到函数
}

//开始执行任务
console.log(`开始执行任务-${getNowTime('toLocaleString')}`);
signTask();
