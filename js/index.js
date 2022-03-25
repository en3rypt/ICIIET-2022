navbar = document.querySelector(".navbar");
stickyElem = document.querySelector(".sticky-div");


currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
window.onscroll = function() {
           
    if(window.pageYOffset > currStickyPos) {
        navbar.style.position = "fixed";
        navbar.style.top = "0px";
        navbar.style.width = "100%";
        // stickyElem.style.backgroundColor = '#314AA4';
        navbar.classList.add('glass');

    } else {
        navbar.style.position = "relative";
        navbar.style.top = "initial";
        navbar.classList.remove('glass');
        // stickyElem.style.backgroundColor = 'transparent';
    }
}

