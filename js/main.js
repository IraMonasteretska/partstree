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
        $(this).toggleClass('open');
    });

    // brands
    $('.brandslist_more').click(function () {
        $(this).toggleClass('active');
        $(this).prev('.brandslist').toggleClass('open');
    });


    // product
    if ($('.mySwiper').length) {
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 15,
            slidesPerView: 3,
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 3,
                },

            },
        });
        var swiper2 = new Swiper(".mySwiper2", {
            spaceBetween: 10,
            effect: "fade",
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: swiper,
            },
        });
    }

    //   +-
    $('.minus').click(function () {
        var $input = $(this).siblings('input');
        var count = parseInt($input.val()) - 1;
        count = count < 0 ? 0 : count;
        $input.val(count).change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).siblings('input');
        $input.val(parseInt($input.val()) + 1).change();
        return false;
    });

    // Function to handle circle click/tap
    function handleCircleClick(event) {
        const circle = event.target.closest('.circlesch');
        if (!circle) return;

        const point = circle.getAttribute('data-point');
        const modal = document.querySelector(`.schmodal[data-modal="${point}"]`);
        if (modal) {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            } else {
                // Hide other modals
                document.querySelectorAll('.schmodal').forEach(m => {
                    m.style.display = 'none';
                });

                const circleRect = circle.getBoundingClientRect();
                const zoomRect = document.getElementById('zoom').getBoundingClientRect();
                const modalRect = modal.getBoundingClientRect();

                // const leftPosition = circleRect.left - zoomRect.left + (circleRect.width / 2) - (modalRect.width / 2);
                // const topPosition = circleRect.top - zoomRect.top + circleRect.height;

                // modal.style.left = `${leftPosition}px`;
                // modal.style.top = `${topPosition}px`;
                modal.style.display = 'block';
            }
        }
    }

    // Add click and touch events to circles
    const circles = document.querySelectorAll('.circlesch');
    circles.forEach(circle => {
        circle.addEventListener('click', handleCircleClick);
    });

    // Close modals when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.classList.contains('circlesch') && !event.target.closest('.schmodal')) {
            const modals = document.querySelectorAll('.schmodal');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });

    document.addEventListener('touchstart', function (event) {
        if (!event.target.classList.contains('circlesch') && !event.target.closest('.schmodal')) {
            const modals = document.querySelectorAll('.schmodal');
            modals.forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });


    // ---------------------------------------------------

    // show modals
    const schemeBoxes = document.querySelectorAll('.schemebox');

    schemeBoxes.forEach(box => {
        box.addEventListener('mouseover', function () {
            const id = this.id;
            const modal = document.querySelector(`.schmodal[data-modal="${id}"]`);
            const circle = document.querySelector(`.circlesch[data-point="${id}"]`);
            if (modal && circle) {
                const circleRect = circle.getBoundingClientRect();
                const zoomRect = document.getElementById('zoom').getBoundingClientRect();

                modal.style.display = 'block';
            }
        });

        box.addEventListener('mouseout', function () {
            const id = this.id;
            const modal = document.querySelector(`.schmodal[data-modal="${id}"]`);
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    $('.schmodal .close').click(function () {
        const modals = document.querySelectorAll('.schmodal');
        modals.forEach(modal => {
            modal.style.display = 'none';
        });
    });

    $('.mobsearchopen').click(function () {
        $('.searchboxmob').toggle()
    })

    $('.headertogglebtns button').click(function () {
        $('.headertogglebtns button').removeClass('active');
        $(this).addClass('active');
    })



    // --------------------------------------------------

    $(".dd-item").on("mouseenter", function () {
        $('.menubg').stop(true, true).fadeIn();
    });

    $(".dd-item").on("mouseleave", function () {
        $('.menubg').stop(true, true).fadeOut();
    });


    // menu btn

    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger').click(function () {
        $('.adaptmenu').toggleClass('show');
        $('.header__bottsect').toggleClass('open');
        $('body').toggleClass('hidden');
    })


    // ------------------------------
    if ($('.heroslider').length) {
        var swiper = new Swiper(".heroslider", {
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
            },
            breakpoints: {
                1400: {
                    slidesPerView: 4,
                },
                768: {
                    slidesPerView: 3,
                },
                576: {
                    slidesPerView: 2,
                },

            },
        });
    }

    // show selects
    $('.selectfld.v1:nth-child(1)').addClass('arr');

    $(' .selectfld.v1 select').change(function () {
        $(this).parents('.selectfld.v1').next('.selectfld.v1').removeClass('hide');


        $(' .selectfld.v1').removeClass('arr');
        $(this).parents(' .selectfld.v1').next('.selectfld.v1').addClass('arr');

        let allSelected = true;
        $(' .selectfld.v1 select').each(function () {
            if (!$(this).val()) {
                allSelected = false;
            }
        });

        const $button = $('#mainstepbtn');
        if (allSelected) {
            $button.removeClass('disabled').prop('disabled', false);
            $('.maindescription .maindescription__info').addClass('allselected');
        } else {
            $button.addClass('disabled').prop('disabled', true);
            $('.maindescription .maindescription__info').removeClass('allselected')
        }

    });

    // model list gallery 
    const mainImage = document.querySelector('.modgall-mainimg .imgwrap img');
    const sideImages = document.querySelectorAll('.modgall-sideimgs .imgwrap img');

    sideImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            mainImage.src = img.src;
        });

        img.addEventListener('click', () => {
            mainImage.src = img.src;
        });
    });


    const mainImageModal = document.querySelector('.catlistpopup__leftblock .imgwrap img');
    const sideImagesModal = document.querySelectorAll('.prodpicgroup .prodpicgroup__img img');

    sideImagesModal.forEach(img => {
        img.addEventListener('click', () => {
            mainImageModal.style.opacity = '0';

            setTimeout(() => {
                mainImageModal.src = img.src;

                mainImageModal.style.opacity = '1';
            }, 300);

            sideImagesModal.forEach(otherImg => {
                otherImg.parentElement.classList.remove('active');
            });

            img.parentElement.classList.add('active');
        });
    });


    // tooltip
    const tooltipTriggerList = document.querySelectorAll('#mainstepbtn.disabled[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $("#mainstepbtn.disabled").on("show.bs.tooltip", function (e) {
        if (!$(this).hasClass("disabled")) {
            return false;
        }
    });

    // MODAL make/modal
    // modal select2
    if ($('select').length) {
        $('.modal .selectfld .styledselect').select2({
            dropdownParent: $('#makemodel'),
            // placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }

    $('.selectfld.v2:nth-child(1)').addClass('arr');

    $(' .selectfld.v2 select').change(function () {
        $(this).parents('.selectfld.v2').next('.selectfld.v2').removeClass('hide');


        $(' .selectfld.v2').removeClass('arr');
        $(this).parents(' .selectfld.v2').next('.selectfld.v2').addClass('arr');

        let allSelected = true;
        $(' .selectfld.v2 select').each(function () {
            if (!$(this).val()) {
                allSelected = false;
            }
        });

        const $button1 = $('#modalstepbtn');
        if (allSelected) {
            $button1.removeClass('disabled').prop('disabled', false);
            $('.modal .maindescription__info').addClass('allselected');
        } else {
            $button1.addClass('disabled').prop('disabled', true);
            $('.modal .maindescription__info').removeClass('allselected')
        }

    });

    const tooltipTriggerList1 = document.querySelectorAll('#modalstepbtn.disabled[data-bs-toggle="tooltip"]')
    const tooltipList1 = [...tooltipTriggerList1].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    $("#modalstepbtn.disabled").on("show.bs.tooltip", function (e) {
        if (!$(this).hasClass("disabled")) {
            return false;
        }
    });


    $('.shoallinfo').click(function () {
        const currentWrapper = $(this).closest('.schmodal-wrapper');
        $('.schmodal-wrapper').not(currentWrapper).addClass('closest').removeClass('additional_schmodal');
        currentWrapper.toggleClass('closest additional_schmodal');
    });

    // fancybox
    if ($('[data-fancybox]').length) {
        Fancybox.bind("[data-fancybox]", {
            // Your custom options
        });
    }

    // category - clear filter
    $('.clearall').click(function () {
        $('.filterbox input[type="checkbox"]').prop('checked', false);
    });

    // model list - dropdowns
    $('.modlistsidebar__header').click(function () {
        $(this).toggleClass('open');
        $(this).next('ul').slideToggle();
    });
    $('.modlistsidebar > ul > li > p').click(function () {
        $(this).toggleClass('open');
        $(this).next('ul').slideToggle();
    });


    // category checkbox dropdown
    $('.filterwrapbox__ddarrow').click(function () {
        $(this).toggleClass('open');
        $(this).next('ul').toggle();
    });

    var swiper = new Swiper(".fliptext", {
        direction: "vertical",
        loop: true,
        simulateTouch: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            speed: 500,

        },
    });


});


