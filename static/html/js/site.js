var swiper = new Swiper('.swiper-container', {
    pagination: {
      el:'.swiper-pagination',
    },
});
new WOW().init();

//返回顶部
$(function(){
    $("#goTop").hide();
    $(window).scroll(function(){ 
        if ($(window).scrollTop()>100){ 
            $("#goTop").fadeIn(1500); 
        } 
        else{ 
            $("#goTop").fadeOut(1500); 
        } 
    });
    $("#goTopBtn").click(function(){
        $('body,html').animate({scrollTop:0},500); 
        return false; 
    });
    $("#tanBtn").click(function(){
        $("#modal2").css("display","none");
        $("#modal3").css("display","none");
        $("#modal").css("display","block");
    });
    $("#tanBtn2").click(function(){
        $("#modal").css("display","none");
        $("#modal2").css("display","block");
        $("#modal3").css("display","none");
    });
    $("#tanBtn3").click(function(){
        $("#modal2").css("display","none");
        $("#modal").css("display","none");
        $("#modal3").css("display","block");
    });

    $("#pldownload").click(function(){
        alert('请联系客服获取安装包！联系电话：137-0870-1523')
    });

    $("#plliunx").click(function(){
        alert('请联系客服获取安装包！联系电话：137-0870-1523')
    });
    
})
