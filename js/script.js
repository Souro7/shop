var categoryFlag = 0; // to track category
$(document).ready(function () {
    //navigating to mens outerwear category
    $("#men-outer, #men-outer-img, #men-outer-category .button").click(function () {
        $("#ladies-outer-category").hide();
        $('#men-outer-category').show();
        $(".tshirts").hide();
        $(".product-list-section").show();
        $('#men-outer-category .button, #men-outer-category #men-outer-title').hide();
        $('.product-details-section').hide();
        $('.category-title').text("Men's Outerwear");
        $('.product-item-name').text("Generic Men's Outerwear");
        $('.product-item-img img').attr('src', 'images/product_images/men_outerwear_.jpg');
        $('.cart').hide();
        // $(".menu").css("display", "flex");
        $(".checkout").hide();
        categoryFlag = 1;
    });

    //navigating to ladies outerwear category
    $("#ladies-outer, #ladies-outer-img, #ladies-outer-category .button").click(function () {
        $("#men-outer-category").hide();
        $('#ladies-outer-category').show();
        $(".tshirts").hide();
        $(".product-list-section").show();
        $('#ladies-outer-category .button, #ladies-outer-category #ladies-outer-title').hide();
        $('.product-details-section').hide();
        $('.category-title').text("Ladies Outerwear");
        $('.product-item-name').text("Generic Ladies Outerwear");
        $('.product-item-img img').attr('src', 'images/product_images/ladies_outerwear.jpg');
        $('.cart').hide();
        // $(".menu").css("display", "flex");
        $(".checkout").hide();
        categoryFlag = 2;

    });

    //navigating to men tshirts category
    $("#men-tshirt, #men-tshirt-img, #men-tshirt-category .button").click(function () {
        $("#men-outer-category").hide();
        $('.tshirts').show();
        $("#ladies-outer-category").hide();
        $(".tshirts #ladies-tshirt-category").hide();
        $(".tshirts #men-tshirt-category").show();
        $(".product-list-section").show();
        $('#men-tshirt-category .button, #men-tshirt-category #men-tshirt-title').hide();
        $('.product-details-section').hide();
        $('.category-title').text("Men's T-shirts");
        $('.product-item-name').text("Generic Men's T-shirt");
        $('.product-item-img img').attr('src', 'images/product_images/men_tshirt.jpg');
        $('.cart').hide();
        // $(".menu").css("display", "flex");
        $(".checkout").hide();
        categoryFlag = 3;
    });

    //navigating to ladies tshirts category
    $("#ladies-tshirt, #ladies-tshirt-img, #ladies-tshirt-category .button").click(function () {
        $("#men-outer-category").hide();
        $('.tshirts').show();
        $("#ladies-outer-category").hide();
        $(".tshirts #men-tshirt-category").hide();
        $(".tshirts #ladies-tshirt-category").show();
        $(".product-list-section").show();
        $('#ladies-tshirt-category .button, #ladies-tshirt-category #ladies-tshirt-title').hide();
        $('.product-details-section').hide();
        $('.category-title').text("Ladies T-shirts");
        $('.product-item-name').text("Generic Ladies T-shirt");
        $('.product-item-img img').attr('src', 'images/product_images/ladies_tshirt.jpg');
        $('.cart').hide();
        // $(".menu").css("display", "flex");
        $(".checkout").hide();
        categoryFlag = 4;
    });

    //home button functionality
    $('.home-button').click(function () {
        $("#men-outer-category").show();
        $('.product-details-section').hide();
        $(".product-list-section").hide();
        $("#ladies-outer-category").show();
        $(".tshirts, .tshirts .tshirt-item, .tshirt-item .tshirt-title, .tshirt-item .button").show();
        $('#men-outer-category .button, #men-outer-category #men-outer-title').show();
        $('#ladies-outer-category .button, #ladies-outer-category #ladies-outer-title').show();
        $('.cart').hide();
        $(".menu").css("display", "flex");
        $(".checkout").hide();
        categoryFlag = 0;

    });

    //navigating to product details page
    $('.product-item').click(function () {
        $('.product-details-section').css("display", "flex");
        $(".product-list-section").hide();
        $("#men-outer-category").hide();
        $("#ladies-outer-category").hide();
        $("#men-tshirt-category").hide();
        $("#ladies-tshirt-category").hide();
        $('.cart').hide();
        // $(".menu").css("display", "flex");
        $(".checkout").hide();
        switch (categoryFlag) {
            case 1: {
                $('.product-name').text("Generic Men's Outerwear");
                $('.product-image img').attr('src', 'images/product_images/men_outerwear_big.jpg');
                break;
            }
            case 2: {
                $('.product-name').text("Generic Ladies Outerwear");
                $('.product-image img').attr('src', 'images/product_images/ladies_outerwear_big.jpg');
                break;
            }
            case 3: {
                $('.product-name').text("Generic Men's T-shirt");
                $('.product-image img').attr('src', 'images/product_images/men_tshirt_big.jpg');
                break;
            }
            case 4: {
                $('.product-name').text("Generic Ladies T-shirt");
                $('.product-image img').attr('src', 'images/product_images/ladies_tshirt_big.jpg');
                break;
            }
        }
    });

    //navigating to cart page
    $('.cart-button').click(function () {
        $('.cart').show();
        $('.product-details-section').hide();
        $('.product-list-section').hide();
        $("#men-outer-category").hide();
        $("#ladies-outer-category").hide();
        $(".tshirts").hide();
        $(".menu").hide();
        $(".checkout").hide();
    });

    //navigating to checkout page
    $(".cart-checkout-box .button, .checkout-mobile-button").click(function () {
        $(".checkout").show();
        $('.cart').hide();
        $('.product-details-section').hide();
        $('.product-list-section').hide();
        $("#men-outer-category").hide();
        $("#ladies-outer-category").hide();
        $(".tshirts").hide();
        $(".menu").hide();
    });
});