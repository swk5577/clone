$('body').append('<footer></footer>');
$('footer').load('./footer.html footer>div');


window.addEventListener('load',function(){

    $('footer').addClass('footer')

$('footer .fpbt').on('click',function(){
    $('.fpbt').find('.fp').slideToggle();
    $('.fpbt').find('span').toggleClass('tun2')
})
})
