$(document).ready(function(){

	mobileMenu();

});

//SCROLL

$(window).bind('scroll', function(event) {
	if($(window).scrollTop() > 20) {
		$('.main-header').addClass('header-short');
	} else {
		$('.main-header').removeClass('header-short');
	}
});

function mobileMenu() {
	$('#mobile-icon').bind('click', function(event) {
		event.preventDefault();
		$('#main-nav-mobile').show();
		$('#main-nav-mobile').removeClass('animated fadeOutLeft');
		$('#main-nav-mobile').addClass('animated fadeInLeft');
		$('#mobile-icon').hide();
	});
	$('#mobile-close').bind('click', function(event) {
		event.preventDefault();
		closemenu();
	});
}

function closemenu(){
		$('#main-nav-mobile').removeClass('animated fadeInLeft');
		$('#main-nav-mobile').addClass('animated fadeOutLeft');
		$('#mobile-icon').show();
}