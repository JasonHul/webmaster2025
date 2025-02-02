// Add this to your global.js or within a <script> tag
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = document.documentElement.scrollHeight;

    // Parallax Effect (starts after hero section)
    function updateLayer(layer, index) {
        let scrollSpeed = 2;  // Speed factor for scrolling
        let fadeStart = index * windowHeight * scrollSpeed;
        let fadeEnd = (index + 1) * windowHeight * scrollSpeed;

        // Calculate opacity
        if (scrollY >= fadeStart && scrollY <= fadeEnd) {
            let progress = (scrollY - fadeStart) / (windowHeight * scrollSpeed);

            // Fade in for the first 25%, stay fully visible for 50%, fade out for the last 25%
            if (progress <= 0.25) {
                layer.style.opacity = progress * 4; // Fade in
            } else if (progress <= 0.75) {
                layer.style.opacity = 1; // Fully visible
            } else {
                layer.style.opacity = 1 - (progress - 0.75) * 4; // Fade out
            }
        } else {
            layer.style.opacity = 0;
        }
    }

    // Update each layer
    updateLayer(document.getElementById('layer1'), 0);
    updateLayer(document.getElementById('layer2'), 1);
    updateLayer(document.getElementById('layer3'), 2);

    // Footer Visibility (appears at the bottom of the page)
    let footer = document.querySelector('.footer');
    if (scrollY + windowHeight >= documentHeight - 100) {
        footer.classList.add('visible');
    } else {
        footer.classList.remove('visible');
    }
});