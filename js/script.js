const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

        const active = nav.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            active ? "true" : "false"
        );

    });

}


document.querySelectorAll(".main-nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (nav) {
            nav.classList.remove("active");
        }

        if (menuToggle) {
            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});


const yearElements = document.querySelectorAll("[data-year]");

yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});
