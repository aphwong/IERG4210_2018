$((function() {
    $("#navigation-home").click(function() {
        $("#navigation-arrow").hide();
        $("#navigation-A").hide();
        $("#navigation-B").hide();
        $("#navigation-product-detail").remove()
    });

    $("#page-A, #navigation-A").click(function() {
        $("#navigation-arrow").css("display", "inline-block");
        $("#navigation-A").show();
        $("#navigation-B").hide();
        $("#navigation-product-detail").remove()
    });

    $("#page-B, #navigation-B").click(function() {
        $("#navigation-arrow").css("display", "inline-block");
        $("#navigation-A").hide();
        $("#navigation-B").show();
        $("#navigation-product-detail").remove()
    });

    $(".header-right a").click(function(evt){
         evt.preventDefault();
    })

}));