module.exports = {
  //js签到参数
  //https://pingfore.qq.com/pingd?dm=sg.qq.com.hot&url=/cp/a20200228signin/index.html&hottag=dcv_pc.other_a20200228signin_0.index_btn_sign-in_%E7%AB%8B%E5%8D%B3%E7%AD%BE%E5%88%B0.internal&hotx=9999&hoty=9999&rand=59592
  //https://pingfore.qq.com/pingd?dm=sg.qq.com.hot&url=/cp/a20200228signin/index.html&hottag=other_a20200228signin_0.index.btn.sign-in&hotx=9999&hoty=9999&rand=24877

  //yx签到参数
  nuggets: {
    headers: {//相关请求头
      cookie: 'pgv_info=ssid=s5941609065; pgv_pvid=5992655700; eas_sid=01f6x5I0W0A0n9j6O5f6a828u1; uin=o0492275410; skey=@WIL0Jcj8y; RK=RW95nvVQX6; ptcz=d4c1e661711ba7ee2bcfa3b60c543ec199a64a33d9e283f0dbe5bc045202f369; luin=o0492275410; lskey=00010000fe8d7455d6c97b33e93fb3ea9476fe19fa86bfa5ebbe5362b9d8c0fcb240034e291ea9c35ba257e3; p_uin=o0492275410; pt4_token=qKZWZhDC5y7od5bLGu6cSovEkXwM4kCiLaI4ZulC5NY_; p_skey=-*uuctWb59fgzREFfo8qZCK0YWcKT5z4v0EPMPDHbB8_; p_luin=o0492275410; p_lskey=00040000937e273b3c41cdaa2cd3ba538b66704e1b6683a4d3c59b318777a1b4b6800a48c3d7a1fc042ff3d8; IED_LOG_INFO2=userUin%3D492275410%26uin%3D492275410%26nickName%3D%2525E5%25258D%252581%2525E6%25259C%252588%26nickname%3D%25E5%258D%2581%25E6%259C%2588%26userLoginTime%3D1650009671%26logtype%3Dqq%26loginType%3Dqq; sgqqcomrouteLine=a20200228signin_a20200228signin_a20200228signin_a20200228signin_a20200228signin_a20200228signin_a20200228signin', //用自己的
    }, 
    body: {//payload的值
      iActivityId: '290183', 
      iFlowId: '647421',
      g_tk: '2098664425'
    }
  },
  //消息推送相关参数 关注pushplus微信公众号可以获得token free
  pushPlus: {
    url: `http://www.pushplus.plus/send`, //微信推送URL
    token: `ee4de5bb710d4183a84466b2bcf9f685`, 
  }
}

//https://comm.ams.game.qq.com/ams/ame/amesvr?ameVersion=0.3
//sServiceType=sg&
//iActivityId=290183
//sServiceDepartment=group_a&
//sSDID=dce61d56b9c5c3348c29102422c720e2&
//sMiloTag=AMS-MILO-290183-647421-o0492275410-1650010083627-lm8MPV&
//_=1650010083628

//2098664425
//2098664425


//1650011472968
//1650011500620
//1650011519269
//1650011536852

//https://comm.ams.game.qq.com/ams/ame/amesvr?ameVersion=0.3
//sServiceType=sg&iActivityId=290183&sServiceDepartment=group_a&
//sSDID=dce61d56b9c5c3348c29102422c720e2&
//sMiloTag=AMS-MILO-290183-647421-o0492275410-1650011164410-VvAJz8&
//_=1650011164411
//回包内容
//{"ret":"600","msg":"\u975e\u5e38\u62b1\u6b49\uff0c\u60a8\u7684\u8d44\u683c\u5df2\u7ecf\u7528\u5c3d\uff01","flowRet":{"iRet":"600","sLogSerialNum":"AMS-SG-0415160803-KMw0YH-290183-647421","iAlertSerial":"0","sMsg":"\u4eca\u65e5\u7b7e\u5230\u5df2\u5b8c\u6210\uff0c\u8bf7\u660e\u5929\u518d\u6765"},"failedRet":{"690640":{"iRuleId":"690640","jRuleFailedInfo":{"iFailedRet":600}}}}