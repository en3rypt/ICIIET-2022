stickyElem = document.querySelector(".sticky-div");
currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
window.onscroll = function() {
           
    if(window.pageYOffset > currStickyPos) {
        stickyElem.style.position = "fixed";
        stickyElem.style.top = "0px";
        stickyElem.style.width = "100%";
    } else {
        stickyElem.style.position = "relative";
        stickyElem.style.top = "initial";
    }
}

// var myNav = document.getElementById('mynav');
// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 200 ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }
// };