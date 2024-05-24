

$(document).ready(function(){

    $('.menu-btn').click(function(){

        $('.navbar .menu').toggleClass("active");

        $('.menu-btn i').toggleClass("active");

    });



    // typing text animation script

    var typed = new Typed(".typing", {

        strings: ["Full Stack Java Developer"],

        typeSpeed: 100,

        backSpeed: 60,

        loop: true

    });

    var typed = new Typed(".typing-2", {

        strings: ["Frontend Developer", "Designer" ],

        typeSpeed: 100,

        backSpeed: 60,

        loop: true

    });

});