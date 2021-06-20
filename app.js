const navOpenBtn = document.querySelector(".nav__toggle-btn");
const nav = document.querySelector(".nav__items")
const navCloseBtn = document.querySelector(".nav__close-btn")
navOpenBtn.addEventListener("click", () => {
    nav.classList.add("nav-show")

})

navCloseBtn.addEventListener("click", (e) => {
    nav.classList.remove("nav-show")
    nav.classList.add("nav-hidden")
    setTimeout(() => {
        nav.classList.remove("nav-hidden")
    }, 500)
})

nav.addEventListener("click", () => {
    nav.classList.remove("nav-show")
    nav.classList.add("nav-hidden")
    setTimeout(() => {
        nav.classList.remove("nav-hidden")
    }, 500)
})
