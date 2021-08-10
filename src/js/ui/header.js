// Sticky Header
const header = document.querySelector(".js--header")
const scrollHeight = header.scrollHeight

window.addEventListener("scroll", () => {
    if (scrollHeight < pageYOffset) {
        header.classList.add("header_sticky")
    } else {
        header.classList.remove("header_sticky")
    }
})