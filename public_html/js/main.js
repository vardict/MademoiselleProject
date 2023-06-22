
$(document).ready(function () {

    function animation() {
        let windowHeight = $(window).height();
        let scroll = $(window).scrollTop();

        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay'); //ovo je ako imamo kasnjenje animacije

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }

        });
    }

    $(window).scroll(function () {
        animation();
    });

    //poziv funkcije
    animation();



    //OwlCarousel 
    if ($('.team-members-slider').length > 0) {
        $('.team-members-slider').owlCarousel({

            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 30
                }
            }
        });
    }
    
        //Form validation
    
    if ($('.contact-form').length > 0) {
        $('.contact-form').validate({

            //sa ovim mozemo da hajlajtujemo neku gresku koju korisnik napravu. U obliku funkcije je gde pisemo sta trereba dase desi prilikom greske. Funkciija prima element koji se validira
            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },

            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },

            //ovo je objekat gde za svako polje definisemo sta treba da se desi
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true
                },
                subject:{
                    required: true 
                }
            },
            messages: {
                name: {
                    required: 'The Name and surname * field is required'
                },
                email: {
                    required: 'The Email address * field is required',
                    email: 'Pleas provide a valid email address'
                },
                message: {
                    required: 'The Message * field is required'
                },
                subject: {
                    required: 'The Subject * field is required'
                }
            },

            //element u kome zelimo da pisemo nase greske
            errorElement: 'p',
            //ova funkcija prima dva paramenta a to su error i element
            errorPlacement: function (error, element) {
                error.appendTo(element.closest('.form-group').find('.error-msg'));
            }

        });
    }
});

