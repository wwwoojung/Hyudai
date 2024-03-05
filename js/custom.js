$(function () {
    $('.mainVisual .visual_slide').on('init', function () {
        const current = $('.mainVisual .visual_slide .slick-current')
        current.addClass('on').siblings().removeClass('on');
    })

    $('.mainVisual .visual_slide').slick({
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 2000,
    })

    $('.mainVisual .visual_slide').on('afterChange', function (e, s, c) {
        console.log(e, s, c)
        $('.mainVisual .right_dots li').removeClass('on');
        $('.mainVisual .right_dots li').eq(c).addClass('on');
        $('.mainVisual .num span').text('0' + (c + 1));

        const current = $('.mainVisual .visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.mainVisual .right_dots li a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.mainVisual .visual_slide').slick('slickGoTo', idx)
    })

    let st = true;
    $('.mainVisual .play').on('click', function () {
        $(this).toggleClass('on');

        if (st) {
            $('.mainVisual .visual_slide').slick('slickPause')
        } else {
            $('.mainVisual .visual_slide').slick('slickPlay')
        }

        st = !st;
    })

    $('.mainPortfolio .pf_left_slide').slick({
        fade: true,
        asNavFor: '.mainPortfolio .pf_right_slide',
        arrows: false,
    });

    $('.mainPortfolio .pf_right_slide').slick({
        slidesToShow: 4,
        asNavFor: '.mainPortfolio .pf_left_slide',
        arrows: false,
    })

    $('.mainPortfolio .arrows .bt_left').on('click', function () {
        $('.mainPortfolio .pf_left_slide').slick('slickPrev');
    })
    $('.mainPortfolio .arrows .bt_right').on('click', function () {
        $('.mainPortfolio .pf_left_slide').slick('slickNext');
    })

    $('.mainSolution .solution_slide').slick({
        dots: true,
        centerMode: true,
        variableWidth: true,
    })

    $('.mainSolution .solution_slide').on('afterChange', function (e, s, c) {
        $('.mainSolution .txt_box>li').removeClass('on');
        $('.mainSolution .txt_box>li').eq(c).addClass('on');
        $('.mainSolution .solution_idx strong').text('0' + (c + 1))
    })

    $('#promotion').YTPlayer({
        videoURL: 'https://youtu.be/5nnsleIF6Yw',
        containment: '.mainPromotion .movie_case',
        showControls: false,
        optimizeDisplay: false,
        playOnlyIfVisible: true,
        autoPlay: false,
    })

    let movie = true;
    $('.mainPromotion .movie_case .movie_play').on('click', function () {
        if (movie) {
            $('#promotion').YTPPlay();
        } else {
            $('#promotion').YTPPause();
        }

        $(this).toggleClass('on');

        movie = !movie;
    });
})