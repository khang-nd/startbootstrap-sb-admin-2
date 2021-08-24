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
  var Gift = {
    1: [
      {
        icon: null,
        title: "Giftbox 1",
        action: function() {
          alert(this.textContent);
        }
      }
    ],
    2: [
      {
        icon: null,
        title: "Giftbox 2",
        action: function() {
          alert(this.textContent);
        }
      },
      {
        icon: null,
        title: "Giftbox 3",
        disabled: true,
        action: function() {
          alert(this.textContent);
        }
      }
    ],
    3: [
      {
        icon: null,
        title: "Giftbox 4",
        action: function() {
          alert(this.textContent);
        }
      },
      {
        icon: null,
        title: "Giftbox 5",
        disabled: true,
        action: function() {
          alert(this.textContent);
        }
      },
      {
        icon: null,
        title: "Giftbox 6",
        disabled: true,
        action: function() {
          alert(this.textContent);
        }
      }
    ],
    4: [
      {
        icon: null,
        title: "Giftbox 7",
        action: function() {
          alert(this.textContent);
        }
      },
      {
        icon: null,
        title: "Giftbox 8",
        action: function() {
          alert(this.textContent);
        }
      },
    ],
  }
  var gifts = $("#gifts");
  var levels = $(".btn-level");
  var currLevel = ".btn-level--current";
  var inactive = ".btn-level--inactive";
  var prev = ".card-gift .btn-prev";
  var next = ".card-gift .btn-next";
  var display = "d-sm-block d-none";

  function renderGift({ icon, title, disabled, action }) {
    var _icon = icon || "<i class='fas fa-gift fa-2x mb-1'></i>";
    return $("<button />", {
      class: "btn btn-gift " + (disabled ? "btn-secondary" : "btn-primary"),
      click: action,
      disabled,
      html: _icon + "<span>" + title + "</span>"
    });
  };

  function renderGifts(level) {
    gifts.empty();
    gifts.append(Gift[level].map(renderGift));
  }

  renderGifts(1);

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

    $(".btn-level").parent().addClass(display);
    $(nextLevel).parent().removeClass(display);
    renderGifts(index + 1);
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

    $(".btn-level").parent().addClass(display);
    $(levels[index]).parent().removeClass(display);
    renderGifts(index + 1);
    validateNavigation(index);
  });

})(jQuery); // End of use strict
