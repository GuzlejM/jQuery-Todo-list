    
//By clicking on X in span you'll delete only li which has nested that specific SPAN
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input").on('keypress',function(e) {
    if(e.which == 13) {
        $("ul").append("<li><span>X</span>" + " " + $("input").val() + "</li>");
        $("input").val("");
    }
});