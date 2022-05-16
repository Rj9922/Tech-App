// Jquery Method

$(document).ready(function () {

    //Techonology Owl Carosoul
    $('#tech .owl-carousel').owlCarousel({
        margin: 40,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }

        }
    });


    //Security Owl Carosoul
    $('#security .owl-carousel').owlCarousel({
        margin: 40,
        dots: false,
        loop: true,
        nav: true,
        navText: ["<span><i class='fas fa-arrow-left'></i> Previous</span>", "<span>Next <i class='fas fa-arrow-right'></i></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }

        }
    });

    //favroite Owl Carosoul
    $('#favourite .owl-carousel').owlCarousel({
        margin: 40,
        dots: false,
        loop: true,
        nav: true,
        navText: ["<span><i class='fas fa-arrow-left'></i></span>", "<span><i class='fas fa-arrow-right'></i></span>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }

        }
    });

});