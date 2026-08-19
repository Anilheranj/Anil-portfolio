// =====================================================
// ANIL — SWISS PORTFOLIO
// =====================================================

const menuButton =
    document.getElementById("menuButton");

const closeMenu =
    document.getElementById("closeMenu");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileLinks =
    document.querySelectorAll(
        ".mobile-menu-content a"
    );


// ================= OPEN MENU =================

menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("active");

    document.body.style.overflow = "hidden";

});


// ================= CLOSE MENU =================

closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    document.body.style.overflow = "";

});


// ================= MOBILE LINKS =================

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    });

});


// ================= ESCAPE KEY =================

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        mobileMenu.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// ================= ACTIVE NAV =================

const sections =
    document.querySelectorAll("section[id]");

const desktopLinks =
    document.querySelectorAll(".desktop-nav a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    desktopLinks.forEach(link => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.style.color =
                "#e30613";

        }

    });

});


// ================= IMAGE FALLBACK =================

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.display = "none";

                image.parentElement.style.background =
                    "#deded9";

            }
        );

    });
