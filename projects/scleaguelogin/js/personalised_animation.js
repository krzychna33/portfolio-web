
var isStartedAnimation = 0;
window.onload = function(){
    $('#button1').addClass('animated bounceInRight');
    $('#img1').addClass('animated bounceInLeft');

	hideMe();
	setInterval(checkForMouseUpdates,100);
}

function checkForMouseUpdates(){
	console.log(winMouseY);
	var calculatedHeight = 0.90*windowHeightx;
	if (winMouseY<calculatedHeight){
		hideMe();
	}
	
	
}



function animationEndsHide(){
	if (isStartedAnimation==1){
    $('#button1').css( "display", "none" );
    $('#img1').css( "display", "none" );
	$('#button1').removeClass('animated bounceOutLeft');
    $('#img1').removeClass('animated bounceOutRight');
	isStartedAnimation = 0;
	console.log(isStartedAnimation);
	}
}

$('#button1').click(function(){
	$(this).css( "-moz-animation-delay", "0.0s" );
    $(this).addClass('animated bounceOutLeft');
    $('#img1').addClass('animated bounceOutRight');
	$(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', animationEndsHide);
	isStartedAnimation = 1;
	
	$('#myModal').css( "display", "block" );
	$('#myModal').addClass('animated fadeIn');
	$('#myModalCont').addClass('animated fadeInDown');
}); 
$('.close').click(function(){
	$('#myModal').css( "display", "none" );
	$('#button1').css( "display", "inline" );
    $('#img1').css( "display", "inline" );
	$('#button1').addClass('animated bounceInRight');
    $('#img1').addClass('animated bounceInLeft');
});