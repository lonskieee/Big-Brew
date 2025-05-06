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
