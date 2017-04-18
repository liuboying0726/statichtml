/**
 * Created by 帅醒 on 2016/8/30.
 */
$(function(){
    $("#login-nav a").addClass("a1");
   $(".a1").click(function(){
       $(this).next().slideToggle();
   })
});
