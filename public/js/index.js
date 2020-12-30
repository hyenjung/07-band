function Slide() {
var swiper = new Swiper('.slide.swiper-container' ,{
	slidesPerView: 1,
	loop: true,
	effect: 'fade',
	autoplay: {delay: 3000}
})
}
Slide();

function navi() {
	$("header nav ul.gnb >li:last-child").mouseenter(function(){
		$("header nav ul.gnb >li:last-child").find("li").show();
	});
	$("header nav ul.gnb >li:last-child").mouseleave(function(){
		$("header nav ul.gnb >li:last-child").find("li").hide();
	});
  $(".search > i.last").click(function(){
	$("header nav ul.gnb").find("li:not(:nth-child(1))").toggle();
	$("header nav ul.gnb").find("li").eq(5).stop().hide();
});
}
navi();