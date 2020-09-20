var E_SLIDER = {
        methods: {
            rotateSlides: function () {
                
            },
            prevSlide: function (transition) {
                var currentSlide = $('.slides-container__inner--slides').find('div:first');
                var width = currentSlide.width();
                currentSlide.animate({marginLeft: -width}, 1000, function(){
                 var lastSlide = $('.slides-container__inner--slides').find('div:last')
                 lastSlide.after(currentSlide);
                currentSlide.css({marginLeft: 0})
                })

            },

            nextSlide: function (transition) {
                var currentSlide = $('.slides-container__inner--slides').find('div:first');
                var width = currentSlide.width();
                var previousSlide = $('.slides-container__inner--slides').find('div:last')
                previousSlide.css({marginLeft: -width})
                currentSlide.before(previousSlide);
                previousSlide.animate({marginLeft: 0}, 1000, function(){
                });
            }
          },

            eslider: function (el, slidesToShow, slidesToScroll, width, transition) {
                var items =  $(el).children();
                $(el).append('<div class="slides-container"></div>')
                $('.slides-container').css('margin', '0 auto');
                $('.slides-container').css('overflow', 'hidden')
                $('.slides-container').css('max-width', width)
                $('.slides-container').css('position','relative')
                $('.slides-container').append('<div class="slides-container__inner"></div>')
                var slides__inner = $('.slides-container__inner');
                $(slides__inner).append('<div class="slides-container__inner--slides"></div>')
                $(slides__inner).css('max-width', (width - 80))
                $(slides__inner).css('position', 'relative')
                $(slides__inner).css('overflow', 'hidden')
                $(slides__inner).css('float', 'left')
         

                var numberOfSlides = $(el).children().length;
                var slides_container = $('.slides-container__inner--slides');
                slides_container.css('width', '9999px')
                slides_container.css('position', 'relative')
                slides_container.css('margin', '0')
                slides_container.css('padding', '0')
                slides_container.css('left', '-160px')


                slides_container.css('display', 'flex');
                items.each(function (index) {
                     $(slides_container).append($(this))
                })
                items.children().each(function(){
                    $(this).css('position', 'relative')
                    $(this).css('float', 'left')
                })
                $(el).append('<div class="dots-container"></div>');
                var dots_container = $('.dots-container');
                dots_container.css('display', 'flex');
                dots_container.css('justify-content', 'center');

                $(dots_container).append('<div class="dots__item">X</div>')

                for (var i = 0; i < numberOfSlides; i++) {
                    $(dots_container).append('<div class="dots__item">X</div>')
                }
                $(el).append('<div class="arrow-left">left</div>')
                $(el).append('<div class="arrow-right">right</div>')

                $('.arrow-right').on('click', function () {
                    E_SLIDER.methods.nextSlide(transition)
                })

                $('.arrow-left').on('click', function () {
                    E_SLIDER.methods.prevSlide(transition)
                })


            }
        }
 E_SLIDER.eslider($('.e-slider'), 2, 4, 1200)

      