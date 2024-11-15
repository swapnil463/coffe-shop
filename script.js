let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});
 // Optional: Adding a hover effect using JavaScript for better cross-browser support
 const button = document.querySelector('button');
 button.addEventListener('mouseover', () => {
     button.style.backgroundColor = '#45a049'; // Darker green when hovered
     button.style.transform = 'scale(1.05)'; // Slightly increase size on hover
 });
 button.addEventListener('mouseout', () => {
     button.style.backgroundColor = '#4CAF50'; // Original green color
     button.style.transform = 'scale(1)'; // Return to original size
 });