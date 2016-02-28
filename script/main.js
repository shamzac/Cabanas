$(document).ready(function(){

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion =  (barra * 0.5);
		
		$('body').css({
			'background-position': '0 +' + posicion + 'px'
		});

	});

});


$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.menu_bar').click(function(){
		// $('ul.ul_responsive').toggle(); 
 
		if(contador == 1){
			$('ul.ul_responsive').animate({
				height: '424px'
			});
			contador = 0;
		} else {
			contador = 1;
			$('ul.ul_responsive').animate({
				height: '0px'
			});
		}
 
	});
 
};