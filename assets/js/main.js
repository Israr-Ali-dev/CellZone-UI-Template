$(document).ready(function () {
  //  Sidebar Menu

  $('.sidebar-toggle').click(function () {
    $('.sidenav').css('width', '100%');
    $('.overlay').addClass('overlyClass');
  });

  $('.sidebar-close').click(function () {
    $('.sidenav').css('width', '0');
    $('.overlay').removeClass('overlyClass');
  });

  // Sidebar submenu
  $('#sub-menu').click(function () {
    $('.side-submenu').css({ width: '250px' });
    $('.sidenav').css({ width: '0' });
  });

  $('.sidemenu-close').click(function () {
    $('.side-submenu').css({ width: '0' });
    $('.sidenav').css({ width: '250px' });
  });

  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 130) {
      $('.product-sdetail-head').addClass('sticky');
    } else {
      $('.product-sdetail-head').removeClass('sticky');
    }
  });

  // // List & Grid View
  // $('#grid').click(function (event) {
  //   event.preventDefault();
  //   $('#products-view').addClass('product_grid');
  //   $('#products-view').removeClass('product_list');
  // });
  // $('#list').click(function (event) {
  //   event.preventDefault();
  //   $('#products-view').addClass('product_list');
  //   $('#products-view').removeClass('product_grid');
  // });

  // // Category Collapse
  // $('.cat-collapsible').click(function () {
  //   this.classList.toggle('activePlus');
  //   $('.content-category').slideToggle();
  // });

  // // active link on side categories
  // $(function () {
  //   $('.sideCat-filter').each(function () {
  //     if ($(this).attr('href') == window.location.pathname) {
  //       $(this).addClass('sideCat-filter--selected');
  //     }
  //   });
  // });

  // // active link on gid and list icons
  // $('.view-link .btn').click(function (e) {
  //   $('.view-link .btn').removeClass('active');

  //   var $this = $(this);
  //   if (!$this.hasClass('active')) {
  //     $this.addClass('active');
  //   }
  //   //e.preventDefault();
  // });

  // //-- Click on detail
  // $('ul.menu-items > li').on('click', function () {
  //   $('ul.menu-items > li').removeClass('active');
  //   $(this).addClass('active');
  // });

  // $('.attr,.attr2').on('click', function () {
  //   var clase = $(this).attr('class');

  //   $('.' + clase).removeClass('active');
  //   $(this).addClass('active');
  // });

  // //-- Click on QUANTITY
  // $('.btn-minus').on('click', function () {
  //   var now = $('.section > div > input').val();
  //   if ($.isNumeric(now)) {
  //     if (parseInt(now) - 1 > 0) {
  //       now--;
  //     }
  //     $('.section > div > input').val(now);
  //   } else {
  //     $('.section > div > input').val('1');
  //   }
  // });
  // $('.btn-plus').on('click', function () {
  //   var now = $('.section > div > input').val();
  //   if ($.isNumeric(now)) {
  //     $('.section > div > input').val(parseInt(now) + 1);
  //   } else {
  //     $('.section > div > input').val('1');
  //   }
  // });

  // Cart Page
  $('.tax-edit').click(function () {
    $(this).toggleClass('te-open').parent;
    $('.tax-calculate').slideToggle(200);
  });

  $('.if-left').click(function () {
    $(this).prev('.if-message').slideToggle(200);
  });

  $('.bp-toggle').click(function () {
    $('.bonus-products').slideToggle(200);
  });

  // Checkout Page validations

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.getElementsByClassName('needs-validation');

  // Loop over them and prevent submission
  Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      },
      false
    );
  });

  // Popup Order Detail
  $('.order-detail-link ').click(function (e) {
    setTimeout(function () {
      $('.popup').removeClass('animationClose').addClass('animationOpen');
    }, 100);
    $('.obscure').fadeIn(50);
    e.preventDefault();
  });

  $('.closeOrderDetail').click(function (e) {
    e.preventDefault();
    setTimeout(function () {
      $('.obscure').fadeOut(350);
    }, 50);
    $('.popup').removeClass('animationOpen').addClass('animationClose');
  });

  // Side Cart
  // Declare the body variable
  var $body = $('body');

  // Function that shows and hides the sidebar cart
  $('.cart-button, .close-button, #sidebar-cart-curtain, #side-cart').click(
    function (e) {
      e.preventDefault();

      // Add the show-sidebar-cart class to the body tag
      $body.toggleClass('show-sidebar-cart');

      // Check if the sidebar curtain is visible
      if ($('#sidebar-cart-curtain').is(':visible')) {
        // Hide the curtain
        $('#sidebar-cart-curtain').fadeOut(500);
      } else {
        // Show the curtain
        $('#sidebar-cart-curtain').fadeIn(500);
      }
    }
  );

  // Function that adds or subtracts quantity when a
  // plus or minus button is clicked
  $body.on('click', '.plus-button, .minus-button', function () {
    // Get quanitity input values
    var qty = $(this).closest('.qty').find('.qty-input');
    var val = parseFloat(qty.val());
    var max = parseFloat(qty.attr('max'));
    var min = parseFloat(qty.attr('min'));
    var step = parseFloat(qty.attr('step'));

    // Check which button is clicked
    if ($(this).is('.plus-button')) {
      // Increase the value
      qty.val(val + step);
    } else {
      // Check if minimum button is clicked and that value is
      // >= to the minimum required
      if (min && min >= val) {
        // Do nothing because value is the minimum required
        qty.val(min);
      } else if (val > 0) {
        // Subtract the value
        qty.val(val - step);
      }
    }
  });

  // Full Page Search
  $('#open-search').click(function () {
    $('.search-overlay').toggleClass('s--active');
    $('.search-overlay .container input').addClass('search-transition');
    $('.search-overlay .container #close-search').addClass('search-transition');
    $('.search-terms ul').addClass('search-transition');
    $('.search__input').focus();
  });
  $('#close-search').click(function () {
    $('.search-overlay').toggleClass('s--active');
    $('.search-overlay .container input').removeClass('search-transition');
    $('.search-overlay .container #close-search').removeClass(
      'search-transition'
    );
    $('.search-terms ul').removeClass('search-transition');
  });

  // Newsletter Popup
  $('.new-open').click(function () {
    $('.newsletter--container').addClass('appear-newsletter');
    $('.new-mail').focus();
  });
  $('.new-close').click(function () {
    $('.newsletter--container').removeClass('appear-newsletter');
  });

  // Reigon Popup
  $('#open-reigon').click(function () {
    $('.reigon-overly').toggle();
    $('.new-mail').focus();
  });
  $('#close-reigon').click(function () {
    $('.reigon-overly').toggle();
  });

  // On Scroll Image Appear Animation
  var $animation_elements = $('.cell-blogs ul li');
  var $window = $(window);

  // Shop Page Products appear animation
  var $products_elements = $('.cell-products .pro-data');

  function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = window_top_position + window_height;

    $.each($animation_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });

    $.each($products_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = element_top_position + element_height;

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass('in-view');
      } else {
        $element.removeClass('in-view');
      }
    });
  }

  $window.on('scroll resize', check_if_in_view);
  $window.trigger('scroll');
});
