$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.5);
		
		$('body').css({
			'background-position': '0 +' + posicion + 'px'
		});

	});

});


