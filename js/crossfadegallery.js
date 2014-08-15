$(function(){
    $("#container").html($("a").get().reverse());

    $("#container a").hover(function(){
        $(this).stop(true, true);
    },function(){
        crossFade();
    });
    function crossFade(){
        $("a:last").delay(5000).fadeOut(function(){
            $(this).prependTo("#container").show();
            crossFade();
        })
    }
    crossFade();
});
