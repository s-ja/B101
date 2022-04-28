$(function(){
    board()
    popup()
    menu()
    // slide()
    let interval_id = setInterval(slide,3000)
})

function popup(){
    $(".news li").first().click(function(){
        $("#popup").removeClass("d_none")
    })
    $("#popup button").click(function(){
        $("#popup").addClass("d_none")
    })
}

function board(){
    $(".board_title li").click(function(){
        if(!$(this).hasClass("active")){
            $(this).addClass("active")
            $(this).siblings().removeClass("active")
            let idx = $(this).index()
            $(".board_contents ul").eq(idx).removeClass("d_none")
            $(".board_contents ul").eq(idx).siblings().addClass("d_none")
        }
    })
}

function menu(){
    $("#gnb > li").mouseenter(function(){
        $(this).addClass("mouseenter")
        $(this).children(".lnb").stop().slideDown()
    })
    $("#gnb > li").mouseleave(function(){
        $(this).removeClass("mouseenter")
        $(this).children(".lnb").stop().slideUp()
    })
}

function slide(){
    let curr_slide = $("#imgs li.top")
    let next_slide = curr_slide.next()
    if(!next_slide.length) next_slide = $("#imgs li:first")
    curr_slide.removeClass("top")
    next_slide.addClass("top")
}