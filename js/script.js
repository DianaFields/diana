
function animatMenu(){
		$(window).scroll(function() {
			var height = $(window).scrollTop();
			
  //    	if (height > 80){
 	// 		$('#scroll-menu').addClass('fixed').removeAttr('style');
  //    	} 
		// else if(height < 80){
		// 	$('#scroll-menu').removeClass('fixed').css({
  //         	position: 'relative'
  //       	});
		// }
		// if  (height > 80 & height < 100)  {
		// 	// $('.hm-nav').css('top','-180px');
		// 	$('.hm-nav').css('position','fixed');
		// 	$('.hm-nav').css('height','50px');
		// 	$('.hm-nav').css('background','rgba(60,28,255,.7)');
		// 	// $('.hm-nav').css('opacity','0');
		// 	$('.hm-nav').animate({
		// 		// top:"-80px"
		// 	});

		// } else if(height > 100){
		// 	$('.hm-nav').css('top','0');
		// 	//$('.hm-nav').css('opacity','1');
		// 	// $('.hm-nav').animate({
		// 	// 	top:"0",
		// 	// 	duration: 7000,
		// 	// });
		// } 

		// else if  (height <  80){
		// 	$('.hm-nav').css('position','relative');
		// }



	});
}



function loadContact(){
	$("#contacto").load("sections/contact.html"); 
	$(".header").load("sections/header.html"); 
	$(".header-inter").load("../sections/header-inter.html"); 
}
function deskOnly(){
	var mediaquery = window.matchMedia("(min-width: 768px)");
	if (mediaquery.matches) {
		$('#vdoCisco').html('<video style="width:100%;" autoplay="autoplay" muted="muted" preload="auto" controls><source src="../img/videos/beHiveHD.mp4" type="video/mp4"></video>');
	
	}
}
var heading = document.querySelector('#curso');

function cursormov(){
	$(document).mousemove(function(event){
		$('#mousepos').html('Your mouse is currently at: '+ event.pageX +', '+ event.pageY); 
	});
}
function link(){
		 // portfolio
	 $('.item a').click(function() {
	     var itemID = $(this).attr('href');
	     $('.gallery').addClass('item_open');
	     $(itemID).addClass('item_open');
	     return false;
	 });
	 $('.close').click(function() {
	     $('.port, .gallery ul').removeClass('item_open');
	     return false;
	 });

	 $(".item a").click(function() {
	     $('html, body').animate({
	         scrollTop: parseInt($("#top").offset().top)
	     }, 400);
	 });
}
$(document).ready(function(){

	$(window).enllax();
	animatMenu();
	loadContact();
	deskOnly();
	cursormov();
	link();
});