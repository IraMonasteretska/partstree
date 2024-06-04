$(document).ready(function () {
    // styled select
    if ($('select').length) {
        $('.styledselect').select2({
            placeholder: "Select a state",
            minimumResultsForSearch: Infinity,
        });
    }

    // header
    $('.header__acc').click(function(){
        $('.header__accdd').toggleClass('show');
    });

    $('.itembtn .close').click(function(){
        $(this).parent().remove();
    })

    $('.showall').click(function(){
        $(this).parents('.filterbox').toggleClass('active');
        $(this).find('span').toggle();
    });

    $('.filterbox .title').click(function(){
        $(this).next('.filterwrapbox').slideToggle();
    });

    // brands
    $('.brandslist_more').click(function(){
        $(this).toggleClass('active');
        $(this).find('span').toggle();
        $(this).prev('.brandslist').toggleClass('open');
    });





});