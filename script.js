$(document).ready(function() {
            function showPage(pageId) {
                $('.page-section').removeClass('active');
                $(pageId).addClass('active');
            }
            $('.nav-link').on('click', function(e) {
                e.preventDefault();
                const targetId = $(this).attr('href');
                showPage(targetId);
                if ($('#mobile-menu').is(':visible')) {
                    $('#mobile-menu').slideUp();
                }
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            });
            showPage('#home');
            $('#menu-button').on('click', function() {
                $('#mobile-menu').slideToggle();
            });
            const carousel = $('#home .carousel-item');
            let currentIndex = 0;
            function nextSlide() {
                $(carousel[currentIndex]).removeClass('active');
                currentIndex = (currentIndex + 1) % carousel.length;
                $(carousel[currentIndex]).addClass('active');
            }
            setInterval(nextSlide, 5000);
            $('#contact-form').on('submit', function(e) {
                e.preventDefault();
                const formMessage = $('#form-message');
                formMessage.text('Thank you for your message! We will get back to you soon.').removeClass('hidden text-red-600').addClass('text-green-600').fadeIn();
                setTimeout(() => {
                    $('#contact-form')[0].reset();
                    formMessage.fadeOut();
                }, 3000);
            });
        });