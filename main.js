var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        120: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', () => {
    let resHeader = document.querySelector('.res-header');
    resHeader.classList.toggle('active');

    if (resHeader.classList.contains('active')) {
        menuBtn.setAttribute('name', 'close');
    }
    else {
        menuBtn.setAttribute('name', 'menu');
    }
})