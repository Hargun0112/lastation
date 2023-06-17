$(document).ready(
    $("#options").change(function(){
        var id=$(this).val();
        $(".tierItem").hide();
        $(`.tierItem[data-id='${id}']`).show();
    })
)