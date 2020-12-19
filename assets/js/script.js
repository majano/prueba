
const challenge = {

    unlockPost : function() {
        const unlockBtn = $('.lock_post .locked_cover button');
        
        $('.feed_container .card').each(function() {

            unlockBtn.on('click', function() {
                $(this).parents('.card').removeClass('lock_post').addClass('unlock_post');

                challenge.sliderGallery();
            });
        });
    },

    sliderGallery : function() {
        // SlickJS Slider
        $('.image').slick({     
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true
        });

        const bulletPoints = $('.slick-dots');

        if(bulletPoints.length == 1) $(this).hide();
    }
}

$(document).ready(function() {

    challenge.unlockPost(); 
});