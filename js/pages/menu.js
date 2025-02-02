
/*
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 3;
function loadShow(){
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = `none`;
    items[active].style.opacity = 1;

    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)'
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active -1; i >= 0; i--){
        stt++;
        items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2 * stt}) perspective(18px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)'
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();
next.onclick = function(){
    active = active + 1 < items.length ? active +1 : active;
    loadShow();
}

prev.onclick = function(){
    active = active -1 >= 0 ? active -1: active; 
    loadShow();
}
*/

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0; // Start with the first slide
const total = items.length; // Total number of slides
const spacing = 120; // Increase this value for more spacing

function loadShow() {
    // Reset styles for all slides
    items.forEach((item) => {
        item.style.transform = '';
        item.style.zIndex = '';
        item.style.filter = '';
        item.style.opacity = '';
    });

    // Set up the slides in circular positions relative to the active slide
    for (let i = 0; i < total; i++) {
        const offset = (i - active + total) % total; // Relative position of slide
        let stt = Math.min(offset, total - offset); // Distance to active slide (looping)

        if (offset === 0) {
            // Center (active) slide
            items[i].style.transform = `none`;
            items[i].style.zIndex = 1;
            items[i].style.filter = `none`;
            items[i].style.opacity = 1;
        } else {
            // Slides in the background
            let direction = offset < total / 2 ? 1 : -1; // Left (-) or right (+)
            items[i].style.transform = `translateX(${spacing * stt * direction}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(${-direction}deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
}

function smoothTransition(direction) {
    // Update the active slide index based on direction
    if (direction === 'next') {
        active = (active + 1) % total; // Loop forward
    } else if (direction === 'prev') {
        active = (active - 1 + total) % total; // Loop backward
    }

    // Redraw the slider
    loadShow();
}

// Attach event listeners for navigation
next.onclick = function () {
    smoothTransition('next');
};

prev.onclick = function () {
    smoothTransition('prev');
};

// Initial load
loadShow();
