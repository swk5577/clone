window.onload = function () {

    //샵 이미지

    let elfullshop, elshop;
    let shop;

    elfullshop = document.querySelector('.fullshop');
    elshop = document.querySelector('.shop');

    shop = elshop.getBoundingClientRect();



    // 슬라이드
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


    const shopa = new IntersectionObserver(shopin =>{
        shopin.forEach(v=>{
            if(v.isIntersecting){
                console.log('in');
                elfullshop.classList.add('in')
            }
        })
    })

    shopa.observe(elshop)

    
/*     //샵 버튼
    const elshopbut = document.querySelectorAll('.fullshop button'),
        shopimg = document.querySelectorAll('.shop a'),
        shopspan = document.querySelector('span');



    let i = 0 , shopleng = shopimg.length;

let maxsiz = shopimg[0].getBoundingClientRect().width*shopleng,
    scrin = screen.width 

    let maxy = document.querySelector('.swiper-pagination-total').innerText
    console.log(maxy); 


    elshopbut.forEach(function (v, k) {
                shopspan.innerHTML = `<${maxy}/${i*-1}>`
                if(i == 0){
                    elshopbut[0].style.color = `gray`
                }; 

        v.onclick = function () {

            if (k == 1) {
                if (i > -maxy) { i--; }
            } else {
                if (i < 0) { i++; }
            };
            elshop.style = `transform:translateX(${i * 95}%);`;

            shopspan.innerHTML = `<${maxy}/${i*-1}>`

                            if(i == 0){
                                elshopbut[0].style.color = `gray`
                            }else{
                                elshopbut[0].style.color = `black`
                            };
                            if(i*-1 == maxy){
                                elshopbut[1].style.color = `gray`
                            }else{
                                elshopbut[1].style.color = `black`
                            } 
        }

    }) */

};