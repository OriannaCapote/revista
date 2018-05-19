$(document).ready(function() {
    var heights = $(".div-txt-bomb").map(function() {
        return $(this).height();
    }).get(),
 
    maxHeight = Math.max.apply(null, heights);
 
    $("#bomb").height(maxHeight);});
		
$(document).ready(function() {
    var heights = $("#div-txt-capa54").map(function() {
        return $(this).height();
    }).get(),
 
    maxHeight = Math.max.apply(null, heights);
 
    $(".cap54").height(maxHeight);});

/* $(document).ready(function() {
    var heights = $("#div-txt-capa54").map(function() {
        return $(this).height();
    }).get(),
 
    maxHeight = Math.max.apply(null, heights);
 
    $(".cap54").height(maxHeight);});