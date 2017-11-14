export var jq = jQuery(function() {

    /*	WindowHeight	*/
    function winHeight() {
        if (jQuery('.home')) {
            var header = jQuery('#header').height() + jQuery('#barra-brasil').height() + 1;
            var altTela = jQuery(window).height();
            var rodape = jQuery('#footer').height();
            // jQuery('#wellcome').css('height',altTela - header);
            // jQuery('#swiper-wellcome.swiper-container ').css('height', altTela - header);
            jQuery('#videos').css({
                'height': altTela,
                'max-height': altTela
            });
            jQuery('#docs').css({
                'height': altTela - rodape,
                'max-height': altTela - rodape
            });
        }
    }
    winHeight();

    /* Toltip 
    jQuery(function (){
    	jQuery('[data-toggle="tooltip"]').tooltip({
    		placement : 'left'
    	})
    })*/

    /* Swiper */
    if (jQuery(".swiper-container").length > 0) {
        jQuery(document).ready(function() {
            var swiperWell = new Swiper('#swiper-wellcome.swiper-container', {
                pagination: '#swiper-wellcome .swiper-pagination',
                paginationClickable: true,
                keyboardControl: true,
                preventClicks: false,
                loop: true,
                onSlideChangeEnd: function(swiper) {
                    verifyFirstSlide();
                }
            });
            verifyFirstSlide();

            jQuery('.swiper-button-next').on('click', function(e) { swiperWell.slideNext(); })
            jQuery('.swiper-button-prev').on('click', function(e) { swiperWell.slidePrev(); })

            var swiperVid = new Swiper('#swiper-video.swiper-container', {
                slidesPerView: 3,
                spaceBetween: 30,
                initialSlide: 0,
                breakpoints: {
                    991: {
                        spaceBetween: 10
                    },
                    767: {
                        initialSlide: 0,
                        spaceBetween: 10,
                        slidesPerView: 1,
                        centeredSlides: true,
                        paginationClickable: true
                    }
                }
            });
        })
    }

    function verifyFirstSlide() {
        if (jQuery('.first.swiper-slide-active').length > 0) {
            //alert('esta no primeiro slide');
            jQuery('.swiper-pagination').fadeOut("slow");
        } else {
            //alert('nao esta no primeiro slide');
            jQuery('.swiper-pagination').fadeIn("slow");
        }
    }
    verifyFirstSlide();

    //Smooth Scrolling
    // jQuery('a[href^="#"]').on('click',function (e){
    // 	if (jQuery('.home').length > 0) {
    // 		e.preventDefault();
    // 		var target = this.hash;
    // 		var $target = jQuery(target);
    // 		jQuery('html, body').stop().animate({
    // 			'scrollTop': $target.offset().top
    // 		}, 900, 'swing', function () {
    // 			window.location.hash = target;
    // 		});
    // 	}
    // });

    //Click Filtros


    /* Watch function */
    jQuery(window).resize(function() {
        winHeight();
    });

    jQuery(".toggle-contraste").click(function() {
        if (jQuery("body").hasClass("accessibility")) {
            jQuery("body").removeClass("accessibility");
            jQuery.cookie("acessibilidade", "", {
                expires: 365,
                path: '/'
            });
            return false;
        } else {
            jQuery("body").addClass("accessibility");
            jQuery.cookie("acessibilidade", "accessibility", {
                expires: 365,
                path: '/'
            });
            return false;
        }
    });

    /* Paginação */
    jQuery('#myTabs a').click(function(e) {
        e.preventDefault()
        jQuery(this).tab('show')
    })
    jQuery('.nextTab').click(function() {
        jQuery('.nav-tabs > .active').next('li').find('a').trigger('click');
    });

    jQuery('.prevTab').click(function() {
        jQuery('.nav-tabs > .active').prev('li').find('a').trigger('click');
    });

    if (jQuery('.home')) {
    	console.log('entrei')
        jQuery(window).scroll(function() {
            var scroll = jQuery(window).scrollTop();
            if (scroll <= jQuery('#passo').offset().top) {
                jQuery('.sec1').addClass('active');
                jQuery('.sec2').removeClass('active');
            }
            if (scroll >= jQuery("#bemvindo").offset().top + 300 && scroll < jQuery("#passo").offset().top) {
                jQuery(".sec2").addClass("active");
                jQuery('.sec1, .sec3, .sec4, .sec5, .sec6, .sec7, .sec8').removeClass("active");
            }
            if (scroll >= jQuery("#passo").offset().top + 50 && scroll < jQuery("#passos").offset().top) {
                jQuery(".sec3").addClass("active");
                jQuery('.sec1, .sec2, .sec4, .sec5, .sec6, .sec7, .sec8').removeClass("active");
            }
            if (scroll >= jQuery("#passos").offset().top && scroll < jQuery("#acessar").offset().top + 1800) {
                jQuery(".sec4").addClass("active");
                jQuery('.sec1, .sec2, .sec3, .sec5, .sec6, .sec7, .sec8').removeClass("active");
            }
        })

        // SCROLL
        $(".scroll").click(function(event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top - 90 }, 800);
        });
    }



});