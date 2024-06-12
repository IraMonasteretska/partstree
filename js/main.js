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



    if ($('.imgZoom').length) {
        if ($(window).width() > 990) {
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
    }

    // l
    var scale = 1,
        panning = false,
        pointX = 0,
        pointY = 0,
        start = { x: 0, y: 0 },
        zoom = document.getElementById("zoom");

    function setTransform() {
        zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
    }

    zoom.onmousedown = function (e) {
        e.preventDefault();
        start = { x: e.clientX - pointX, y: e.clientY - pointY };
        panning = true;
    }

    zoom.onmouseup = function (e) {
        panning = false;
    }

    zoom.onmousemove = function (e) {
        e.preventDefault();
        if (!panning) {
            return;
        }
        pointX = (e.clientX - start.x);
        pointY = (e.clientY - start.y);
        setTransform();
    }

    zoom.onwheel = function (e) {
        e.preventDefault();
        var xs = (e.clientX - pointX) / scale,
            ys = (e.clientY - pointY) / scale,
            delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
        (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
        pointX = e.clientX - xs * scale;
        pointY = e.clientY - ys * scale;

        setTransform();
    }

    // Touch events
    zoom.ontouchstart = function (e) {
        e.preventDefault();
        var touch = e.touches[0];
        start = { x: touch.clientX - pointX, y: touch.clientY - pointY };
        panning = true;
    }

    zoom.ontouchend = function (e) {
        panning = false;
    }

    zoom.ontouchmove = function (e) {
        e.preventDefault();
        if (!panning) {
            return;
        }
        var touch = e.touches[0];
        pointX = (touch.clientX - start.x);
        pointY = (touch.clientY - start.y);
        setTransform();
    }

    // Zoom-in and Zoom-out buttons
    document.getElementById("zoom-in").addEventListener("click", function () {
        scale *= 1.2;
        pointX = (pointX - zoom.clientWidth / 2) * 1.2 + zoom.clientWidth / 2;
        pointY = (pointY - zoom.clientHeight / 2) * 1.2 + zoom.clientHeight / 2;
        setTransform();
    });

    document.getElementById("zoom-out").addEventListener("click", function () {
        scale /= 1.2;
        pointX = (pointX - zoom.clientWidth / 2) / 1.2 + zoom.clientWidth / 2;
        pointY = (pointY - zoom.clientHeight / 2) / 1.2 + zoom.clientHeight / 2;
        setTransform();
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

                const leftPosition = circleRect.left - zoomRect.left + (circleRect.width / 2) - (modalRect.width / 2);
                const topPosition = circleRect.top - zoomRect.top + circleRect.height;

                modal.style.left = `${leftPosition}px`;
                modal.style.top = `${topPosition}px`;
                modal.style.display = 'block';
            }
        }
    }

    // Add click and touch events to circles
    const circles = document.querySelectorAll('.circlesch');
    circles.forEach(circle => {
        circle.addEventListener('click', handleCircleClick);
        circle.addEventListener('touchstart', handleCircleClick);
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

                modal.style.left = `${circleRect.left - zoomRect.left}px`;
                modal.style.top = `${circleRect.top - zoomRect.top + circleRect.height}px`;
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















});