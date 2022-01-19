const name = "SFTG CLUB"; //全局商城name
const schemeName = 'SFTG CLUB' //唤醒app需要的schemeName
export default {
  name: name,
  schemeLink: `${schemeName}://`, //唤起app地址
  downloadLink: "", //下载地址，下载app的地址
  shareLink: "https://m-b2b2c.pickmall.cn", //分享地址，也就是在h5中默认的复制地址
  appid: "wx87a12ebaef8f557c", //小程序唯一凭证，即 AppID，可在「微信公众平台 - 设置 - 开发设置」页中获得。（需要已经成为开发者，且帐号没有异常状态）
  appSecret: "d5dd941c679f4701d144af72a6e53b0a", //可在 manifest.json 查看
  aMapKey: "c6630907bb74620f82974ba1c377f370", //在高德中申请web端key
  scanAuthNavigation:['https://m-b2b2c.pickmall.cn/'], //扫码认证跳转域名配置 会根据此处配置的路由进行跳转
  iosAppId:"", //AppStore的应用地址id 具体在分享->拷贝链接中查看
  logo:"https://qiezizhibo-1300664818.cos.ap-shanghai.myqcloud.com/sftgshop/app/logo.png", //logo地址
  customerServiceMobile:"17750235615", //客服电话
  customerServiceEmail:"sftgoal@126.com" //客服邮箱
}; 
