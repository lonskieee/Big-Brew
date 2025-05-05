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

    $(".menu-img").hide(); // Hides all images by default

    // 🔁 Set initial button text based on image visibility
    $(".toggle-btn").each(function () {
        const img = $(this).siblings(".menu-img");
        if (img.is(":visible")) {
            $(this).text("〤");
        } else {
            $(this).text("☕︎");
        }
    });

    // 🔁 Toggle image and button text on click
    $(".toggle-btn").click(function () {
        const img = $(this).siblings(".menu-img");
        img.slideToggle(400, () => {
            // callback to make sure the text updates after animation
            if (img.is(":visible")) {
                $(this).text("〤");
            } else {
                $(this).text("☕︎");
            }
        });
    });
});
