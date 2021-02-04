$(document).ready(function(){
     $('.con02List').slick({
        slidesToShow:1, //보이는 슬라디드
        slidesToScroll:1, //슬라이드 넘기는 수
        centerMode:false,//이미지를 가운데 정렬하여 잘린 이미지도 보이도록 해주는 역할
        arrows:false, //화살표
        prevArrow:$('.btnL'), //화살표 클래스 설정
		nextArrow:$('.btnR'),
        dots:false,
        dotsClass:'dotBtn',
        variableWidth:true,
        autoplay:true,//자동재생
        autoplaySpeed:2500,//재생속도
        infinite:true, //반복재생
        });

        $(".plusBtn01").click(function(){
                $( ".con04List01" ).animate( {
                    height: "580px"});
                $(".plusBtn01").hide();
                $(".con04ListBox01").fadeIn(1000,"swing",function(){
                    $(".con04ListBox01").show();
                })
            });
        $(".plusBtn02").click(function(){
                $( ".con04List02" ).animate( {
                    height: "580px"});
                $(".plusBtn02").hide();
               $(".con04ListBox02").fadeIn(1000,"swing",function(){
                    $(".con04ListBox02").show();
                })
            });
        $(".plusBtn03").click(function(){
               $( ".con04List03" ).animate( {
                    height: "580px"});
                $(".plusBtn03").hide();
                $(".con04ListBox03").fadeIn(1000,"swing",function(){
                    $(".con04ListBox03").show();
                })
            });
});


/*alert('오류')
document.getElementById('wrap').style.display="none"*/