/**
 * Created by Administrator on 2017/4/26 0026.
 */


avalon.component("ms-navAppMenu",{
    template:require("./appMenu.html"),
    defaults: {
        recentList:[],
        usualList:[],

        open:function(event){

        },
        onInit:function () {

        },
        onReady:function() {
            $(document).on("click",":not('.nav_more')",function(){
                console.log(11)
                $(".nav_more").slideUp(50);
                $(".navbtn").removeClass("active");
            })
            $(".nav_more").on("click",function(event){
                console.log(22)
                event.stopPropagation();
            });
            $(".navbtn").on("click",function(event){
                console.log(33)
                event.stopPropagation();
                $(".nav_more").slideToggle(50);
                $(this).toggleClass("active");
                $(".nav_news_box .nav_news_popup").slideUp(50);
            });
        }
    }


})