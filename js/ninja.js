$(document).ready(function(){

    $(".tt").click(function(){
        var me = $(this).find("h2");
        var sib = $(this).siblings().find("h2");
        
        // 나오기,가리기 기능
        if(me.hasClass("on") == true){
            // hasClass는 지정한 태그가 그 클래스를 가지고 있는 묻는 기능
            me.removeClass("on");
            me.prev().fadeOut();
            me.next().slideUp();
        }else{
            me.addClass("on");
            me.prev().fadeIn();
            // prev 해당태그 위에 있는 태그
            me.next().slideDown();
            // next 해당태그 아래에 있는 태그

            // 다른 목록은 가려주는 기능
            sib.removeClass("on");
            sib.prev().fadeOut();
            sib.next().slideUp();
        }
    })// .tt.click

    $(".logo").click(function(){

        $(".ninja h2").removeClass("on");
        $(".ninja img").fadeOut();
        $(".ninja p").slideUp();
    })// .logo.click

})// jquery 끝