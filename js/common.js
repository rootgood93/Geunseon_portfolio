$(function () {


    // 햄버거 버튼, gnb
    $('.ham .open').click(() => {
        $('.ham .open').removeClass('on')
        $('.ham .close').addClass('on')
        // $('header .gnb').animate({width: '23vw'})
        $('header .gnb').animate({
            left: '0'
        })
    })

    $('.ham .close').click(() => {
        $('.ham .close').removeClass('on')
        $('.ham .open').addClass('on')
        // $('header .gnb').animate({width: '0vw'})
        $('header .gnb').animate({
            left: '-100%'
        })
    })



    // 맨위로 가기 버튼
    $('.back-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });



    //밤하늘
    let screenWidth = $('body').width();
    let screenHeight = $('body').height();
    let count = 300;

    for (loop = 0; loop < count; loop++) {
        let star = document.createElement("div");
        $(star).addClass('dot');
        // $('body').append(star);
        $('#wrap').append(star);

        if (genRanNum(1, 4) == 4) {
            $(star).addClass('twinkle');
            $(star).css({
                "animation-duration": genRanNum(2, 8) + "s",
            })
        }

        let ranWH = genRanNum(0.5, 2)
        $(star).css({
            'top': genRanNum(0, screenHeight),
            'left': genRanNum(0, screenWidth),
            "width": ranWH,
            "height": ranWH
        })
    }

    function genRanNum(_n1, _n2) {
        let ranNum = Math.round((Math.random() * _n2) + _n1);
        return ranNum;
    }




    // tab 버튼 무력화
    $('.tab>li>a').click(function (e) {
        e.preventDefault()
    })

    // tab 버튼 동작
    $('.tab li').click(function () {
        console.log($(this).index())
        $('.tab li').removeClass('on')
        $(this).addClass('on')
        let tabIndex = $(this).index()
        $('.tab_box').removeClass('on')
        $('.tab_box').eq(tabIndex).addClass('on')
    })


    // .back_list
    // $('.list1 .back_list').click(function () {
    //     history.back()
    //     $('.main .tab').find('li').eq(0).addClass('on').siblings().removeClass();
    //     $('.port_list').find('#tab1').addClass('on').siblings().removeClass('on');

    // })
    // $('.list2 .back_list').click(function () {
    //     history.back()
    //     $('.main .tab').find('li').eq(1).addClass('on').siblings().removeClass();
    //     $('.port_list').find('#tab2').addClass('on').siblings().removeClass('on');

    // })

    // $('.list2 .back_list').click(function () {
    //     history.back(function () {
    //         $('.tab li').removeClass('on')
    //         $('.tab li').eq(1).addClass('on')
    //         $('.tab_box').removeClass('on')
    //         $('.tab_box').eq(1).addClass('on')
    //     })
    // })





})