window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50; // Triggers animation when element is 50px into view

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            // Optional: remove class to re-animate on scroll up
            // reveals[i].classList.remove('active');
        }
    }
}

// Initial check in case elements are already in view on page load
reveal();