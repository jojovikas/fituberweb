$(document).ready(function () {
	$("a.link.active").parents("ul").siblings(".link").addClass("active");
});

$(document).ready(function () {
	$("#showNavBtn").on("click", function () {
		$("#hideNavBtn, #navBgOverlay").show();
		$("#nav").animate({ right: 0 }, "fast");
	});
	$("#hideNavBtn, #navBgOverlay").on("click", function () {
		$("#hideNavBtn, #navBgOverlay").hide();
		$("#nav").animate({ right: -290 }, "fast");
	});
});

// For Mobile Menu
if ($(window).width() < 1200) {
	var divs = $("#nav > ul > li > ul").hide();
	var h2s = $("#nav > ul > li > button").click(function () {
		h2s.not(this).removeClass("active")
		$(this).toggleClass("active")
		divs.not($(this).next()).slideUp()
		$(this).next().slideToggle()
		return false;
	});
}
$(window).resize(function () {
	if ($(window).width() > 1199) {
		$("#nav ul li ul").removeAttr("style");
	}
});

function fnHeaderSticky() {
	if ($(this).scrollTop() > 110) {
		$('#navHeader').addClass('sticky');
		$('#navHeader').removeClass('non-sticky');
	} else {
		$('#navHeader').removeClass('sticky');
		$('#navHeader').addClass('non-sticky');
	}
}
$(window).scroll(function () {
	fnHeaderSticky();
});
$(window).on("load", function () {
	fnHeaderSticky();
});

$(function () {
	$('a.page-scroll[href*="#"]:not([href="#"])').on('click', function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html').animate({
					scrollTop: (target.offset().top - 74)       //Top Margin
				}, 800);                       //Speed
				return false;
			}
		}
	});
});