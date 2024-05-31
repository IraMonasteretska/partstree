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

});