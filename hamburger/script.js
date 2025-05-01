const $navLinks = $(".nav-menu .nav-link");
const $menuOpenButton = $("#menu-open-button");
const $menuCloseButton = $("#menu-close-button");

<<<<<<< HEAD
=======
// Sir we admit nga this part ket nag base kamla kadejay internet para mapagbalin mila tay hamburger icon sir HUHU because our knowledge ket bassit pela sir HUHU

const $navLinks = $(".nav-menu .nav-link");
const $menuOpenButton = $("#menu-open-button");
const $menuCloseButton = $("#menu-close-button");

>>>>>>> 6faf49549e75f08371f07c502ba813f54fe56f20
$menuOpenButton.on("click", function () {
    $("body").toggleClass("show-mobile-menu");
});

$menuCloseButton.on("click", function () {
    $menuOpenButton.click();
});

$navLinks.on("click", function () {
    $menuOpenButton.click();
});
