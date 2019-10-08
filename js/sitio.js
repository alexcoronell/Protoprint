/*------------------------
INICIAMOS WOW
-------------------------*/
new WOW().init();

/*----------------------------------
Iniciamos smoothScroll (Scroll Suave)
--------------------------------*/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels

});

/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});

/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {

    var div = $('.opcionesmenu');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        div.addClass("fondo-menu");
    } else {
        div.removeClass("fondo-menu");
    }
});
/*---------------------------------
   CABECERA ANIMADA 2
 ----------------------------------*/
$(window).scroll(function () {

    var div = $('.encabezado-menudesktop');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        div.addClass("fondo-menu2");
    } else {
        div.removeClass("fondo-menu2");
    }
});
///*---------------------------------
//   CABECERA ANIMADA 3
// ----------------------------------*/
$(window).scroll(function () {

    var header = $('.encabezado');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        header.addClass("fondo-menu3");
    } else {
        header.removeClass("fondo-menu3");
    }
});


///*---------------------------------
//   CABECERA ANIMADA 4
// ----------------------------------*/
$(window).scroll(function () {

    var a = $('.letramenu');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        a.addClass("fondo-menu4");
    } else {
        a.removeClass("fondo-menu4");
    }
});

///*---------------------------------
//   CABECERA ANIMADA 5
// ----------------------------------*/
$(window).scroll(function () {

    var div = $('.menu-desktop');
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        div.addClass("fondo-menu5");
    } else {
        div.removeClass("fondo-menu5");
    }
});
/* -------------------------------------
    TOOLTIP
----------------------------------------*/
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});



