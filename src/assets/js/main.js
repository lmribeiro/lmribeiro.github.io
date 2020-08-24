;(function () {

	'use strict';

  const burgerMenu = function () {

    $('.js-nav-toggle').on('click', function (event) {
      event.preventDefault();
      const $this = $(this);

      if ($('body').hasClass('offcanvas')) {
        $this.removeClass('active');
        $('body').removeClass('offcanvas');
      } else {
        $this.addClass('active');
        $('body').addClass('offcanvas');
      }

    });
  };

  // Click outside of offcanvass
  const mobileMenuOutsideClick = function () {

    $(document).click(function (e) {
      const container = $("#aside, .js-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas')) {
          $('body').removeClass('offcanvas');
          $('.js-nav-toggle').removeClass('active');
        }
      }
    });

    $(window).scroll(function () {
      if ($('body').hasClass('offcanvas')) {
        $('body').removeClass('offcanvas');
        $('.js-nav-toggle').removeClass('active');
      }
    });
  };

  // Document on load.
	$(function(){
		burgerMenu();
		mobileMenuOutsideClick();
	});

}());
