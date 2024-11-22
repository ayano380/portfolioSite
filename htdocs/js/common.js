// JavaScript Document
$(function() { 

// 	// ローディング終了したら閉じる処理
// 	window.onload = function () {
//     if (!sessionStorage.getItem('access')) {
//         // 1.5秒経過後に実行
//         setTimeout(() => {	
//             const spinner = document.getElementById('loading');
//             spinner.classList.add('loaded');
//             // ローディング完了後、アクセス済みフラグを設定
//             sessionStorage.setItem('access', 'true');
//         }, 1500);
//     } else {
//         // アクセス済みフラグがある場合、ローディングスピナーを非表示にする
//         const spinner = document.getElementById('loading');
//         spinner.classList.add('loaded');
//     }
// }


    // スクロール時、スライドイン(上下）する処理
    $(window).scroll(function (){
		$('.js-slidein_top, .js-slidein_bottom').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll_topbottom');
			}
		});
	});

    // スクロール時、スライドイン(左右）する処理
    $(window).scroll(function (){
		$('.js-slidein_right, .js-slidein_left').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll_rightleft');
			}
		});
	});


 


});