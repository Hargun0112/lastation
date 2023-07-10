let tier=$("input[name='tier']:checked").val();
let email=$("#email");
let discordUsername=$("#discordUser");
let vrchatusername=$("#vrchatusername");

$(document).ready(function(){
    $("input[name='tier']").change(function(){
        planId=$(this).attr("data-planid");
        tier=$(this).val();
    })
});