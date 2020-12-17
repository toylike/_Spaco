import slick from "slick-carousel";

export default function slider() {
	let slider1 = $('#reviews_slider1_js'),
		slider2 = $('#reviews_slider2_js'),
		current_slide = document.getElementById('reviews_current_slide_js'),
		current_slide_img = $('#reviews_current_slide_img_js');

	$(slider1).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: slider2,
		responsive: [{
			breakpoint: 1140,
			settings: {
				fade: false,
				arrows: true
			}
		}]
	});
	$(slider2).slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: slider1,
		arrows: true,
		focusOnSelect: true,
		centerPadding: '0',
		responsive: [{
				breakpoint: 1350,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1140,
				settings: {
					fade: true,
					arrows: false,
					slidesToShow: 1
				}
			}
		]
	});

	function functionMedia(mediaQuery) {
		if (mediaQuery.matches) {
			if (current_slide) {
				$(slider2).on('beforeChange', function (event, slick, currentSlide, nextSlide) {

					$(current_slide_img).attr({
						"src": `img/review${nextSlide+1}.png`
					});
					current_slide.classList.add("active");

				});

				current_slide.addEventListener("animationend", function () {
					current_slide.classList.remove("active");
					
				});

			}
		}
	}

	let mediaQuery = window.matchMedia("(min-width: 1140px)");
	functionMedia(mediaQuery);

	mediaQuery.addListener(functionMedia);

}