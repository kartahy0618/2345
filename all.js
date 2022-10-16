$('.menu').click(function(){
    // 除錯
    console.log('hello');
    $('.menu').css('opacity','0')
    // 選單出現
$('.mb-meun').css('display','flex')
})

$('.error').click(function(){
    $('.menu').css('opacity','1')
    // 選單消失
    $('.mb-meun').css('display','none') 
})