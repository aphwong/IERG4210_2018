$((function() {


    $("#product-A1").click(function() {
        const title = $("#product-A1 div").text();
        const image= $("#product-A1 .product-thumbnail").attr('src');
        const description="Weight: 30g";
        const price = $(".product-price" ).filter(function(index){
            return index === 0;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-A2").click(function() {
        const title = $("#product-A2 div").text();
        const image= $("#product-A2 .product-thumbnail").attr('src');
        const description="Weight: 250g";
        const price = $(".product-price" ).filter(function(index){
            return index === 1;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-A3").click(function() {
        const title = $("#product-A3 div").text();
        const image= $("#product-A3 .product-thumbnail").attr('src');
        const description="Weight: 150g";

        const price = $(".product-price" ).filter(function(index){
            return index === 2;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-A4").click(function() {
        const title = $("#product-A4 div").text();
        const image= $("#product-A4 .product-thumbnail").attr('src');
        const description="Weight: 105g";
        const price = $(".product-price" ).filter(function(index){
            return index === 3;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-A5").click(function() {
        const title = $("#product-A5 div").text();
        const image= $("#product-A5 .product-thumbnail").attr('src');
        const description="Weight: 25g";
        const price = $(".product-price" ).filter(function(index){
            return index === 4;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-A6").click(function() {
        const title = $("#product-A6 div").text();
        const image= $("#product-A6 .product-thumbnail").attr('src');
        const description="Weight: 90g";
        const price = $(".product-price" ).filter(function(index){
            return index === 5;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-A7").click(function() {
        const title = $("#product-A7 div").text();
        const image= $("#product-A7 .product-thumbnail").attr('src');
        const description="Weight: 105g";
        const price = $(".product-price" ).filter(function(index){
            return index === 6;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-A8").click(function() {
        const title = $("#product-A8 div").text();
        const image= $("#product-A8 .product-thumbnail").attr('src');
        const description="Weight: 375g";
        const price = $(".product-price" ).filter(function(index){
            return index === 7;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-A9").click(function() {
        const title = $("#product-A9 div").text();
        const image= $("#product-A9 .product-thumbnail").attr('src');
        const description="Weight: 200g";
        const price = $(".product-price" ).filter(function(index){
            return index === 8;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

////////////Category: Candies
    $("#product-B1").click(function() {
        const title = $("#product-B1 div").text();
        const image= $("#product-B1 .product-thumbnail").attr('src');
        const description="Weight: 30g";
        const price = $(".product-price" ).filter(function(index){
            return index === 0;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-B2").click(function() {
        const title = $("#product-B2 div").text();
        const image= $("#product-B2 .product-thumbnail").attr('src');
        const description="Weight: 25g";
        const price = $(".product-price" ).filter(function(index){
            return index === 1;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-B3").click(function() {
        const title = $("#product-B3 div").text();
        const image= $("#product-B3 .product-thumbnail").attr('src');
        const description="Weight: 42g";
        const price = $(".product-price" ).filter(function(index){
            return index === 2;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-B4").click(function() {
        const title = $("#product-B4 div").text();
        const image= $("#product-B4 .product-thumbnail").attr('src');
        const description="Weight: 35g";
        const price = $(".product-price" ).filter(function(index){
            return index === 3;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-B5").click(function() {
        const title = $("#product-B5 div").text();
        const image= $("#product-B5 .product-thumbnail").attr('src');
        const description="Weight: 30g";
        const price = $(".product-price" ).filter(function(index){
            return index === 4;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-B6").click(function() {
        const title = $("#product-B6 div").text();
        const image= $("#product-B6 .product-thumbnail").attr('src');
        const description="Weight: 35g";
        const price = $(".product-price" ).filter(function(index){
            return index === 5;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-B7").click(function() {
        const title = $("#product-B7 div").text();
        const image= $("#product-B7 .product-thumbnail").attr('src');
        const description="Weight: 28.5g";
        const price = $(".product-price" ).filter(function(index){
            return index === 6;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-B8").click(function() {
        const title = $("#product-B8 div").text();
        const image= $("#product-B8 .product-thumbnail").attr('src');
        const description="Weight: 115g";
        const price = $(".product-price" ).filter(function(index){
            return index === 7;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $("#product-B9").click(function() {
        const title = $("#product-B9 div").text();
        const image= $("#product-B9 .product-thumbnail").attr('src');
        const description="Weight: 50g";
        const price = $(".product-price" ).filter(function(index){
            return index === 8;
        }).text();
        $('.product_list').append(productDetail(image, title, description, price));
        $('#navigation-bar', window.parent.document).append(navigaitonItem(title))
    });

    $(".product-cell-border > div:first-child > a").click(function() {
        $('.table').remove();
    });

    $(".product-cell-border > div:last-child > a").click(function(evt) {
        evt.preventDefault();
    });

    function productDetail(image, name, description, price) {
        return `<div class="product-detail"><img class="product-detail-image" src=${image} /><p class="product-detail-name">${name}</p><p class="product-detail-description">${description}</p><p class="product-detail-price">${price}</p><button class="product-detail-add-to-cart-button">Add to cart</button></div>`
    }

    function navigaitonItem(title) {
        return `<div id="navigation-product-detail">> <a href="#">${title}</a></div>`
    }
}));
