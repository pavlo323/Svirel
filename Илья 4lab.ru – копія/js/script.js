
$(document).ready(function() {
	$('.spoiler__title').click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});


$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__text').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__tel').toggleClass('hidden');
	});
});
$(document).ready(function() {
	$('.header__tel').click(function(event) {
		$('.header__tel img, .header__tel-body').toggleClass('active');
		$('body').toggleClass('lock');
		$('.header__burger').toggleClass('hidden');
	});
});

function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}



ibg()
;
$(document).ready(function(){
	$('.section-two__slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		speed:800,
		infinite:false,
		responsive:[
			{
				breakpoint: 1550,
				settings: {
					arrows:false,
				}
			}
		]
	});
});






$(document).ready(function(){
	$('.slider__cart').slick({
		arrows:true,
		dots:true,
		slidesToShow: 1,
		speed:800,
		infinite:false,
		responsive:[
			{
				breakpoint: 1550,
				settings: {
					arrows:false,
				}
			}
		]
	});
});

new Swiper('.image-slider',{
	scrollbar: {
		el: '.swiper-scrollbar',
		// Возможность перетаскивать скролл
		draggable: true
	},
	slidesPerView: 3,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		767: {
			slidesPerView: 2,
		},
		992: {
			slidesPerView: 3,
		}
	},
});
