var red = Math.round(255*Math.random());
var blue = Math.round(255*Math.random());
var green = Math.round(255*Math.random());
var rgb = "rgb("+red+ " ,"+blue+ " ,"+green+")";

function generator(){
    var red = Math.round(255*Math.random());
    var blue = Math.round(255*Math.random());
    var green = Math.round(255*Math.random());
    var rgb = "rgb("+red+ ", "+blue+ ", "+green+")";
    function textUpper(){
        var rgbUpper = rgb.slice(0,1);
        var remainingText = rgb.slice(1,rgb.length);
        var transformed = rgbUpper.toUpperCase();
        var finalText = transformed + remainingText;
        $("h1").text(finalText);
    }
    textUpper();
    $("body").css("background-color", rgb);
    $("button").css("box-shadow", "2px 4px 10px "+rgb);
    
}
generator();
$("button").on("click",function(){
    setTimeout(function(){
        $("button").addClass("btnActive");
    }, 10);
    $("button").removeClass("btnActive");
    setTimeout(function(){
        $("h1").addClass("animated zoomIn");
    }, 10);
    $("h1").removeClass("animated zoomIn");
    generator();

});


