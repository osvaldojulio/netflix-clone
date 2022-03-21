

    $("#owl-produto").owlCarousel({
        items: 3,
        dots: false,
        nav:true,
        autoplay: true,
        margin:8,
        loop: true,
        smartSpeed: 1200,
        responsive: {
            0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
        }
    });

    $("#owl-mais").owlCarousel({
        items: 3,
        dots: true,
        autoplay: true,
        margin:8,
        loop: true,
        nav:false,
        smartSpeed: 1500,
        responsive: {
            0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
        }
    });