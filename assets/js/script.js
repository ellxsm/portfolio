document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("nav__toggle");
    const navList = document.getElementById("nav__list");
    const navLink = document.querySelectorAll(".nav__list__link");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
    });

    navLink.forEach(link => {
        link.addEventListener("click", () => {
            navList.classList.remove("active");
        })
    })
});