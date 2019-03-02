$(document).ready(function () {
    //navigating to mens outerwear category
    $("#men-outer, #men-outer-img, #men-outer-category .button").click(function () {
        $("#ladies-outer-category").hide();
        $('#men-outer-category').show();
        $(".tshirts").hide();
        $(".men-outerwear").show();
        $('#men-outer-category .button, #men-outer-category #men-outer-title').hide();
        $('.men-outerwear-product').hide();
    });
    //navigating to ladies outerwear category
    $("#ladies-outer, #ladies-outer-img, #ladies-outer-category .button").click(function () {
        $("#men-outer-category").hide();
        $('#ladies-outer-category').show();
        $(".tshirts").hide();
        $(".men-outerwear").show();
        $('#ladies-outer-category .button, #ladies-outer-category #ladies-outer-title').hide();
        $('.men-outerwear-product').hide();
    });
    //navigating to men tshirts category
    $("#men-tshirt, #men-tshirt-img, #men-tshirt-category .button").click(function () {
        $("#men-outer-category").hide();
        $('.tshirts').show();
        $("#ladies-outer-category").hide();
        $(".tshirts #ladies-tshirt-category").hide();
        $(".tshirts #men-tshirt-category").show();
        $(".men-outerwear").show();
        $('#men-tshirt-category .button, #men-tshirt-category #men-tshirt-title').hide();
        $('.men-outerwear-product').hide();
    });
    //navigating to ladies tshirts category
    $("#ladies-tshirt, #ladies-tshirt-img, #ladies-tshirt-category .button").click(function () {
        $("#men-outer-category").hide();
        $('.tshirts').show();
        $("#ladies-outer-category").hide();
        $(".tshirts #men-tshirt-category").hide();
        $(".tshirts #ladies-tshirt-category").show();
        $(".men-outerwear").show();
        $('#ladies-tshirt-category .button, #ladies-tshirt-category #ladies-tshirt-title').hide();
        $('.men-outerwear-product').hide();
    });
    //home button functionality
    $('.home-button').click(function () {
        $("#men-outer-category").show();
        $('.men-outerwear-product').hide();
        $(".men-outerwear").hide();
        $("#ladies-outer-category").show();
        $(".tshirts, .tshirts .tshirt-item, .tshirt-item .tshirt-title, .tshirt-item .button").show();
        $('#men-outer-category .button, #men-outer-category #men-outer-title').show();
        $('#ladies-outer-category .button, #ladies-outer-category #ladies-outer-title').show();

    });
    //navigating to product details page
    $('.product-item').click(function () {
        $('.men-outerwear-product').css("display", "flex");
        $(".men-outerwear").hide();
        $("#men-outer-category").hide();
    });
});