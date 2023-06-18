$(document).ready(
    $("#options").change(function(e){
        var id=$(this).val();
        $(".tierItem").hide();
        $(`.tierItem[data-id='${id}']`).show();
        var plan=$("#options").find("option:selected").attr("data-planid");
        if(plan===undefined)
        {
            $(".payButton").addClass("d-none");
            $(".checkoutButton").removeClass("d-none");
        }
        else
        {
            planId=plan;
            $(".checkoutButton").addClass("d-none");
            $(`.payButton`).removeClass("d-none");
        }
    })
)