
function InitNavbarAnimation() {
    window.addEventListener("scroll", function () {
        let navbar = document.getElementById("navbar");
        let header_container = document.querySelector(".header .container");
        
        if (window.scrollY > 70) {
            if(this.window.innerWidth < 768) {
                navbar.classList.remove("sticky-nav");
                header_container.classList.add("container-mobile");
                navbar.classList.add("navbar-mobile");
            } else {
                navbar.classList.add("sticky-nav");
            }
        } else {
            if(this.window.innerWidth < 768) {
                header_container.classList.remove("container-mobile");
                navbar.classList.remove("navbar-mobile");
            } else {
                navbar.classList.remove("sticky-nav");
            }
        }

    });
}

function initialize() {
    InitNavbarAnimation();
}

// Exécution de la fonction initialize après le chargement complet du DOM
document.addEventListener("DOMContentLoaded", initialize);