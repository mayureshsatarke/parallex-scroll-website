window.addEventListener('scroll', function() {
    let parallaxElements = document.querySelectorAll('.parallax');

    parallaxElements.forEach(function(element) {
        let scrollPosition = window.pageYOffset;
        let depth = element.dataset.depth || 0.5;
        element.style.backgroundPositionY = (scrollPosition * depth) + 'px';
    });
});
