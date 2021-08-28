// Sticky Header
const header = document.querySelector(".js--header")
const scrollHeight = header.scrollHeight

window.addEventListener("scroll", () => {
    if (scrollHeight < pageYOffset) {
        header.classList.add("header_sticky");
        header.classList.remove("header__transparent");
    } else if (pageYOffset === 0) {
        header.classList.remove("header_sticky");
        header.classList.add("header__transparent");
    }
})

const controlMobileMenu = () => {
    const btnOpen = document.getElementById('btn_open');
    const btnClose = document.getElementById('btn_close');
    const mobileMenu = document.getElementById('burger-menu');
    const bodyTag = document.getElementById('bodyTag')

    btnOpen.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
        bodyTag.classList.toggle('body-active');
    })
    btnClose.addEventListener('click', function(){
        mobileMenu.classList.remove('active');
        bodyTag.classList.remove('body-active');
    })
}

controlMobileMenu();