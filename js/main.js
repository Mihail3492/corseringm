 
 $(function () {
	$('.top__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		fade: true,
      //ОТКЛЮЧАЕТ ДОТСЫ ПИ РАЗРЕШЕНИИ ЭКРАНА 1200px
      responsive: [
         {
            breakpoint: 1200,
            settings: {
            dots: false,
            }
         },
      ]
	});
   //СЛАЙДЕР
	$('.reviews__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
      responsive: [
         {
            breakpoint: 1141,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 846,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 585,
            settings: {
               slidesToShow: 1,
            }
         },
      ]
	});
   //КЛИК ВКЛЮЧАЕТ
   $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
   });

});