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

// const main_swiper = new Swiper ('.headerSwiper',{
//     autoplay:{
//         delay: 2000,
//         disableOnInteraction: false,

//     },


//     breakpoints:{
//         320: {
//             slidesPerView: 1,

//         },

//         768:{
//             slidesPerView: 2,
//         },

//         1230:{
//             enabled: false,
//             slidesPerView: 3,
//             spaceBetween: 20,
//         }
//     }
// })

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
    thankYouModal = document.querySelector('.gratitude__content'),
    applicationForm=  document.querySelectorAll('.inner-form');

    
    

modalBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');
        
        modalViews.forEach((modalWindows) =>{
            modalWindows.classList.add('active-modal');
        })
        document.querySelector(`[data-target='${path}']`).classList.add('active-window');

    })
})



modalOverlay.forEach((overlay) =>{
    overlay.addEventListener('click', (e) => {
        if (e.target == overlay) {
            modalViews.forEach((modalWindows) =>{
                modalWindows.classList.remove('active-modal');
                thankYouModal.classList.remove('gratitude__modal-active');
            })
            windows.forEach((window)=>{
                window.classList.remove('active-window')
            })

            applicationForm.forEach((windowApplication)=>{
                windowApplication.style.display = 'block';
            })
        }
    })

    // ;


    window.onload = () =>{
        const bitrixButtons = document.querySelectorAll('.b24-form-btn');
        const heightClass = document.querySelectorAll('.b24-from-state-on');
        const gratitudeCloseButton = document.querySelector('#gratitude__close-btn');
        console.log(bitrixButtons);
        console.log(modalViews);
    
        
        const succesWindow = document.querySelectorAll('.b24-form-state-container');
        succesWindow.forEach((succesWindows)=>{
            succesWindows.remove();
        })
    
        applicationForm.forEach((windowApplication) =>{
            
            bitrixButtons.forEach((sendButton) =>{
                sendButton.addEventListener('click', () =>{
                    modalViews.forEach((modalWindows)=>{
                        modalWindows.classList.add('active-modal');
                    })
                    windowApplication.style.display = 'none';
                    thankYouModal.classList.add('gratitude__modal-active');
    
                    gratitudeCloseButton.addEventListener('click', () =>{
                        thankYouModal.classList.remove('gratitude__modal-active');
                        modalViews.forEach((modalWindows)=>{
                            modalWindows.classList.remove('active-modal');
                        })

                        windowApplication.style.display = 'block';

                    })
                })
            })
        }) 

        
    }





})



modalCloses.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
        modalViews.forEach((modalWindows) =>{
            modalWindows.classList.remove('active-modal');
        })
        windows.forEach((window)=>{
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


// Card product slider

// const swiperImages = new Swiper(".imagesSwiper", {
//     slidesPerView: 1,
//     spaceBetween: 50,
// });

// const mainImg = document.querySelector('#main-image-product');
// const imagesSwiper = document.querySelector('.img-slider-window');

// mainImg.addEventListener('click', ()=>{
//     modalViews.classList.add('active-modal');
//     imagesSwiper.classList.add('active-window');
// })



//Thank you Modal





