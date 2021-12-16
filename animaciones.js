"use strict";
$(document).ready(() => {
    console.log("Esto esta cargado")
    var logo = document.querySelector(".logo")
    var barra = document.querySelector("nav")

    window.onscroll = function() {
        var desplaza = window.pageYOffset;
        if (10 < desplaza) {
            logo.classList.remove("logoo")
            logo.classList.remove("abajo")
            logo.classList.remove("au_logo")
            logo.classList.add("disminucion_logo");
            barra.classList.add("sombra");

        } else {
            logo.classList.remove("disminucion_logo")
            logo.classList.add("au_logo");
            barra.classList.remove("sombra")

        }
    }
    var boton = document.querySelector(".btn_menu")

    boton.addEventListener("click", function() {
        var menu = document.querySelector(".menu_item")
        menu.classList.toggle("show")
    })

    $("#accordion").accordion();
    var animate = $("#accordion").accordion("option", "animate");

    $("#accordion").accordion("option", "animate", 200);
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        effect: "fade",
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});