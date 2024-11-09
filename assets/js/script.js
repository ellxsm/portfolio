document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("nav__toggle");
    const navList = document.getElementById("nav__list");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
    });
});