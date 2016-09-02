var elementValue = [];
function FTSScrollShow(argument, effect){
	var elementName = argument;
	var elementCount = $(elementName).length;
	for (var i = 0; i < elementCount; i++){
		var elementTop = $(elementName+':eq('+i+')').offset().top;
		if (effect == 'dropDown') {
			$(elementName+':eq('+i+')').css({'position': 'relative','opacity': '0','top': '-30px'});
		} else if (effect == 'fadeIn'){
			$(elementName+':eq('+i+')').css({'opacity': '0'})
		}else if (effect == 'scale'){
			$(elementName+':eq('+i+')').css({'position': 'relative','opacity': '0', '-webkit-transform': 'scale3d(.3, .3, .3)', 'transform': 'scale3d(.3, .3, .3)', 'transition': 'all 1s ease'})
		}
		elementValue.push(Array($(elementName+':eq('+i+')'), elementTop, effect));
	}
};
$(window).scroll(function () { 
	scroll = $(window).scrollTop();
	for (var j = 0; j < elementValue.length; j++){
		if (scroll > elementValue[j][1] - 350) {
			if (elementValue[j][2] == 'dropDown') {
				elementValue[j][0].stop().animate({opacity:1, 'top': 0}, 800);
			}else if (elementValue[j][2] == 'fadeIn'){
				elementValue[j][0].stop().animate({opacity:1}, 800);
			}else if (elementValue[j][2] == 'scale'){
				elementValue[j][0].stop().css({opacity:1, '-webkit-transform': 'scale3d(1, 1, 1)', 'transform': 'scale3d(1, 1, 1)'}, 800);
			}
		}
	}
});
