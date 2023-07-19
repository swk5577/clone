//탑버튼
window.addEventListener('load',function(){
    const elfoot = document.querySelector('.footer'),
            eltop = document.querySelector('.top');
    const topbt = new IntersectionObserver(topen =>{

        topen.forEach(topin => {
            if(topin.isIntersecting){
                eltop.classList.add('ab')
            }else{
                eltop.classList.remove('ab')
            }

        })
    })

    topbt.observe(elfoot)

})
