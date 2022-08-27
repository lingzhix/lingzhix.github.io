// navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header")
    header.classList.toggle("stick", this.window.scrollY > 0);
});