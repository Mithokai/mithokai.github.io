/* Navbar */
// Get navbar info
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementsByClassName('navbar')[0];
    if (navbar) {
        const navbarHeight = navbar.offsetHeight;
        console.log('Navbar Height: ', navbarHeight);
    }
})

// Hide collapsed navbar menu on mobile view when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    var menuToggle = document.getElementById('navbarSupportedContent');
    var bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach(function(link) {
        link.addEventListener('click', () => bsCollapse.hide())
    });
});

/* Script for navbar menu buttons */
// Scrolling to individual sections using anchor tags
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        // Calculate the scroll position, accounting for the fixed navbar
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

/* Script for back to top button */
// Get back to top button
let mybutton = document.getElementById('backToTop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.classList.add('show');
    } else {
        mybutton.classList.remove('show');
    }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {scrollToTop(300);}

function scrollToTop(duration) {
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));

        window.scrollTo(0, Math.ceil((1 - time) * start));

        if (time < 1) {
            requestAnimationFrame(scroll);
        }
    }

    requestAnimationFrame(scroll);

}
