const elmaxb = document.querySelectorAll('.maxb img')

setInterval(() => {
    
    elmaxb.forEach((v)=>{
        if (v.classList.contains('ani')) {
                v.classList.remove('ani')
        }else{
            v.classList.add('ani')
        }

    })


}, 1500);