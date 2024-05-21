<script>
        const swiper = new Swiper('.swiper', {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 33,
            centeredSlides: true,
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            on: {
            init: function () {
            console.log('swiper initialized');
        },
     },

    });        
        
    </script>
 