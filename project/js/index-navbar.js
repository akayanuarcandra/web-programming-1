window.onload = function() {
    setTimeout(() => {
        document.getElementById('home').scrollIntoView({
            behavior: 'auto'
        });
    }, 100);
};

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 1300) {
        document.querySelector(".navigation").classList.add("shadow");
    } else {
        document.querySelector(".navigation").classList.remove("shadow");
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});