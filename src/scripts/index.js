import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../data/data.json';

// sticky header/navbar 
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 10);
})


const btnTop = document.querySelector(".btn-top");
// show or hidden top button
window.onscroll = () => {
    let height = document.body.scrollTop || document.documentElement.scrollTop;

    if (height > 100) {
        btnTop.classList.remove('hidden');
    } else {
        btnTop.classList.add('hidden');
    }
};

// scroll back to top page
const smoothScroll = (height) => {
    let i = height || document.documentElement.scrollTop;
    if (i > -1) {
        setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(i - 10);
        }, 10);
    }
};

btnTop.addEventListener('click', () => smoothScroll());

// menu toggle for mobile device 
const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener('click', ()=>{
    const navbar = document.querySelector("nav");
    navbar.classList.toggle("collapse");
    const icon = menuToggle.querySelector("i");
    if (icon.classList.contains('fa-bars')){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    }else{
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
})

//list of restaurants
const listOfResto = data.restaurants;
const list = document.querySelector('.list');
let resto = '';
listOfResto.forEach(item => {
    resto += `<article class="card">
                <img src="${item.pictureId}" alt="Image Restaurant ${item.name}">
                <div class="card-body">
                    <a href="#"><h3 class="card-title">${item.name}</h3></a>
                    <div class="location"><i class="fas fa-map-marker-alt"></i>${item.city}</div>
                    <div class="rating"><i class="fas fa-star"></i>${item.rating}</div>
                    <p class="card-text truncate">${item.description}</p>
                </div>
            </article>`;
});
list.innerHTML = resto;