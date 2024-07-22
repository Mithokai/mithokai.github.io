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
