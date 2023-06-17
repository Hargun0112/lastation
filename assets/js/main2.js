$(document).ready(function(){
    $("input[name='tier']").change(function(){
        planId=$(this).attr("data-planid");
    })
});