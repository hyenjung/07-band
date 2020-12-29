function Slide() {
var swiper = new Swiper('.slide.swiper-container' ,{
	slidesPerView: 1,
	loop: true,
	effect: 'fade',
	autoplay: {delay: 3000}
})
}
Slide();