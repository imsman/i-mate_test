var count= 0;

// 각각의 하트에 각각의 카운트넣어주기
$('.heart-icon img').on('click',function(){
    $(this).attr('src','../images/mo_icon_fullheart.svg');
    count++;
    console.log(count);

    if(count%2 == 0){
        $(this).attr('src','../images/mo_icon_heart.svg');
    }
});

$("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".upload-name").val(fileName);
});