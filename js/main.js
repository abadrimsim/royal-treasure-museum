// Change Navbar Background On Scroll
$(function () {
	$(document).scroll(function () {
		var $nav = $('nav');
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});
