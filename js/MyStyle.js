$(function () {
    $("#accordion").accordion({
        heightStyle: "content"
    });
    $("#accordion").accordion({
        collapsible: true
    });
    $(".ui-accordion-header").css("background", "#28B463");

    $(".ui-accordion-header.ui-state-active ").css("background", "#28B463");
});
