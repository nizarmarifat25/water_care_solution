(function () {
  "use strict";

  var carousels = function () {
    $(".testimonial").owlCarousel({
      loop: true,
      center: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
        }
      }
    });
  };

  $(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
        stagePadding: 20,
      },
      700: {
        items: 2,
        margin: 10,
        stagePadding: 20,
      },
      1000: {
        items: 3,
        margin: 10,
        stagePadding: 20,
      },
    }
  });

  (function ($) {
    carousels();
  })(jQuery);
})();
