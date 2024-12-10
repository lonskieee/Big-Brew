
// Sir we admit nga this part ket nag base kamla kadejay internet para mapagbalin mila tay hamburger icon sir HUHU because our knowledge ket bassit pela sir HUHU

const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());