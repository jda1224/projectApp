//alert();
$(".gnb>li").hover(function(){
    $(this).children(".submenu").stop().slideDown(400);
},function(){
    $(this).children(".submenu").stop().slideUp(400);
});

$(".allMn").click(function(){
    $(".allMnwarp").slideToggle(400);
});

$(".mallMn").click(function(){
    $(".gnb").animate({width:"toggle"},400);
    //$(".gnb").slideToggle(400);
});

  

//메인비주얼 슬라이드
var n = 0;
$(".imgNav a").eq(n).children("img").attr({"src":"./images/nav_on.png"});

function count(){
    n++;
    if(n<3){
        viewSlide(n);
    }else{
        n=0;
        viewSlide(n);
    }
}
var time = 2000;
var slideStart = setInterval("count()",time);

function viewSlide(n){
    $(".imgNav a").children("img").attr({"src":"./images/nav_off.png"});
    $(".imgNav a").eq(n).children("img").attr({"src":"./images/nav_on.png"});

    $(".carousel li").animate({"opacity":"0"},time-1000);
    $(".carousel li").eq(n).stop().addClass("topImg").show().css("opacity",0).animate({"opacity":"1"},time-1000);
}

$(".imgNav a").click(function(){
    n=$(this).attr("data-i");
    viewSlide(n)
});

/*
var timer = setInterval(function(){count()},1000);
$(".carousel").hover(function(){
	clearInterval(timer);
},function(){
	timer =  setInterval(function(){count()},1000);
});*/

function nextSlide(){
    n++;
    viewSlide(n);
}
function prevSlide(){
	n--;
    viewSlide(n);
}


//검색
$(".util>li:last-child").click(function(){
    $("#search").slideDown(350);
});
$(".btn_close").click(function(){
    $("#search").slideUp(350);
});


//호버
$(function(){
    //gnb util icon
    $(".util li a img").hover(function(){
        $(this).attr("src",$(this).attr("src").replace(".png","_on.png"));
    },function(){
        $(this).attr("src",$(this).attr("src").replace("_on.png",".png"));
    });

    //아이콘메뉴
    $(".iconMn li a img").hover(function(){
        $(this).attr("src",$(this).attr("src").replace(".png","_on.png"));
    },function(){
        $(this).attr("src",$(this).attr("src").replace("_on.png",".png"));
    });

    //푸터 sns아이콘
    $(".snsIcon li a img").hover(function(){
        $(this).attr("src",$(this).attr("src").replace(".png","_on.png"));
    },function(){
        $(this).attr("src",$(this).attr("src").replace("_on.png",".png"));
    });
});


$(function(){
    $(".r1BtnNext>a").click(function(){
        //alert();
        $(".tabTit>li").siblings("li").removeClass("active");
        $(".tabTit>li:nth-child(2)").addClass("active");
        $("#reserve2").show();
        $("#reserve1, #reserve3, #reserve4").hide();
    });

    $(".r2BtnNext>a").click(function(){
        $(".tabTit>li").siblings("li").removeClass("active");
        $(".tabTit>li:nth-child(3)").addClass("active");
        $("#reserve3").show();
        $("#reserve1, #reserve2, #reserve4").hide();
    });

    $(".r3BtnNext>a").click(function(){
        $(".tabTit>li").siblings("li").removeClass("active");
        $(".tabTit>li:nth-child(4)").addClass("active");
        $("#reserve4").show();
        $("#reserve1, #reserve2, #reserve3").hide();
    });

    $(".r4BtnPrev>a").click(function(){
        $(".tabTit>li").siblings("li").removeClass("active");
        $(".tabTit>li:nth-child(3)").addClass("active");
        $("#reserve3").show();
        $("#reserve1, #reserve2, #reserve4").hide();
    });

    $(".r3BtnPrev>a").click(function(){
        $(".tabTit>li").siblings("li").removeClass("active");
        $(".tabTit>li:nth-child(2)").addClass("active");
        $("#reserve2").show();
        $("#reserve1, #reserve3, #reserve4").hide();
    });

    $(".r2BtnPrev>a").click(function(){
        $(".tabTit>li").siblings("li").removeClass("active");
        $(".tabTit>li:nth-child(1)").addClass("active");
        $("#reserve1").show();
        $("#reserve2, #reserve3, #reserve4").hide();
    });
});
//".viewRow>div.viewYes, .viewVip, .viewVipv, .viewR, .viewRv, .viewS, .viewSv, .viewA, .viewAv"
$(function(){
    $(".viewVip").click(function(){
        $(this).toggleClass("viewSelec");
        $(".resultV").show();
    });

    $(".viewVipv").click(function(){
        $(this).toggleClass("viewSelec");
        $(".resultVv").show();
    });

    $(".viewR").click(function(){
        $(this).toggleClass("viewSelec");
        $(".resultR").show();
    });

    $(".viewRv").click(function(){
        $(this).toggleClass("viewSelec");
        $(".resultRv").show();
    });

    $(".viewS").click(function(){
        $(this).toggleClass("viewSelec");
        $(".resultS").show();
    });

    $(".viewSv").click(function(){
        $(this).toggleClass("viewSelec");
        $(".resultSv").show();
    });

    $(".viewA").click(function(){
        $(this).toggleClass("viewSelec");
        $(".resultA").show();
    });

    $(".viewAv, .viewYes").click(function(){
        $(this).toggleClass("viewSelec");
        $(".resultAv").show();
    });

    $(".seatResult li img").click(function(){
        $(".seatResult li").hide();
    });
});


//결제하기
$(".r4BtnNext").click(function(){
    alert("결제하시겠습니까?");
});


//좌석배치도 팝업
function seat(){
    window.open("./images/seat.jpg",'_blank','width=491, height=632',false);
}

$(function(){
    $("ul.tab_menu>li").click(function(){
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        var idx = $(this).index();
        if(idx == 0){
            $(".tab_con>div").removeClass("active");
            $("#firstCon").addClass("active");
        } else if(idx == 1){
            $(".tab_con>div").removeClass("active");
            $("#secondCon").addClass("active");
        } else if(idx == 2){
            $(".tab_con>div").removeClass("active");
            $("#thirdCon").addClass("active");
        } else{
            $(".tab_con>div").removeClass("active");
            $("#fourthCon").addClass("active");
        }
    });
});


// 탭버튼 - 대관안내, 회원예매안내, 아이디/비밀번호 찾기, 
// 마이페이지, 개인정보처리방침 등
$(function(){
    $("ul.lendTab>li").click(function(){
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        var idx = $(this).index();
        if(idx == 0){
            $(".lendCon>div").removeClass("active");
            $("#lFirst").addClass("active");
        } else{
            $(".lendCon>div").removeClass("active");
            $("#lSecond").addClass("active");
        }
    });
    $("ul.memTiTab>li").click(function(){
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        var idx = $(this).index();
        if(idx == 0){
            $(".memTiCon>div").removeClass("active");
            $("#memFirst").addClass("active");
        } else{
            $(".memTiCon>div").removeClass("active");
            $("#tiSecond").addClass("active");
        }
    });
    $("ul.aFindTab>li").click(function(){
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        var idx = $(this).index();
        if(idx == 0){
            $(".aFindCon>div").removeClass("active");
            $("#aFindFirst").addClass("active");
        } else{
            $(".aFindCon>div").removeClass("active");
            $("#aFindSecond").addClass("active");
        }
    });
    $("ul.mypageTab>li").click(function(){
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        var idx = $(this).index();
        if(idx == 0){
            $(".mpContentsCon>div").removeClass("active");
            $("#userInfo").addClass("active");
        } else if(idx == 1){
            $(".mpContentsCon>div").removeClass("active");
            $("#bookHistory").addClass("active");
        } else{
            $(".mpContentsCon>div").removeClass("active");
            $("#artistRegist").addClass("active");
        }
    });
    $("ul.personalTab>li").click(function(){
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        var idx = $(this).index();
        if(idx == 0){
            $(".personalCon>div").removeClass("active");
            $("#personal1").addClass("active");
        } else if(idx == 1){
            $(".personalCon>div").removeClass("active");
            $("#personal2").addClass("active");
        } else{
            $(".personalCon>div").removeClass("active");
            $("#personal3").addClass("active");
        }
    });
});



// 자주묻는질문 qna
$(".answer").hide();
$("li.question").click(function(){
    $(this).next().slideToggle(400);
});

var flag = false;

$(".qnaList>li").click(function(){
    flag = !flag;
    if(flag == true){
        $(this).children("span").children("img").attr("src",$(this).children("span").children("img").attr("src").replace("_open.png","_close.png"));
    } else{
        $(this).children("span").children("img").attr("src",$(this).children("span").children("img").attr("src").replace("_close.png","_open.png"));
    }
    
});


// 팝업 - 예매하기
function resev(){
    window.open('./r1.html','_blank','width=951,height=752');
}

//예매하기
$(".calTable td a").click(function(){
    $(".pickInfo").show();
});

//  팝업 - 공연일정
function program(){
    window.open('./program.html','_blank','width=840,height=715,top=100,left=200,resizable=no,scrollbars=no');
}

// 이메일무단수집거부
/*
$(function(){
    $(".fLinkCon>li:nth-child(3)").click(function(){
        $(".emailPopBG").show();
    });
    $(".emailclose").click(function(){
        $("#emailPopBG").hide();
    });
});
*/
function openModal(emailPopup){
  document.get
  $(".emailPopBG").fadeIn(300);
  $("."+emailPopup).fadeIn(300);
}

$(".emailPopBG, .emailclose").on('click',function(){
  $(".emailPopBG").fadeOut(300);
  $(".emailPopWrap").fadeOut(300);
});