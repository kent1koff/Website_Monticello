$(function(){
  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    vertical: true,
  });
});

$(function() {
  $('.all_cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});