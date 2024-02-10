// listener para quando uma img de mon for clicada soltar o cry dele
$(".member_fav_pkm").click( function(){
    var name = $(this).attr("id");
    var audio = new Audio("sounds/"+ name +".mp3");
    audio.play();
});

$(".ksv_background").fadeIn(1000);
