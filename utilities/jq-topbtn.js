// Top 버튼 이동
$('.top-btn').click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop : 0
    }, 700)
})