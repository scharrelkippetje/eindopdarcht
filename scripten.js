$(document).ready(function () {

    $(".btn").click(function (){
        $(this).addClass("active").siblings().removeClass("active");
    });
 });