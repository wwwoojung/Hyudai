// 동영상 불러오기
let player;


const MOVIE_OPTION = {
    videoId: 'raw3Nu0_mBQ',
    playerVars: {
        'rel': 0,
        'controls': 0,
        'loop': 1,
        'playsinline': 1
    },
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player('promotion_movie', MOVIE_OPTION);
}

// 동영상 제어 play / pause 스위치 만들기;


const MOVIE_BTN = document.querySelector('.MainPromotion .movie_btn');

let SW = true;
const BTN_SWITCH = e => {
    const tg = e.target;
    tg.classList.toggle('on');
    SW ? player.playVideo() : player.pauseVideo();
    SW = !SW;
}

MOVIE_BTN.addEventListener('click', BTN_SWITCH);





// var player;
// function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         height: '360',  //변경가능-영상 높이
//         width: '640',  //변경가능-영상 너비
//         videoId: 'M7lc1UVf-VE',  //변경-영상ID
//         playerVars: {
//             'rel': 0,    //연관동영상 표시여부(0:표시안함)
//             'controls': 0,    //플레이어 컨트롤러 표시여부(0:표시안함)
//             'autoplay': 1,   //자동재생 여부(1:자동재생 함, mute와 함께 설정)
//             'mute': 1,   //음소거여부(1:음소거 함)
//             'loop': 1,    //반복재생여부(1:반복재생 함)
//             'playsinline': 1    //iOS환경에서 전체화면으로 재생하지 않게
//             //'playlist': 'M7lc1UVf-VE'   //재생할 영상 리스트
//         },
//     });
// }


