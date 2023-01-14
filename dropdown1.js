
$('a.button-dropdown').on("click", function() {
    $('ul.drop').stop().slideUp('800');
    $(this).next('ul.drop').stop().slideToggle('800');
});

$('html').mouseup(function (e) {
    if ($(e.target).closest(".drop, .drop-menu").length === 0) {
        $(".drop, .drop-menu").hide(400);
    }
});


$('a.button-menu').on("click", function() {
    $('ul.drop-menu').stop().slideUp('800');
    $(this).next('ul.drop-menu').stop().slideToggle('800');
});