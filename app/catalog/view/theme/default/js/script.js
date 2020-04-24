(function () {
  var toggle = document.querySelector('.nav-toggle');
  
  toggle.addEventListener('click', function(e) {
    this.classList.toggle('opened');
  });
})();

$(".nav-toggle").click(function() {
  $(this).toggleClass("open");
  $(".menu-adaptive").slideToggle();
  $("body").toggleClass("js-overflow");
});



$(".menu-adaptive__list > li > a").click(function (e) {
	e.preventDefault();
	
	var menu = $(this).closest('.menu-adaptive__list');
	
	if (false == $(this).next().is(':visible')) {
		menu.find('li').removeClass('slide active');
		menu.find('ul').slideUp();
	}
	
	$(this).next().slideToggle();
	$(this).parent().addClass('slide');
});
