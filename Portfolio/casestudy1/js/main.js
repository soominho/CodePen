$(function(){

	$("#gnb > ul > li").hover(
		function(){
			$("#header .menu").addClass("active");
		},
		function(){
			$("#header .menu").removeClass("active");
		}
	);
	
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});

	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active");
	});

	$("#gnb > ul > li:first-child > a").focusin(function(){
		$("#header .menu").addClass("active");
	});

	$("#gnb li:last-child li:last-child a").focusout(function(){
		$("#header .menu").removeClass("active");
	});

	const mainSwiper = new Swiper(".mainSwiper", {
		// navigation: {
			// nextEl: ".mainSwiper .swiper-button-next",
			// prevEl: ".mainSwiper .swiper-button-prev",
		// },

		loop: true
	});
	$(".main_slider .controller .prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".main_slider .controller .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
});