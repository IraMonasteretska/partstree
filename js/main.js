$(document).ready(function () {
    // styled select
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }

    // header
    $('.header__acc').click(function () {
        $('.header__accdd').toggleClass('show');
    });

    $('.itembtn .close').click(function () {
        $(this).parent().remove();
    })

    $('.showall').click(function () {
        $(this).parents('.filterbox').toggleClass('active');
        $(this).find('span').toggle();
    });

    $('.filterbox .title').click(function () {
        $(this).next('.filterwrapbox').slideToggle();
    });

    // brands
    $('.brandslist_more').click(function () {
        $(this).toggleClass('active');
        $(this).find('span').toggle();
        $(this).prev('.brandslist').toggleClass('open');
    });


    // product
    if ($('.mySwiper').length) {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 10,
            freeMode: true,
            watchSlidesProgress: true,
            slidesPerView: 3,
            breakpoints: {
                575: {
                    slidesPerView: 4,
                },

            },
        });
        var swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            effect: "fade",
            // navigation: {
            //   nextEl: ".swiper-button-next",
            //   prevEl: ".swiper-button-prev",
            // },
            thumbs: {
                swiper: swiper,
            },
        });
    }

    //   +-
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });




    if($(window).width() > 990) {
        $(function () {
            $('.imgZoom').mooZoom({
                zoom: {
                    width: 200,
                    height: 200,
                    zIndex: 600
                },
                overlay: {
                    // opacity: 0.65,
                    zIndex: 500,
                    // backgroundColor: '#000000',
                    fade: true
                },
                detail: {
                    zIndex: 600,
                    margin: {
                        top: 0,
                        left: 10
                    },
                    fade: true
                },
                animationDuration: 1000,
    
    
            });
        });
    }
   

});