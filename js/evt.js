const elevt_a = document.querySelectorAll('.evt >a');
console.log(elevt_a);


const evt = new IntersectionObserver(evtin =>{
    console.log(evtin);
    evtin.forEach((v1)=>{
        if(v1.isIntersecting){
            v1.target.classList.add('on');
        }
    })
});

elevt_a.forEach(v=>{
    evt.observe(v)

})