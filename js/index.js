$(document).ready(function(){
    $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
          {
              breakpoint: 992,
              settings: {
              slidesToShow: 4
              }
          }, 
          {
              breakpoint: 768,
              settings: {
              slidesToShow: 4
              }
          }, 
        {
            breakpoint: 520,
            settings: {
            slidesToShow: 3
            }
        },
        {
            breakpoint: 458,
            settings: {
            slidesToShow: 2
            }
        }
    ]
    });
  });
