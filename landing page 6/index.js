const sliderTabs = document.querySelectorAll(".slider-tab");
const sliderIndicator = document.querySelector(".slider-indicator");
const slidercontrols = document.querySelector(".slider-controls");

const updateIndicator = (tab, index)=>{
    sliderIndicator.style.transform = `translateX(${tab.offsetLeft - 20}px)`;
    sliderIndicator.style.width = `${tab.getBoundingClientRect().width}px`;

    const scrollleft = sliderTabs[index].offsetLeft - slidercontrols.offsetWidth / 2 + 
    sliderTabs[index].offsetWidth / 2;
    slidercontrols.scrollTo({ left: scrollleft,behavior:"smooth"});
}
const swiper = new Swiper(".slider-container",{
    effect:"fade",
    speed: 1300,
  autoplay:{ delay: 4000},
    navigation: {
        prevEl:"#slide-prev",
        nextEl:"#slide-next"
    },

    on: {
        slideChange: ()=>{
            const currentTabIndex = [...sliderTabs].indexOf(sliderTabs[swiper.activeIndex])
            updateIndicator(sliderTabs[swiper.activeIndex],currentTabIndex);
        },
        reachEnd: ()=> swiper.autoplay.stop()
    }
});

sliderTabs.forEach((tab, index)=>{
    tab.addEventListener("click",()=>{
        swiper.slideTo(index);
        updateIndicator(tab, index);
    });
});
updateIndicator(sliderTabs [0], 0);
window.addEventListener("resize",()=>updateIndicator(sliderTabs[swiper.activeIndex],0));

document.querySelectorAll(".card-produtos button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Produto adicionado ao carrinho! 🛒");
    });
});
const hamburguer = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click",() =>
nav.classList.toggle("active"))
;