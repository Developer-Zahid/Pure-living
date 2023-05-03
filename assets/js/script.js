(function ($) {
    "use strict"

	/* Document on load functions */
	$(window).on('load', function () {
    // preLoader();
		headerHeightFixer();
  });

	/* Preloader init */
	function preLoader(){
		$(".preloader").delay(1000).fadeOut("slow");
	}

	/* Fixed Header */
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > $('.header').innerHeight()) {
			$(".header").addClass("header--fixed");
		} else {
			$(".header").removeClass("header--fixed");
		}
	});

	/* scroll top */
	$(".scroll-top").on("click", function () {
		$("html,body").animate({scrollTop: 0},50);
	});
	$(window).on("scroll", function () {
		var scrolling = $(this).scrollTop();

		if (scrolling > 200) {
			$(".scroll-top").fadeIn();
		} else {
			$(".scroll-top").fadeOut();
		}
	});

	/* Fix Header Height function */
    function headerHeightFixer(){
		$('header').before('<div class="header-height-fix"></div>');
    	$('.header-height-fix').css('height', $('header').innerHeight() - 2 +'px');
	};

	/* Closes responsive menu when a navbar link is clicked */
	$(".nav-link, .dropdown-item").on("click", function (e) {
		if( $(this).hasClass("dropdown-toggle") ){
			e.preventDefault();
		}else{
			$(".navbar-collapse").collapse("hide");
			$("html").removeClass("overflow-hidden");
			$('.offCanvasMenuCloser').removeClass('show');
		}
	});
	$('.navbar-toggler').on('click', function () {
        $("html").toggleClass('overflow-hidden');
        $('.offCanvasMenuCloser').toggleClass('show');
    });
    $('.offCanvasMenuCloser').on('click', function () {
        $(this).removeClass('show');
        $("html").removeClass("overflow-hidden");
    });

	/* Set Current Year function */
	(function(){
		const currentYear =  new Date().getFullYear();
		$("#current-year").text(currentYear);
	})();

  /*  Testimonial slider one */
  $(".testimonial__slider--one").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      centerMode: true,
      centerPadding: "0px",
      speed: 8000,
      arrows: false,
      prevArrow: '<button class="slick__arrows slick__arrows--left border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button class="slick__arrows slick__arrows--right border-0 d-inline-flex align-items-center justify-content-center position-absolute"><i class="fas fa-chevron-right"></i></button>',
      dots: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      infinite: true,
      responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
  });

	/*  Testimonial slider two */
  $(".testimonial__slider--two").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      centerMode: true,
      centerPadding: "0px",
      rtl: true,
      speed: 8000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      infinite: true,
      responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
  });

  /* Gallery Image slider */
  (function(){
    const $galleryImageSlider = $('.gallery__image-slider');    
    $galleryImageSlider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {   
      let slickProgress = ((100 / slick.slideCount) * (slick.currentSlide + 1));
      $("#currentSlideNumber").text("0" + (slick.currentSlide + 1));
      $("#totalSlideNumber").text("0" + slick.slideCount);      
      $('.slick-progressbar__progress').css('width', slickProgress + '%')
    });

    $galleryImageSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      cssEase: 'linear',
      speed: 500,
      arrows: true,
      prevArrow: '<button class="slick__arrows slick__arrows--left d-inline-flex align-items-center justify-content-center position-absolute"><span class="pure-living-icon-arrow-left"></span></button>',
      nextArrow: '<button class="slick__arrows slick__arrows--right d-inline-flex align-items-center justify-content-center position-absolute"><span class="pure-living-icon-arrow-right"></span></button>',
      dots: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      infinite: true,
      asNavFor: '.gallery__content-slider'
    });
  })();

  $(".gallery__content-slider").slick({
    asNavFor: '.gallery__image-slider',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
    speed: 500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    infinite: true,
  });


})(jQuery);