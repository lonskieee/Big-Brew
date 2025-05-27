// Maam This part ket tay hamburger icon maam for easy navigation
const $navLinks = $(".nav-menu .nav-link");
const $menuOpenButton = $("#menu-open-button");
const $menuCloseButton = $("#menu-close-button");

$menuOpenButton.on("click", function () {
    $("body").toggleClass("show-mobile-menu");
});

$menuCloseButton.on("click", function () {
    $menuOpenButton.click();
});

$navLinks.on("click", function () {
    $menuOpenButton.click();
});

// Maam This part ket jay Best Menu section jay adda icon na a coffee once we click adda ag popup nga product
$(document).ready(function () {

    $(".menu-img").hide(); 

    
    $(".toggle-btn").each(function () {
        const img = $(this).siblings(".menu-img");
        if (img.is(":visible")) {
            $(this).text("〤");
        } else {
            $(this).text("☕︎");
        }
    });

    
    $(".toggle-btn").click(function () {
        const img = $(this).siblings(".menu-img");
        img.slideToggle(400, () => {
            
            if (img.is(":visible")) {
                $(this).text("〤");
            } else {
                $(this).text("☕︎");
            }
        });
    });
});


// For Image Modal
$(document).ready(function() {
    $(".gallery-img").on("click", function() {
        var src = $(this).attr("src");
        var caption = $(this).data("caption");
        $("#modal-img").attr("src", src);
        $("#modal-caption").text(caption);
        $("#image-modal").fadeIn();
    });

    $(".modal-close, .modal").on("click", function(e) {
        // Only close if background or close button is clicked
        if ($(e.target).is(".modal-close") || $(e.target).is(".modal")) {
            $("#image-modal").fadeOut();
        }
    });
});

