$(document).ready(
    $("#options").change(function(){
        var id=$(this).val();
        $(".tierItem").hide();
        $(`.tierItem[data-id='${id}']`).show();
        $(`.payButton`).addClass("d-none");
        $(`.payButton[data-sub-id=${id}`).removeClass("d-none");
    })
)