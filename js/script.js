//webP
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});
//burger
$(document).ready(function() {
	$('.burger').click(function(event){
		$('.burger,.right__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
//slider
$(document).ready(function(){
	$('.slider').slick({
		arrows:false,//наявність стілок
		dots:true,//наявніст кружечків знизу
		adaptiveHeight:false,//адаптивність висоти фото
		slidesToShow:1,//кількість слайдів до показу
		slidesToScroll:1,//кількість слайдів за одну прокрутку
		speed:1000,//швидкіть прокрутки в мс
		easing:'ease',//динаміка прокрутки(наявні приклади в шрарглці урок про анімацію)
		infinite:true,//віповідає за те чи буде слайдер безкінечний/.slick-disable-новий клас для стрілочки при значенні false
		initialSlide:0,//відповідає за номер стартового слайда
		autoplay: false,//авто прокрутка
		autoplaySpeed:5000,//швидкість автопрокрутки
		pauseOnFocus:true,//пауза при наведенні на фото/доти, відновлюється, коли прибрав
		pauseOnHover:true,//пауза при натисканні на фото, відновлюється при перезавантаженні
		pauseOnDotsHover:true,//пауза при натисканні на доти, відновлюється при перезавантаженні
		draggable:true,//відповідає за можливість прокрутки за допомогою протягування мишкою
		swipe:true,// відповідає за переключення протягуванням тачскріном
		touchTreshhold:5,//відповідає за відстань, яку треба протягнути,щоб слайд змінився/більше значення=менша відстань
		touchMove:true,//включає можливіть рухати слайдер, при значенні false буде перемикатись при протягуванні, але не рухатсь за стрілкою
		rows:1,//кількіт рядів в вслайді
		slidesPerRow:1, //кількість слайдів в ряду
	});
});
//menuItemsActiveHomeDeactive

$(document).ready(function() {
    var $div = $('.wrapper');
    var $link = $('.right__menu_link, .menu__left a');
    $link.on("click", function(event) {
    	event.preventDefault();
        $link.removeClass('active');
        $(this).addClass('active');
        var href = $(this).attr('href');
        $div.removeClass('active');
        $(href).addClass('active');
        $('.menu__left_home a').removeClass('active');
    });
});
//scrollBar
(function($){
    $(window).on("load",function(){
        $(".products").mCustomScrollbar();
        theme:"minimal-dark"
    });
})(jQuery);