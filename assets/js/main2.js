let tier=$("input[name='tier']:checked").val();

var url = new URL(window.location);
var token = url.searchParams.get("token")??false;

let planId=$("input[name='tier']:checked").attr("data-planid");


$(document).ready(function(){
    $("input[name='tier']").change(function(){
        planId=$(this).attr("data-planid");
        tier=$(this).val();
    })
});