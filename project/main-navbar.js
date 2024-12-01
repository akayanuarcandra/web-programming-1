window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if (scroll > 100) {
        document.querySelector(".navigation").classList.add("shadow");
    } else {
        document.querySelector(".navigation").classList.remove("shadow");
    }
});