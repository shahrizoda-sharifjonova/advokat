import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".competencies__swiper", {
    grabCursor: true,
    modules: [Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    watchSlidesProgress: true,
    pagination:{
        el: '.competencies__pagination',
    },
    breakpoints:{
        1200:{
            slidesPerView: 3,
            spaceBetween: 30,
        },
        576:{
            slidesPerView: 3,
            spaceBetween: 15,
        }
    }
}); 

const menu = document.querySelector('.menu');
const list = document.querySelector('.header__bottom.enable-sm');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    list.classList.toggle('active')
    body.classList.toggle('active')
})