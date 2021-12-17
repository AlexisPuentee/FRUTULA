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
    var input = document.querySelector('#options-autoplay-input')

    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [{
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }]
    });
});
