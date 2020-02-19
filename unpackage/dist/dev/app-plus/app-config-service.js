
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/fen/fen","pages/xiaoZhiTiao/xiaoZhiTiao","pages/my/my","pages/search/search","pages/add-input/add-input","pages/huaTi-fen/huaTi-fen","pages/login/login","pages/ceshi/csshi","pages/fen_xiangQin/fen_xiangQin","pages/myFriend/myFriend","pages/liaoTian/liaoTian"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿糗事百科","navigationBarBackgroundColor":"#ffffff"},"tabBar":{"color":"#ccc","selectedColor":"#FEE42A","borderStyle":"black","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","iconPath":"/static/icon/index_one.png","selectedIconPath":"/static/icon/index.png","text":"糗事"},{"pagePath":"pages/fen/fen","iconPath":"/static/icon/fen_one.png","selectedIconPath":"/static/icon/fen.png","text":"动态"},{"pagePath":"pages/xiaoZhiTiao/xiaoZhiTiao","iconPath":"/static/icon/liao_one.png","selectedIconPath":"/static/icon/liao.png","text":"小纸条"},{"pagePath":"pages/my/my","iconPath":"/static/icon/my_one.png","selectedIconPath":"/static/icon/my.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"糗事","compilerVersion":"2.5.1","entryPagePath":"pages/index/index","networkTimeout":{"request":6000,"connectSocket":6000,"uploadFile":6000,"downloadFile":6000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"bounce":"none","scrollIndicator":"none","titleNView":{"searchInput":{"align":"center","placeholder":"搜索糗事","backgroundColor":"#F7F7F7","borderRadius":"12px","placeholderColor":"#cccccc","disabled":"true"},"buttons":[{"color":"#FF9625","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/fen/fen","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":"false"}},{"path":"/pages/xiaoZhiTiao/xiaoZhiTiao","meta":{"isQuit":true,"isTabBar":true},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"小纸条","bounce":"none","scrollIndicator":"none","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"left","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""},{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/search/search","meta":{},"window":{"bounce":"none","scrollIndicator":"none","titleNView":{"autoBackButton":"false","searchInput":{"align":"left","placeholder":"搜索糗事","backgroundColor":"#F7F7F7","borderRadius":"12px","placeholderColor":"#cccccc","disabled":"true"},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/add-input/add-input","meta":{},"window":{"titleNView":"false"}},{"path":"/pages/huaTi-fen/huaTi-fen","meta":{},"window":{"navigationBarTitleText":"话题分类","bounce":"true"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录页"}},{"path":"/pages/ceshi/csshi","meta":{},"window":{"navigationBarTitleText":"测试页"}},{"path":"/pages/fen_xiangQin/fen_xiangQin","meta":{},"window":{"enablePullDownRefresh":true,"navigationBarTitleText":"我是分类详情页","scrollIndicator":"none","titleNView":{"type":"transparent","buttons":[{"type":"menu"}]}}},{"path":"/pages/myFriend/myFriend","meta":{},"window":{"animationType":"slide-in-left","bounce":"none","scrollIndicator":"none","titleNView":{"autoBackButton":"false","searchInput":{"align":"left","placeholder":"搜索糗事","backgroundColor":"#F7F7F7","borderRadius":"12px","placeholderColor":"#cccccc","disabled":"true"},"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"16px","text":"取消"}]}}},{"path":"/pages/liaoTian/liaoTian","meta":{},"window":{"navigationBarTitleText":"聊天页","titleNView":{"buttons":[{"color":"#000000","colorPressed":"#BBBBBB","float":"right","fontSize":"22px","fontSrc":"/static/font/iconfont.ttf","text":""}]}}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes}}}});
