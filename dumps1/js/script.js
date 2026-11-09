var THEMEMASCOT = {};
(function ($) {
	("use strict");

	/* ---------------------------------------------------------------------- */
	/* --------------------------- Start Demo Switcher  --------------------- */
	/* ---------------------------------------------------------------------- */
	
	// var showSwitcher = true;
	// var $body = $("body");
	// var $style_switcher = $("#style-switcher");
	// if (!$style_switcher.length && showSwitcher) {
	// 	$.ajax({
	// 		url: "color-switcher/style-switcher.html",
	// 		success: function (data) {
	// 			$body.append(data);
	// 		},
	// 		dataType: "html",
	// 	});
	// }

	// var showSwitcher = true;
	// var $style_switcher = $("#style-switcher");

	// if (!$style_switcher.length && showSwitcher) {
	// 	$.ajax({
	// 		url: "color-switcher/style-switcher.html",
	// 		dataType: "html",
	// 		success: function (data) {
	// 			try {
	// 			const $parsed = $("<div>").html(data).contents();
	// 			$("body").append($parsed);
	// 			} catch (e) {
	// 			console.error("Append failed:", e.message);
	// 			console.warn("Response was:", data);
	// 			}
	// 		},
	// 		error: function (xhr, status, error) {
	// 			console.error("AJAX load failed:", status, error);
	// 		}
	// 	});
	// }

	/* ---------------------------------------------------------------------- */
	/* ----------------------------- En Demo Switcher  ---------------------- */
	/* ---------------------------------------------------------------------- */

	THEMEMASCOT.isRTL = {
		check: function () {
			if ($("html").attr("dir") === "rtl") {
				return true;
			} else {
				return false;
			}
		},
	};

	THEMEMASCOT.isLTR = {
		check: function () {
			if ($("html").attr("dir") !== "rtl") {
				return true;
			} else {
				return false;
			}
		},
	};

	/* ---------------------------------------------------------------------- */
	/* ----------------------------- En Demo Switcher  ---------------------- */
	/* ---------------------------------------------------------------------- */

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($(".preloader").length) {
			$(".preloader").delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($(".main-header").length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $(".header-style-one");
			var scrollLink = $(".scroll-to-top");
			var sticky_header = $(".main-header .sticky-header");
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			} else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if ($(".main-header li.dropdown ul").length) {
		$(".main-header .navigation li.dropdown").append(
			'<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>'
		);
		//Megamenu Toggle
	}

	//Hidder bar
	if ($(".hidden-bar").length) {
		//Menu Toggle Btn
		$(".toggle-hidden-bar").on("click", function () {
			$("body").addClass("active-hidden-bar");
		});

		//Menu Toggle Btn
		$(".hidden-bar-back-drop, .hidden-bar .close-btn").on(
			"click",
			function () {
				$("body").removeClass("active-hidden-bar");
			}
		);
	}



// 1. DEFINE the function FIRST
function initializeMobileMenu() {
    if ($(".mobile-menu").length) {
        var mobileMenuContent = $(".main-header .main-menu .navigation").html();
        
        $(".mobile-menu .navigation").append(mobileMenuContent);
        $(".sticky-header .navigation").append(mobileMenuContent);
        
        $(".mobile-menu .close-btn").on("click", function () {
            $("body").removeClass("mobile-menu-visible");
        });

        $(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
            $(this).prev("ul").slideToggle(500);
            $(this).toggleClass("active");
            $(this).prev(".mega-menu").slideToggle(500);
        });

        $(".mobile-nav-toggler").on("click", function () {
            $("body").addClass("mobile-menu-visible");
        });

        $(".mobile-menu .menu-backdrop, .mobile-menu .close-btn").on("click", function () {
            $("body").removeClass("mobile-menu-visible");
        });
    }
}

// 2. THEN call it after fetch
document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Now call it
            initializeMobileMenu();
        })
        .catch(error => console.error('Error loading header:', error));
});

	//Header Search
	// if ($(".search-btn").length) {
	// 	$(".search-btn").on("click", function () {
	// 		$(".main-header").addClass("moblie-search-active");
	// 	});
	// 	$(".close-search, .search-back-drop").on("click", function () {
	// 		$(".main-header").removeClass("moblie-search-active");
	// 	});
	// }

	// Banner one slider area start here ***
	if ($(".banner-slider").length) {
		const swiper = new Swiper(".banner-slider", {
			loop: true,
			slidesPerView: 1,
			effect: "fade",
			speed: 3000,
			autoplay: {
				delay: 7000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".banner-arry-next",
				prevEl: ".banner-arry-prev",
			},
			pagination: {
				el: ".banner-pagination",
				clickable: true,
			},
		});

		const animateSwiper = () => {
			$(".banner-slider [data-animation]").each(function () {
				const $el = $(this);
				const anim = $el.data("animation");
				const delay = $el.data("delay");
				const duration = $el.data("duration");

				$el.removeClass(`anim${anim}`)
					.addClass(`${anim} animated`)
					.css({
						animationDelay: delay,
						animationDuration: duration,
					})
					.one("animationend", () => {
						$el.removeClass(`${anim} animated`);
					});
			});
		};

		animateSwiper();

		swiper.on("slideChange", () => {
			$(".banner-slider [data-animation]").removeClass("animated");
			animateSwiper();
		});
	}
	// Banner one slider area end here ***

	// Banner four slider area start here ***
	if ($(".banner-slider-four").length) {
		var swiper = new Swiper(".banner-slider-four", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 3000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				nextEl: ".banner-slider-four-next",
				prevEl: ".banner-slider-four-prev",
			},
		});
	}
	// Banner four slider area end here ***

	// Banner four slider area start here ***
	if ($(".banner-slider-five").length) {
		var swiper = new Swiper(".banner-slider-five", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 1500,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			navigation: {
				nextEl: ".banner-slider-five-next",
				prevEl: ".banner-slider-five-prev",
			},
		});
	}
	// Banner four slider area end here ***

	// Banner four slider area start here ***
	if ($(".one-grid-slider").length) {
		var swiper = new Swiper(".one-grid-slider", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			speed: 2000,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".next",
				prevEl: ".prev",
			},
		});
	}
	// Banner four slider area end here ***

	//testimonial-carousel Two
	if ($(".testimonial-carousel-two").length) {
		$(".testimonial-carousel-two").slick({
			infinite: true,
			speed: 300,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: true,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
	}

	//service-carousel
	if ($(".service-slider").length) {
		var swiper = new Swiper(".service-slider", {
			spaceBetween: 30,
			speed: 1000,
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				991: {
					slidesPerView: 2,
				},
				1399: {
					slidesPerView: 3,
				},
			},
		});
	}

	// service-carousel Two
	var swiper = new Swiper(".service-two-slider2", {
		loop: "true",
		slidesPerView: 4,
		navigation: true,
		spaceBetween: 0,
		speed: 1000,
		breakpoints: {
			1199: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
			},
			320: {
				slidesPerView: 2,
			},
		},
		navigation: {
			nextEl: ".service-two-next",
			prevEl: ".service-two-prev",
		},
	});

	// Testimonial Carousel
	if ($(".testimonial-carousel-one").length) {
		$(".testimonial-carousel-one").slick({
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			arrows: false,
			navText: [
				'<span class="icon-arrow-left"></span>',
				'<span class="icon-arrow-right"></span>',
			],
		});
	}

	//testimonial-carousel Single
	if ($(".testimonial-single-slider").length) {
		$(".testimonial-single-slider").slick({
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 3000,
			fade: false,
			fadeSpeed: 1000,
		});
	}

	// Testinomials Carousel
	if ($(".testimonial-slider-content").length) {
		var slider = new Swiper(".testimonial-slider-content", {
			slidesPerView: 1,
			spaceBetween: 30,
			navigation: true,
			centeredSlides: true,
			loop: true,
			loopedSlides: 6,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
		var thumbs = new Swiper(".testimonial-thumbs", {
			slidesPerView: "auto",
			spaceBetween: 0,
			centeredSlides: true,
			loop: true,
			slideToClickedSlide: true,
		});
		slider.controller.control = thumbs;
		thumbs.controller.control = slider;
	}

	//product bxslider
	if ($(".product-details .bxslider").length) {
		$(".product-details .bxslider").bxSlider({
			nextSelector: ".product-details #slider-next",
			prevSelector: ".product-details #slider-prev",
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>',
			mode: "fade",
			auto: "true",
			speed: "700",
			pagerCustom: ".product-details .slider-pager .thumb-box",
		});
	}

	//brand-carousel
	if ($(".brand-slider").length) {
		var swiper = new Swiper(".brand-slider", {
			loop: true,
			freemode: true,
			slidesPerView: 1,
			spaceBetween: 0,
			centeredSlides: true,
			allowTouchMove: false,
			speed: 3000,
			autoplay: {
				delay: 1,
				disableOnInteraction: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 4,
				},
				1399: {
					slidesPerView: 5,
				},
			},
		});
	}

	//MixItup Gallery
	if ($(".filter-list").length) {
		$(".filter-list").mixItUp({});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($(".dial").length) {
		$(".dial").appear(
			function () {
				var elm = $(this);
				var color = elm.attr("data-fgColor");
				var perc = elm.attr("value");

				elm.knob({
					value: 0,
					min: 0,
					max: 100,
					skin: "tron",
					readOnly: true,
					thickness: 0.15,
					dynamicDraw: true,
					displayInput: false,
				});
				$({ value: 0 }).animate(
					{ value: perc },
					{
						duration: 2000,
						easing: "swing",
						progress: function () {
							elm.val(Math.ceil(this.value)).trigger("change");
						},
					}
				);
				//circular progress bar color
				$(this).append(function () {
					// elm.parent().parent().find('.circular-bar-content').css('color',color);
					//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
				});
			},
			{ accY: 20 }
		);
	}

	// Blog Slider
	if ($(".blog-slider").length) {
		var swiper = new Swiper(".blog-slider", {
			loop: "true",
			spaceBetween: 24,
			speed: 1000,
			pagination: {
				el: ".blog-pagination",
				clickable: true,
			},
			breakpoints: {
				767: {
					slidesPerView: 1,
				},
				991: {
					slidesPerView: 2,
				},
				1199: {
					slidesPerView: 3,
				},
			},
		});
	}

	// Case Slider
	if ($(".case-slider").length) {
		var swiper = new Swiper(".case-slider", {
			loop: "true",
			spaceBetween: 35,
			speed: 1000,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			breakpoints: {
				767: {
					slidesPerView: 2,
				},
				1199: {
					slidesPerView: 3,
				},
				1399: {
					slidesPerView: 4,
				},
			},
		});
	}

	// Testimonial Slider five
	if ($(".testimonial-slider-five").length) {
		var swiper = new Swiper(".testimonial-slider-five", {
			loop: "true",
			spaceBetween: 35,
			speed: 1000,
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".testimonial-pagination",
				clickable: true,
			},
			breakpoints: {
				767: {
					slidesPerView: 1,
				},
				1350: {
					slidesPerView: 2,
				},
				1600: {
					slidesPerView: 3,
				},
			},
		});
	}

	// Hover add & remove js area start here ***
	$(".gellery-block").hover(function () {
		$(".gellery-block").removeClass("active");
		$(this).addClass("active");
	});
	// Hover add & remove js area end here ***

	// Nice seclect area start here ***
	$(document).ready(function () {
		$("select").niceSelect();
	});
	// Nice seclect area end here ***

	//Jquery Knob animation  // Pie Chart Animation
	if ($(".dial").length) {
		$(".dial").appear(
			function () {
				var elm = $(this);
				var color = elm.attr("data-fgColor");
				var perc = elm.attr("value");

				elm.knob({
					value: 0,
					min: 0,
					max: 100,
					skin: "tron",
					readOnly: true,
					thickness: 0.07,
					dynamicDraw: true,
					displayInput: false,
				});

				$({ value: 0 }).animate(
					{ value: perc },
					{
						duration: 2000,
						easing: "swing",
						progress: function () {
							elm.val(Math.ceil(this.value)).trigger("change");
						},
					}
				);

				//circular progress bar color
				$(this).append(function () {
					// elm.parent().parent().find('.circular-bar-content').css('color',color);
					//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
				});
			},
			{ accY: 20 }
		);
	}
	//Jquery Knob animation  // Pie Chart Animation

	// Click active js area start here ***
	// $(document).ready(function () {
	// 	$(".click-active").click(function () {
	// 		$(".click-active").removeClass("active");
	// 		$(this).addClass("active");
	// 	});
	// });
	// Click active js area end here ***

	// Horizontal accordion js area start here ***
	$(".hzAccordion__item").on("click", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	// Horizontal accordion js area end here ***

	//Accordion Box
	if ($(".acc-btn").length) {
		$(".acc-btn").on("click", function () {
			var $clickedItem = $(this).closest(".acc-item");

			if ($clickedItem.hasClass("active")) {
				$clickedItem
					.removeClass("active")
					.find(".acc-collapse")
					.slideUp()
					.removeClass("show");
			} else {
				$(".acc-item")
					.removeClass("active")
					.find(".acc-collapse")
					.slideUp()
					.removeClass("show");
				$clickedItem
					.addClass("active")
					.find(".acc-collapse")
					.slideDown()
					.addClass("show");
			}
		});
	}

	//Fact Counter + Text Count
	if ($(".count-box").length) {
		$(".count-box").appear(
			function () {
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text(),
					}).animate(
						{
							countNum: n,
						},
						{
							duration: r,
							easing: "linear",
							step: function () {
								$t.find(".count-text").text(Math.floor(this.countNum));
							},
							complete: function () {
								$t.find(".count-text").text(this.countNum);
							},
						}
					);
				}
			},
			{ accY: 0 }
		);
	}

	//Tabs Box
	if ($(".tabs-box").length) {
		$(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
			e.preventDefault();
			var target = $($(this).attr("data-tab"));

			if ($(target).is(":visible")) {
				return false;
			} else {
				target
					.parents(".tabs-box")
					.find(".tab-buttons")
					.find(".tab-btn")
					.removeClass("active-btn");
				$(this).addClass("active-btn");
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.fadeOut(0);
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.removeClass("active-tab animated fadeIn");
				$(target).fadeIn(300);
				$(target).addClass("active-tab animated fadeIn");
			}
		});
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	// Testinomials Carousel
	var swiper = new Swiper(".testimonial-slider", {
		loop: "true",
		navigation: true,
		spaceBetween: 30,
		speed: 1000,
		navigation: {
			nextEl: ".testimonial-next",
			prevEl: ".testimonial-prev",
		},
	});

	var swiper = new Swiper(".testimonial-slider-two", {
		loop: "true",
		navigation: true,
		spaceBetween: 30,
		speed: 1000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".testimonial-next-two",
			prevEl: ".testimonial-prev-two",
		},
	});

	var swiper = new Swiper(".testimonial-slider-three", {
		loop: "true",
		slidesPerView: 1,
		navigation: true,
		spaceBetween: 30,
		speed: 1000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".testimonial-next-three",
			prevEl: ".testimonial-prev-three",
		},
	});

	if (
		$(".testimonial-slider-four").length &&
		$(".testimonial-slider-thumb-four").length
	) {
		var swiperThumb = new Swiper(".testimonial-slider-thumb-four", {
			spaceBetween: 15,
			speed: 1000,
			freeMode: true,
			breakpoints: {
				320: { slidesPerView: 1 },
				575: { slidesPerView: 2 },
				991: { slidesPerView: 3 },
			},
		});

		var swiper = new Swiper(".testimonial-slider-four", {
			spaceBetween: 50,
			speed: 1000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			thumbs: {
				swiper: swiperThumb,
			},
		});
	}

	var swiper = new Swiper(".testimonial-slider-six", {
		loop: "true",
		navigation: true,
		spaceBetween: 30,
		speed: 1000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".testimonial-next-six",
			prevEl: ".testimonial-prev-six",
		},
	});

	// Background image ***
	$("[data-background").each(function () {
		$(this).css(
			"background-image",
			"url( " + $(this).attr("data-background") + "  )"
		);
	});

	//product bxslider
	if ($(".product-details .bxslider").length) {
		$(".product-details .bxslider").bxSlider({
			nextSelector: ".product-details #slider-next",
			prevSelector: ".product-details #slider-prev",
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>',
			mode: "fade",
			auto: "true",
			speed: "700",
			pagerCustom: ".product-details .slider-pager .thumb-box",
		});
	}

	//Quantity box
	$(".quantity-box .add").on("click", function () {
		if ($(this).prev().val() < 999) {
			$(this)
				.prev()
				.val(+$(this).prev().val() + 1);
		}
	});
	$(".quantity-box .sub").on("click", function () {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1)
				$(this)
					.next()
					.val(+$(this).next().val() - 1);
		}
	});

	// Mouse move paralax area end here ***
	if ($(window).width() > 780) {
		$(".paralax__animation").mousemove(function (e) {
			$("[data-depth]").each(function () {
				var depth = $(this).data("depth");
				var amountMovedX = (e.pageX * -depth) / 4;
				var amountMovedY = (e.pageY * -depth) / 4;

				$(this).css({
					transform:
						"translate3d(" +
						amountMovedX +
						"px," +
						amountMovedY +
						"px, 0)",
				});
			});
		});
	}
	// Mouse move paralax area end here ***

	//Price Range Slider
	if ($(".price-range-slider").length) {
		$(".price-range-slider").slider({
			range: true,
			min: 10,
			max: 99,
			values: [10, 60],
			slide: function (event, ui) {
				$("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
			},
		});

		$("input.property-amount").val(
			$(".price-range-slider").slider("values", 0) +
				" - $" +
				$(".price-range-slider").slider("values", 1)
		);
	}

	// count Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
			function () {
				var el = $(this);
				var percent = el.data("percent");
				$(el).css("width", percent).addClass("counted");
			},
			{
				accY: -50,
			}
		);
	}

	//Tabs Box
	if ($(".tabs-box").length) {
		$(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
			e.preventDefault();
			var target = $($(this).attr("data-tab"));

			if ($(target).is(":visible")) {
				return false;
			} else {
				target
					.parents(".tabs-box")
					.find(".tab-buttons")
					.find(".tab-btn")
					.removeClass("active-btn");
				$(this).addClass("active-btn");
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.fadeOut(0);
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.removeClass("active-tab animated fadeIn");
				$(target).fadeIn(300);
				$(target).addClass("active-tab animated fadeIn");
			}
		});
	}

	//Progress Bar
	if ($(".progress-line").length) {
		$(".progress-line").appear(
			function () {
				var el = $(this);
				var percent = el.data("width");
				$(el).css("width", percent + "%");
			},
			{ accY: 0 }
		);
	}

	//LightBox / Fancybox
	if ($(".lightbox-image").length) {
		$(".lightbox-image").fancybox({
			openEffect: "fade",
			closeEffect: "fade",
			helpers: {
				media: {},
			},
		});
	}

	// Scroll to a Specific Div
	if ($(".scroll-to-target").length) {
		$(".scroll-to-target").on("click", function () {
			var target = $(this).attr("data-target");
			// animate
			$("html, body").animate(
				{
					scrollTop: $(target).offset().top,
				},
				0
			);
		});
	}

	// Scroll to Top Button
	if ($(".goTop-btn").length) {
		$(".goTop-btn").on("click", function () {
			$("html, body").animate({ scrollTop: 0 }, 500);
		});
	}

	// Scroll to 1000px Down Button
	if ($(".goBottom-btn").length) {
		$(".goBottom-btn").on("click", function () {
			$("html, body").animate({ scrollTop: 1000 }, 500);
		});
	}

	// Elements Animation
	if ($(".wow").length) {
		Splitting();
		var wow = new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: true,
			live: true,
		});
		wow.init();
	}

	/* ---------------------------------------------------------------------- */
	/* ----------- Activate Menu Item on Reaching Different Sections ---------- */
	/* ---------------------------------------------------------------------- */
	var $onepage_nav = $(".onepage-nav");
	var $sections = $("section");
	var $window = $(window);
	function TM_activateMenuItemOnReach() {
		if ($onepage_nav.length > 0) {
			var cur_pos = $window.scrollTop() + 2;
			var nav_height = $onepage_nav.outerHeight();
			$sections.each(function () {
				var top = $(this).offset().top - nav_height - 80,
					bottom = top + $(this).outerHeight();

				if (cur_pos >= top && cur_pos <= bottom) {
					$onepage_nav
						.find("a")
						.parent()
						.removeClass("current")
						.removeClass("active");
					$sections.removeClass("current").removeClass("active");
					$onepage_nav
						.find('a[href="#' + $(this).attr("id") + '"]')
						.parent()
						.addClass("current")
						.addClass("active");
				}

				if (cur_pos <= nav_height && cur_pos >= 0) {
					$onepage_nav
						.find("a")
						.parent()
						.removeClass("current")
						.removeClass("active");
					$onepage_nav
						.find('a[href="#header"]')
						.parent()
						.addClass("current")
						.addClass("active");
				}
			});
		}
	}

	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on("scroll", function () {
		headerStyle();
		TM_activateMenuItemOnReach();
	});

	/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on("load", function () {
		handlePreloader();
	});
})(window.jQuery);
