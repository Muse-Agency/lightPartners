import '../scss/app.scss';
import './ui/header';
import scrollTable from './ui/scrollTable';
import './ui/fslightbox';









const images = document.querySelectorAll('.card_product__image-link');

const lightbox = new FsLightbox();


images.forEach((image) => {
    image.addEventListener('click', () => {
        lightbox.props.sources = ['../images/catalog__pages/card__product/1.png', '../images/catalog__pages/card__product/2.png', '../images/catalog__pages/card__product/3.png', '../images/catalog__pages/card__product/4.png', '../images/catalog__pages/card__product/4.png', '../images/catalog__pages/card__product/2.png', '../images/catalog__pages/card__product/1.png'];
        lightbox.open()
    })
})


// scrollTable();

/*==================== ACCORDION ADDITIONALS ====================*/
const accordionHeaders = document.querySelectorAll('.accordion__header');

function toggleAccordions() {
    this.parentNode.classList.toggle('accordion__open');
}

accordionHeaders.forEach(el => {
    el.addEventListener('click', toggleAccordions);
});

const headerSlider = document.querySelector(".header__slider")
if (headerSlider) {
    let swiperHeader = new Swiper(headerSlider, {
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

// Swiper main-header

const main_swiper = new Swiper ('.headerSwiper',{
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,

    },


    breakpoints:{
        320: {
            slidesPerView: 1,
        },

        768:{
            slidesPerView: 2,
            autoplay: false,
        },


        1230:{
            enabled: false,
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
})

/*== HOVER IMAGE SLIDER ==*/
const imgSections = document.querySelectorAll('.product_card__images-section');
function hoverSection() {
    this.parentNode.style.backgroundImage = 'url(' + this.dataset.src + ')';
    let sections = this.parentNode.querySelectorAll('.product_card__images-section');
    sections.forEach(function (section) {
        if (section.classList.contains('product_card__images-section--active')) {
            section.classList.remove('product_card__images-section--active');
        }
    });
    this.classList.add('product_card__images-section--active');
}
imgSections.forEach(el => {
    el.addEventListener('mouseover', hoverSection);
});

// /*== CHANGE MAIN IMAGE PRODUCT ==*/
// const imgProductLinks = document.querySelectorAll('.card_product__image-link');
// const mainImage = document.getElementById('main-image-product');
// function setMainImage() {
//     mainImage.style.backgroundImage = 'url(' + this.dataset.img + ')';
// }
// imgProductLinks.forEach(el => {
//     el.addEventListener('click', setMainImage);
// });


/*==================== MODALS ====================*/
const modalViews = document.querySelectorAll('.js-modal'),
    modalBtns = document.querySelectorAll('.js-modal-btn'),
    modalCloses = document.querySelectorAll('.js-modal-close'),
    modalOverlay = document.querySelectorAll('.overlay'),
    windows = document.querySelectorAll('.window'),
    applicationForm =  document.querySelectorAll('.inner-form');

modalBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modalViews.forEach((modalWindows) => {
            modalWindows.classList.add('active-modal');
        })
        document.querySelector(`[data-target='${path}']`).classList.add('active-window');

    })
})



modalOverlay.forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
        if (e.target == overlay) {
            modalViews.forEach((modalWindows) => {
                modalWindows.classList.remove('active-modal');
                // thankYouModal.classList.remove('gratitude__modal-active');
            })
            windows.forEach((window) => {
                window.classList.remove('active-window')
            })

            applicationForm.forEach((windowApplication) => {
                windowApplication.style.display = 'block';
            })
        }
    })

    window.onload = () =>{
        const bitrixButtons = document.querySelectorAll('.b24-form-btn');
        const heightClass = document.querySelectorAll('.b24-from-state-on');
        const gratitudeCloseButton = document.querySelector('#gratitude__close-btn');
        const succesField = document.querySelectorAll('.b24-form-success');
        


const a = "<div class='gratitude__content'> <button class='btn__close' id='gratitude__close-btn'> <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'> <line class='btn__close-icon' x1='0.353553' y1='0.646447' x2='15.3536' y2='15.6464' stroke='#4D4D4D'/> <line class='btn__close-icon' x1='0.646447' y1='15.6464' x2='15.6464' y2='0.646447' stroke='#4D4D4D'/></svg></button> <div class='container-modal'><div class='wrapper'><h2 class='gratitude__title'>Спасибо!</h2><p class='gratitude__text'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint.</p><ul class='social__links flex'><li class='social__item'><a href='#' class='social__link'><svg width='22' height='22' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'> <path class='footer__social-icon' fill-rule='evenodd' clip-rule='evenodd' d='M9.39211 0.0958823C11.0962 0.0174331 11.6395 0 15.9804 0C20.3212 0 20.8646 0.0188859 22.5672 0.0958823C24.2698 0.172879 25.4321 0.444545 26.449 0.838244C27.5139 1.24066 28.48 1.86971 29.279 2.68325C30.0925 3.48082 30.7201 4.44545 31.1211 5.51178C31.5162 6.52871 31.7864 7.69093 31.8649 9.39066C31.9433 11.0977 31.9608 11.641 31.9608 15.9804C31.9608 20.3212 31.9419 20.8646 31.8649 22.5687C31.7879 24.2684 31.5162 25.4306 31.1211 26.4475C30.7201 27.514 30.0915 28.4802 29.279 29.279C28.48 30.0925 27.5139 30.7201 26.449 31.1211C25.4321 31.5162 24.2698 31.7864 22.5701 31.8649C20.8646 31.9433 20.3212 31.9608 15.9804 31.9608C11.6395 31.9608 11.0962 31.9419 9.39211 31.8649C7.69238 31.7879 6.53017 31.5162 5.51323 31.1211C4.44679 30.7201 3.48056 30.0914 2.6818 29.279C1.8688 28.4809 1.23966 27.5152 0.838244 26.449C0.444545 25.4321 0.174331 24.2698 0.0958823 22.5701C0.0174331 20.8631 0 20.3198 0 15.9804C0 11.6395 0.0188859 11.0962 0.0958823 9.39356C0.172879 7.69092 0.444545 6.52871 0.838244 5.51178C1.24026 4.44557 1.86988 3.47982 2.68325 2.6818C3.48088 1.86898 4.44614 1.23985 5.51178 0.838244C6.52871 0.444545 7.69093 0.174331 9.39066 0.0958823H9.39211ZM22.4379 2.97235C20.7527 2.89536 20.2472 2.87938 15.9804 2.87938C11.7136 2.87938 11.2081 2.89536 9.52286 2.97235C7.96404 3.04354 7.11854 3.30358 6.55486 3.52295C5.8096 3.8135 5.27643 4.15781 4.71712 4.71712C4.18693 5.23293 3.7789 5.86085 3.52295 6.55486C3.30358 7.11854 3.04354 7.96404 2.97235 9.52286C2.89536 11.2081 2.87938 11.7136 2.87938 15.9804C2.87938 20.2472 2.89536 20.7527 2.97235 22.4379C3.04354 23.9967 3.30358 24.8422 3.52295 25.4059C3.77864 26.0989 4.18686 26.7279 4.71712 27.2437C5.23285 27.7739 5.8619 28.1821 6.55486 28.4378C7.11854 28.6572 7.96404 28.9172 9.52286 28.9884C11.2081 29.0654 11.7122 29.0814 15.9804 29.0814C20.2486 29.0814 20.7527 29.0654 22.4379 28.9884C23.9967 28.9172 24.8422 28.6572 25.4059 28.4378C26.1512 28.1473 26.6843 27.803 27.2437 27.2437C27.7739 26.7279 28.1821 26.0989 28.4378 25.4059C28.6572 24.8422 28.9172 23.9967 28.9884 22.4379C29.0654 20.7527 29.0814 20.2472 29.0814 15.9804C29.0814 11.7136 29.0654 11.2081 28.9884 9.52286C28.9172 7.96404 28.6572 7.11854 28.4378 6.55486C28.1473 5.8096 27.803 5.27643 27.2437 4.71712C26.7278 4.18696 26.0999 3.77894 25.4059 3.52295C24.8422 3.30358 23.9967 3.04354 22.4379 2.97235ZM13.9393 20.9067C15.0792 21.3812 16.3485 21.4453 17.5304 21.0879C18.7123 20.7305 19.7334 19.9739 20.4195 18.9473C21.1055 17.9207 21.4138 16.6877 21.2918 15.459C21.1697 14.2303 20.6249 13.0821 19.7503 12.2105C19.1928 11.6533 18.5187 11.2267 17.7765 10.9613C17.0343 10.6959 16.2425 10.5984 15.4581 10.6758C14.6737 10.7532 13.9162 11.0035 13.2402 11.4087C12.5642 11.814 11.9864 12.3641 11.5484 13.0194C11.1105 13.6748 10.8234 14.4191 10.7076 15.1987C10.5919 15.9784 10.6504 16.774 10.8791 17.5283C11.1077 18.2826 11.5008 18.9769 12.0299 19.561C12.5591 20.1452 13.2112 20.6048 13.9393 20.9067ZM10.1722 10.1722C10.935 9.40951 11.8405 8.80447 12.837 8.39168C13.8336 7.97889 14.9017 7.76643 15.9804 7.76643C17.0591 7.76643 18.1272 7.97889 19.1237 8.39168C20.1203 8.80447 21.0258 9.40951 21.7885 10.1722C22.5513 10.935 23.1563 11.8405 23.5691 12.837C23.9819 13.8336 24.1943 14.9017 24.1943 15.9804C24.1943 17.0591 23.9819 18.1272 23.5691 19.1237C23.1563 20.1203 22.5513 21.0258 21.7885 21.7885C20.2481 23.3289 18.1589 24.1943 15.9804 24.1943C13.8019 24.1943 11.7127 23.3289 10.1722 21.7885C8.63183 20.2481 7.76643 18.1589 7.76643 15.9804C7.76643 13.8019 8.63183 11.7127 10.1722 10.1722ZM26.0161 8.98969C26.2051 8.8114 26.3564 8.59698 26.4611 8.35916C26.5657 8.12133 26.6216 7.86492 26.6254 7.60511C26.6292 7.3453 26.5808 7.08737 26.4831 6.84659C26.3854 6.60582 26.2404 6.38709 26.0567 6.20335C25.873 6.01962 25.6542 5.87462 25.4135 5.77694C25.1727 5.67925 24.9147 5.63087 24.6549 5.63466C24.3951 5.63845 24.1387 5.69433 23.9009 5.79899C23.6631 5.90365 23.4486 6.05496 23.2703 6.24397C22.9236 6.61156 22.7337 7.09983 22.7411 7.60511C22.7485 8.11039 22.9525 8.59291 23.3098 8.95024C23.6671 9.30757 24.1496 9.51157 24.6549 9.51893C25.1602 9.5263 25.6485 9.33645 26.0161 8.98969Z' fill='white'/> </svg></a></li><li class='social__item'><a href='#' class='social__link'><svg width='22' height='22'viewBox='0 0 33 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path class='footer__social-icon' fill-rule='evenodd' clip-rule='evenodd'd='M24.1524 19.1525C23.7556 18.9541 21.81 17.9979 21.4478 17.8648C21.0855 17.7329 20.8219 17.6677 20.5569 18.0645C20.2932 18.4587 19.5354 19.3509 19.3051 19.6146C19.0733 19.8796 18.843 19.9116 18.4474 19.7145C18.0519 19.5147 16.7762 19.0979 15.2647 17.7502C14.0888 16.7009 13.2938 15.4051 13.0634 15.0083C12.833 14.6128 13.0381 14.3984 13.2365 14.2013C13.415 14.0242 13.632 13.7392 13.8305 13.5088C14.0289 13.2771 14.0941 13.1119 14.226 12.8469C14.3591 12.5833 14.2926 12.3529 14.1927 12.1544C14.0941 11.956 13.3031 10.0078 12.9728 9.21539C12.6519 8.44434 12.3256 8.54955 12.0833 8.53623C11.8516 8.52558 11.5879 8.52291 11.3242 8.52291C11.0605 8.52291 10.6317 8.62146 10.2695 9.0183C9.90594 9.41382 8.88453 10.3713 8.88453 12.3196C8.88453 14.2665 10.3015 16.1482 10.4999 16.4132C10.6983 16.6769 13.2898 20.6746 17.2596 22.3885C18.2051 22.796 18.9415 23.0397 19.5155 23.2208C20.4636 23.5231 21.3266 23.4805 22.0084 23.378C22.7675 23.2648 24.3495 22.4205 24.6798 21.4963C25.0087 20.5721 25.0087 19.7797 24.9102 19.6146C24.8116 19.4495 24.5479 19.3509 24.1511 19.1525H24.1524ZM16.932 29.0111H16.9266C14.5688 29.0115 12.2542 28.3777 10.2256 27.176L9.74614 26.891L4.76293 28.1987L6.0933 23.3407L5.78035 22.8426C4.46215 20.7444 3.76455 18.3159 3.76815 15.8379C3.77082 8.58018 9.67556 2.67543 16.9373 2.67543C20.453 2.67543 23.7583 4.04708 26.2432 6.53469C27.4689 7.7553 28.4403 9.20683 29.1014 10.8053C29.7624 12.4038 30.1 14.1175 30.0945 15.8472C30.0918 23.105 24.1871 29.0111 16.932 29.0111ZM28.1342 4.64501C26.6669 3.16806 24.9211 1.99698 22.998 1.19965C21.0748 0.402312 19.0125 -0.00542832 16.9306 5.45697e-05C8.2027 5.45697e-05 1.09677 7.10466 1.09411 15.8366C1.09278 18.6278 1.82121 21.3525 3.20751 23.7535L0.960938 31.9608L9.35595 29.7581C11.6783 31.0234 14.2807 31.6864 16.9253 31.6864H16.932C25.6599 31.6864 32.7658 24.5818 32.7685 15.8486C32.7749 13.7675 32.3687 11.7058 31.5732 9.78274C30.7778 7.85968 29.6089 6.11343 28.1342 4.64501Z'fill='white' /></svg></a></li> <li class='social__item'><a href='#' class='social__link'><svg width='20' height='22'viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path class='footer__social-icon'd='M4.00011 11.4647C4.00011 10.0829 4.24166 8.77745 4.71765 7.55905C5.17243 6.37564 5.8481 5.28951 6.70865 4.35854C7.56746 3.43978 8.55023 2.64532 9.62855 1.99811C10.7349 1.32879 11.9327 0.823842 13.1843 0.499089C14.451 0.166465 15.7554 -0.00128123 17.065 7.36775e-06C19.088 7.36775e-06 20.9707 0.428045 22.7166 1.28057C24.4397 2.11755 25.9063 3.40201 26.9632 4.9997C28.0537 6.62483 28.5954 8.46308 28.5954 10.5127C28.5954 11.7417 28.4747 12.9442 28.2278 14.1199C27.9854 15.2951 27.6 16.4361 27.0804 17.5176C26.5851 18.5645 25.9375 19.5323 25.1587 20.3895C24.3759 21.2331 23.428 21.9066 22.3738 22.3681C21.2293 22.8697 19.9912 23.1221 18.7417 23.1087C17.8732 23.1087 17.0064 22.9045 16.1504 22.4942C15.2943 22.0857 14.6798 21.5245 14.3103 20.8051C14.1807 21.3042 14.0031 22.0253 13.7668 22.9684C13.5395 23.9097 13.3868 24.5172 13.3193 24.7925C13.2482 25.066 13.1168 25.5224 12.925 26.1547C12.7949 26.6224 12.628 27.0791 12.4259 27.5205L11.8149 28.7176C11.5507 29.2313 11.2553 29.7284 10.9304 30.206C10.6089 30.6713 10.2111 31.2272 9.73689 31.8666L9.47225 31.9608L9.29642 31.769C9.10638 29.7566 9.00869 28.5525 9.00869 28.1546C9.00869 26.9771 9.149 25.6556 9.42607 24.1886C9.69781 22.7233 10.1276 20.8815 10.7049 18.6667C11.2821 16.4537 11.6124 15.1518 11.7012 14.7664C11.2945 13.937 11.0885 12.8536 11.0885 11.5215C11.0885 10.4576 11.4206 9.46125 12.0867 8.52347C12.7545 7.58925 13.5981 7.12213 14.6211 7.12213C15.4044 7.12213 16.0118 7.38144 16.447 7.90184C16.8839 8.42046 17.097 9.07406 17.097 9.87152C17.097 10.7169 16.8164 11.9407 16.2516 13.5409C15.6868 15.143 15.4062 16.3383 15.4062 17.1322C15.4062 17.9368 15.6939 18.6099 16.2694 19.1374C16.8373 19.6652 17.5883 19.9512 18.3634 19.9349C19.0667 19.9349 19.7185 19.775 20.3242 19.4535C20.9203 19.1415 21.4364 18.6959 21.8321 18.1517C22.6939 16.9693 23.3082 15.6252 23.6384 14.1999C23.8089 13.4503 23.9403 12.7381 24.022 12.0685C24.109 11.3954 24.1463 10.7596 24.1463 10.1557C24.1463 7.94091 23.443 6.21455 22.0452 4.97839C20.6403 3.74223 18.8109 3.1277 16.5606 3.1277C14.0013 3.1277 11.8611 3.95536 10.1472 5.61601C8.43146 7.27133 7.56828 9.37599 7.56828 11.9282C7.56828 12.4913 7.65353 13.0347 7.81516 13.5605C7.97323 14.0844 8.14551 14.5018 8.332 14.8108C8.51671 15.1145 8.69077 15.4112 8.84884 15.6847C9.00869 15.9582 9.09217 16.1536 9.09217 16.2708C9.09217 16.6296 8.99803 17.0967 8.80799 17.6739C8.61085 18.2511 8.37818 18.5388 8.09756 18.5388C8.07091 18.5388 7.9608 18.5193 7.76898 18.4785C7.10466 18.2801 6.50471 17.9094 6.03018 17.4039C5.52655 16.8801 5.12909 16.2637 4.85974 15.5888C4.59116 14.9162 4.38196 14.2215 4.23456 13.5125C4.0753 12.8416 3.99659 12.1542 4.00011 11.4647Z'fill='white' /></svg></a></li><li class='social__item'><a href='#' class='social__link'><svg width='11' height='22' viewBox='0 0 16 32' fill='none' xmlns='http://www.w3.org/2000/svg'><path class='footer__social-icon' d='M3.83946 31.9608V16.9639H0V11.5642H3.83946V6.95227C3.83946 3.32814 6.10744 0 11.3334 0C13.4492 0 15.0138 0.209503 15.0138 0.209503L14.8906 5.25183C14.8906 5.25183 13.2949 5.23578 11.5537 5.23578C9.66914 5.23578 9.36721 6.13276 9.36721 7.62153V11.5642H15.0404L14.7935 16.9639H9.36721V31.9608H3.83946Z'fill='white' /></svg></a></li><li class='social__item'><a href='#' class='social__link'><svg width='19' height='21' viewBox='0 0 27 30' fill='none'xmlns='http://www.w3.org/2000/svg'><path class='footer__social-icon'd='M16.7546 30H26.8198V12.9593L6.67276 7.18293V0H0V30H10.0652V20.5547H16.7546V30Z' fill='white' /></svg></a></li>  <li class='social__item'><a href='#' class='social__link'><svg width='18' height='22' viewBox='0 0 28 32' fill='none' xmlns='http://www.w3.org/2000/svg'> <path class='footer__social-icon'd='M25.5959 4.14699L1.98485 13.2518C0.373493 13.899 0.382815 14.7979 1.68921 15.1988L7.75111 17.0898L21.7766 8.24063C22.4397 7.83712 23.0457 8.05419 22.5476 8.49631L11.1842 18.7517H11.1816L11.1842 18.7531L10.7661 25.0014C11.3787 25.0014 11.649 24.7204 11.9926 24.3888L14.937 21.5257L21.0614 26.0494C22.1907 26.6713 23.0017 26.3517 23.2827 25.0041L27.3031 6.05664C27.7146 4.40667 26.6732 3.65958 25.5959 4.14699Z'fill='white' /></svg></a></li> </ul></div></div></div>" 




succesField.forEach((el)=>{
    el.innerHTML = `${a}`;
    
});
const thankYouModal = document.querySelector('.gratitude__content');
const innerOne = document.querySelectorAll('.b24-form-padding-side');
const loader = document.querySelectorAll('.b24-form-loader');
const succesWindow = document.querySelectorAll('.b24-form-state-container');
console.log(thankYouModal);
loader.forEach((loader)=>{
    loader.classList.add('display__none');
})


        bitrixButtons.forEach((btn)=>{
            btn.addEventListener('click',()=>{
                thankYouModal.style.position = 'fixed'
                innerOne.forEach((section) =>{
                    section.style.display = 'none';

                })
                

            })
        })
        
        
        const empty = document.querySelectorAll('.b24-form-control-not-empty');

        const formBitrix = document.querySelectorAll('form[method="post"]');

        const succesInnerOne = document.querySelectorAll('.b24-form-state-inner');
        const succesInnerTwo = document.querySelectorAll('.b24-form-inner-box');
    
        // applicationForm.forEach((windowApplication) =>{
        //             bitrixButtons.forEach((btnSubmit)=>{
        //                 formBitrix.forEach((form)=>{
        //                     btnSubmit.addEventListener('click', ()=>{
        //                         modalViews.forEach((modalWindows)=>{
        //                             modalWindows.classList.add('active-modal');
        //                         })
        //                         windowApplication.style.display = 'none';
        //                         thankYouModal.classList.add('gratitude__modal-active');
                
        //                         gratitudeCloseButton.addEventListener('click', () =>{
        //                             thankYouModal.classList.remove('gratitude__modal-active');
        //                             modalViews.forEach((modalWindows)=>{
        //                                 modalWindows.classList.remove('active-modal');
        //                             })
        //                             windowApplication.style.display = 'block';
        //                         })
        //             })
        //         })
                        
        //     })
        // })
    }
})



modalCloses.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        modalViews.forEach((modalWindows) => {
            modalWindows.classList.remove('active-modal');
        })
        windows.forEach((window) => {
            window.classList.remove('active-window')
        })
    })
})


// let modal = function (modalClick) {
//     const modalTarget = document.getElementById(modalClick);
//     if (modalTarget) {
//         modalTarget.classList.add('active-modal');
//     }
// }

// modalBtns.forEach((modalBtn, i) => {
//     modalBtn.addEventListener('click', () => {
//         modal(modalBtn.dataset.target);
//     });
// });

// modalCloses.forEach((modalClose, i) => {
//     modalClose.addEventListener('click', () => {
//         modalViews.forEach(modalView => {
//             modalView.classList.remove('active-modal');
//         });
//     });
// });

/*======== MATCHING PRODUCTS ========*/
//Sticky matching header
const matchingContent = document.getElementById('matching-content');
const matchingHeaders = document.querySelectorAll('.matching__header');
const matchingContentProducts = document.getElementById('matching-products');
const matchingHeaderSticky = document.getElementById('matching-header-sticky');
const matchingHeaderStickyContainer = document.getElementById('matching-header-sticky-container');

if (matchingContent) {
    let swiperMatching = new Swiper(".matching__products", {
        loop: false,
        grabCursor: true,
        spaceBetween: 15,
        // slidesPerView: 4,
        navigation: {
            nextEl: '.matching-btn-next',
            prevEl: '.matching-btn-prev',
        },
        breakpoints: {
            // 568: {
            //     slidesPerView: 4
            // }
            320: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            480: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 15,
            },
        }
    });


    let heightMatchingHeader = 0;
    if (matchingHeaders.length) {
        heightMatchingHeader = matchingHeaders[0].clientHeight;
    }

    const sticky = matchingContent.offsetTop + heightMatchingHeader;

    const leftBorderContent = matchingContentProducts.offsetLeft;
    const rightBorderContent = matchingContentProducts.offsetLeft + matchingContentProducts.clientWidth;

    const stickyMatching = () => {
        if (window.pageYOffset >= sticky) {
            matchingHeaderSticky.classList.add('show-matching-sticky');
            matchingHeaderStickyContainer.innerHTML = '';
            matchingHeaders.forEach((header, index) => {
                // header.cloneNode(true).appendTo(matchingHeaderStickyContainer);
                if (index < 5) {
                    matchingHeaderStickyContainer.appendChild(header.cloneNode(true));
                } else if (window.pageYOffset + window.innerHeight === document.body.scrollHeight) {
                    matchingHeaderSticky.classList.remove('show-matching-sticky');
                    matchingHeaders.forEach(header => {
                        matchingHeaderStickyContainer.innerHTML = '';
                    });
                }

            });
        } else {
            matchingHeaderSticky.classList.remove('show-matching-sticky');
            matchingHeaders.forEach(header => {
                matchingHeaderStickyContainer.innerHTML = '';
            });
        }
        console.log(window.pageYOffset + window.innerHeight === document.body.scrollHeight)
    }

    window.onscroll = function () { stickyMatching() };
}


// Projects All Tabs

const allProjectsFilterButtons = document.querySelectorAll('.projects__filter-btn');
const allProjectsFilterItems = document.querySelectorAll('.projects__filter-item');


allProjectsFilterButtons.forEach((filterButtons) => {
    filterButtons.addEventListener('click', (e) => {
        let filterData = e.target.dataset['filter'];

        allProjectsFilterItems.forEach((filterItem) => {
            filterItem.classList.remove('hide__tabs-item');
            if (!filterItem.classList.contains(filterData)) {
                filterItem.classList.add('hide__tabs-item');
            }


        })
    })
})