navbar = document.querySelector(".navbar");
stickyElem = document.querySelector(".sticky-div");


currStickyPos = stickyElem.getBoundingClientRect().top + window.pageYOffset;
window.onscroll = function() {
           
    if(window.pageYOffset > currStickyPos) {
        stickyElem.style.position = "fixed";
        stickyElem.style.top = "0px";
        stickyElem.style.width = "100%";
        // stickyElem.style.backgroundColor = '#314AA4';
        stickyElem.classList.add('glass');
        // stickyElem.style.color = 'black';
    } else {
        stickyElem.style.position = "relative";
        stickyElem.style.top = "initial";
        stickyElem.classList.remove('glass');
        // stickyElem.style.backgroundColor = 'transparent';
    }
}

