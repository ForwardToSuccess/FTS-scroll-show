(function($){
function FTSScrollShow(argument) {
var Element = $(argument);
var HeightW = $(window).height();
var ElementsFTS = [];
Element.css({'position': 'relative','opacity': '0','top': '-30px'});
Element.each(function(element){
var ElementTop = $(this).offset().top;
var ElementH = $(this).height();
ElementsFTS.push(Array($(this), ElementTop, ElementH));
});
 $(window).scroll(function() {
  var ScrollTop = $(document).scrollTop();
ElementsFTS.forEach(function(entry) {
if (ScrollTop + HeightW - entry[2]/2.5 > entry[1]) {if (entry[0].css('opacity') == 0) entry[0].stop().animate({opacity:1, 'top': 0}, 800)} else {if (entry[0].css('opacity') == 1) entry[0].stop().animate({opacity:0, 'top': '-30px'}, 800)}
});
})
}
})(jQuery);