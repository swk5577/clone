$('body').prepend('<header></header>');
$('header').load('./header.html header>a,nav', menu);

function menu() {
    //헤더 버거버튼
    const elmomenu = document.querySelector('header .menu');
    const elmosub = document.querySelector('header .mo_sub');

    elmomenu.addEventListener ('click', function(){
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
    
    })

    const elul = document.querySelectorAll('nav_no mo_sub >ul')
}


//위아래 슬라이드
const elheader = document.querySelector('header')

let onsll = {pos:0, after:0}
window.addEventListener ('scroll',function(){
    onsll.pos = window.pageYOffset;

    if(onsll.pos > onsll.after){
        elheader.classList.add('up')
        
    }else{
        elheader.classList.remove('up')
    }

    if(onsll.pos == 0){
        elheader.style = `border-bottom: 0px;`
    }else{
        elheader.style = `border-bottom: 1px solid black;`
    }
    onsll.after = onsll.pos;
})


