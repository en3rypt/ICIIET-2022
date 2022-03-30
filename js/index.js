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




// var waitTime = 100;
// var startDelay = 1200;
// var scrollSpeed = 18;
// setTimeout('pageScroll()', startDelay);
// function pageScroll() {
//     var objDiv = document.getElementById('article-container');
//     objDiv.scrollTop = objDiv.scrollTop + 1;
//     if (objDiv.scrollTop == (objDiv.scrollHeight - 352))
//         objDiv.scrollTop = 0;

//     setTimeout('pageScroll()', scrollSpeed);
// }

// var startDelay = 1200;
// var scrollSpeed = 1000; // if u make this large as 1800 or so, autoscroll is slow, making page task less heavy and voila! everything works as intended
// setTimeout(function () {
//     setInterval(function () {
//         var autoScrollDiv = document.getElementById('article-container');
//         autoScrollDiv.scrollTop = autoScrollDiv.scrollTop + 1;
//         if (autoScrollDiv.scrollTop == (autoScrollDiv.scrollHeight - 320))
//             autoScrollDiv.scrollTop = 0;
//     }, scrollSpeed)
// }, startDelay);

// document.querySelectorAll('a').forEach(function (aTag) {
//     aTag.onclick = function (event) {
//         event.preventDefault()
//         event.stopPropagation()
//         var loc = aTag.href.substring(aTag.href.lastIndexOf('#') + 1)
//         console.log(loc)
//         if (loc) document.getElementById(loc).scrollIntoView({ behavior: 'smooth' });
//     }
// })

