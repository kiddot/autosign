module.exports = {
  //js签到参数
  //https://pingfore.qq.com/pingd?dm=sg.qq.com.hot&url=/cp/a20200228signin/index.html&hottag=dcv_pc.other_a20200228signin_0.index_btn_sign-in_%E7%AB%8B%E5%8D%B3%E7%AD%BE%E5%88%B0.internal&hotx=9999&hoty=9999&rand=59592
  //https://pingfore.qq.com/pingd?dm=sg.qq.com.hot&url=/cp/a20200228signin/index.html&hottag=other_a20200228signin_0.index.btn.sign-in&hotx=9999&hoty=9999&rand=24877

  //yx签到参数
  nuggets: {
    headers: {//相关请求头
      cookie: 'RK=7f5x2tV6V6; ptcz=61797e3633d03424bb2cac006d5d12c02507d3584cb252dffb6fbb733cb5fbf2; tvfe_boss_uuid=dbf81bb227b95450; pgv_pvid=7324696064; eas_sid=Z1r6k2a9q3n4f8N5e3l885g5X3; ied_qq=o0492275410; o_cookie=492275410; uin_cookie=o0492275410; pac_uid=1_ull; fqm_pvqid=5754667f-1cad-48d4-adbc-5029a336b5a4; _ga=GA1.2.557372845.1634265487; ptui_loginuin=492275410; pgv_info=pgvReferrer=&ssid=s215602400; sgqqcomrouteLine=a20211111member_a20211111member_a20211111sghy_a20211109sgllq_a20211109sgllq_a20211111member_a20211111member; tokenParams=%3Fadtag%3Dnb; xzjqqcomrouteLine=a20211118_a20211118; fqm_sessionid=ad836eb5-acc3-417b-b8a5-04e57bd5d235; euin=7eEAowSk7e6z; tmeLoginType=2; login_type=1; wxrefresh_token=; psrf_access_token_expiresAt=1655381888; psrf_qqunionid=5D0A9A432C3989329BFF4813922F5E43; psrf_qqopenid=DBEAFB9BF4C344EBBBD56ED0AB422DA0; psrf_qqaccess_token=0E45F9DFD3D5DD7582343192B1CB991D; wxunionid=; psrf_qqrefresh_token=6DA5DB0A3893CE5F212C496EF7517E1B; wxopenid=; midas_openid=BE12B0D2F3448DE5D72DF3E7CC025B39; midas_openkey=284FC3674036F81E3990D0F3D81E0E8F; verifysession=h017967ef3a85c0e70e4847f1c4db9e112d7b31e70cd18991f0dc6d1db0850cf1f27e519d0e494597b4; uin=o0492275410; skey=@6qOdnu4Ps; luin=o0492275410; lskey=00010000bf9e0413517f69a34e843b312562eed2c2ac63130bfe87afe8197a875359f959a247a742d1c96b4c; p_uin=o0492275410; pt4_token=G6FHBM7m5QcWn2qdRxO6iU0FDGcYh4pO5vVGWJ5Ky0I_; p_skey=LyW7hYK9qOJTkD*K0jT60A10pNgpaxwsweX1b4Vq-34_; p_luin=o0492275410; p_lskey=000400005dae7881bde4b04a60980132e7e56fcd1665eeeb22e1c90993dd04861c4ce2f0df0fd860047338c6; IED_LOG_INFO2=userUin%3D492275410%26uin%3D492275410%26nickName%3D%2525E5%25258D%252581%2525E6%25259C%252588%26nickname%3D%25E5%258D%2581%25E6%259C%2588%26userLoginTime%3D1650248884%26logtype%3Dqq%26loginType%3Dqq', //用自己的
    }, 
    body: {//payload的值
      iActivityId: '290183', 
      iFlowId: '647421',
      g_tk: '1176841017',
      qq: '492275410'
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