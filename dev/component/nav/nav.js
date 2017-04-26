/**
 * Created by Administrator on 2017/4/20 0020.
 */

var nav=require("./nav.html")
var logo=require('../../../images/nav_logo/qky-logo.png')


avalon.component('ms-nav', {
    template:nav,
    defaults: {
        logo:logo,
        title:"页面",
        navList:[{name:"导航一",link:"#"},{name:"导航二",link:"#"}],
        appMenu:true,
        selfInfo:true,
        msgTips:true,
        onInit:function () {
            if(this.appMenu){require("./appMenu")}
            if(this.selfInfo){require("./selfInfo")}
            if(this.msgTips){require("./msgTips")}
        },
        onReady:function() {

        }
    }
});

