$(document).ready(function () {
    //navigating to mens outerwear category
    $("#men-outer, #men-outer-img, #men-outer-category .button").click(function () {
        $("#ladies-outer-category").hide();
        $(".tshirts").hide();
        $(".men-outerwear").show();
        $('#men-outer-category .button, #men-outer-category #men-outer-title').hide();
    });
    //home button functionality
    $('.home-button').click(function(){
        $("#men-outer-category").show();
        $('.men-outerwear-product').hide();
        $(".men-outerwear").hide();
        $("#ladies-outer-category").show();
        $(".tshirts").show();
        $('#men-outer-category .button, #men-outer-category #men-outer-title').show();

    });
    //navigating to product details page
    $('.product-item').click(function(){
        $('.men-outerwear-product').css("display", "flex");
        $(".men-outerwear").hide();
        $("#men-outer-category").hide();
    });
});