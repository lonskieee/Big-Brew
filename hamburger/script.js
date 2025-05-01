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
