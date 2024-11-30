window.onload = function() {
    window.scrollTo(0, 0);
};

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 1300) {
        document.querySelector(".navigation").classList.add("shadow");
    } else {
        document.querySelector(".navigation").classList.remove("shadow");
    }
});
