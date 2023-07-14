$('body').prepend('<header></header>');
$('header').load('./header.html a,nav');

//헤더 버거버튼
const elmomenu = document.querySelector('header .menu');
const elmosub = document.querySelector('header .mo_sub');

elmomenu.onclick = function () {
    setTimeout(function () {
        elmomenu.classList.toggle('on')
    });

    if (!elmomenu.classList.contains('on')) {
        elmosub.style.display = "flex";
    } else {
        setTimeout(function () {
            elmosub.style.display = "none"
        }, 800);
    }

}

//샵 이미지

const   elfullshop = document.querySelector('.fullshop'),
        elshop = document.querySelector('.shop');
let shop;
window.onload = function(){
    shop = elshop.getBoundingClientRect();

};

window.onscroll = function(){
    console.log(window.scroll);
    if(window.scrollY > shop.y - shop.height){
        elfullshop.classList.add('in')
    }
} 

//샵 버튼
const elshopbut = document.querySelectorAll('.fullshop button'),
        shopimg = document.querySelectorAll('.shop a'), 
        shopspan = document.querySelector('span');



let i = 0 /* shopleng = shopimg.length;

let maxsiz = shopimg[0].getBoundingClientRect().width*shopleng,
    scrin = screen.width 

    maxy = Math.ceil(maxsiz/scrin)
    console.log(maxy); */


    elshopbut.forEach(function(v,k){
/*         shopspan.innerHTML = `<${maxy}/${i*-1}>` */
/*         if(i == 0){
            elshopbut[0].style.color = `gray`
        }; */

        v.onclick = function(){
            
                if(k==1){
                    if(i>-maxy){i--;}
                }else{
                    if(i<0){i++;}
                };
                elshop.style =`transform:translateX(${i*95}%);`;
                /* shopspan.innerHTML = `<${maxy}/${i*-1}>` */

/*                 if(i == 0){
                    elshopbut[0].style.color = `gray`
                }else{
                    elshopbut[0].style.color = `black`
                };
                if(i*-1 == maxy){
                    elshopbut[1].style.color = `gray`
                }else{
                    elshopbut[1].style.color = `black`
                } */
        }

    })

//샵 드레그
/* var swiper = new Swiper('.swiper', {
    slidesPerView: 3.5,
    spaceBetween: 60, //gap 같은기능
    direction: getDirection(),
    on: {
        resize: function () {
        swiper.changeDirection(getDirection());
        },
    },
    });

    function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
    } */

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 60,
        pagination: {
            el: ".swiper-pagination",
            type: 'fraction',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
