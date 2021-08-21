(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
    
    // Toggle the side navigation when window is resized below 480px
    if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
      $("body").addClass("sidebar-toggled");
      $(".sidebar").addClass("toggled");
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

  // Gifts
  var levels = $(".btn-level");
  var currLevel = ".btn-level--current";
  var inactive = ".btn-level--inactive";
  var prev = ".card-gift .btn-prev";
  var next = ".card-gift .btn-next";
  function validateNavigation(index) {
    $(prev + "," + next).attr("disabled", false);
    if (index === 0)
      $(prev).attr("disabled", true);
    if (index === levels.length - 1)
      $(next).attr("disabled", true);
  }
  function navigate() {
    var direction = $(this).hasClass("btn-next") ? "next" : "prev";
    var index = levels.index($(currLevel));
    var nextLevel = levels[direction === "next" ? ++index : --index];    

    if (direction === "next")
      $(nextLevel).removeClass(inactive.slice(1));
    else
      $(currLevel).addClass(inactive.slice(1));
    $(currLevel).removeClass(currLevel.slice(1));
    $(nextLevel).addClass(currLevel.slice(1));

    validateNavigation(index);
  }
  $(prev).on("click", navigate);
  $(next).on("click", navigate);
  $(".btn-level").on("click", function() {
    var index = levels.index($(this));
    
    levels.removeClass(currLevel.slice(1));
    levels.addClass(inactive.slice(1));
    for(var i = 0; i <= index; i++) {
      $(levels[i]).removeClass(inactive.slice(1));
    }
    $(levels[index]).addClass(currLevel.slice(1));

    validateNavigation(index);
  });
  $(".btn-gift").on("click", function() {
    alert("Tada! You opened " + this.textContent);
  });

})(jQuery); // End of use strict
