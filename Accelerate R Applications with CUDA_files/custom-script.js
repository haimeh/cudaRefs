jQuery(function ($) {

  // Subscribe submenu

  $('.subscribe-button').click(function () {
    if ($('.subscribe-menu').siblings().hasClass('active-header')) {
      $('.subscribe-menu').siblings().removeClass('active-header');
      $('.subscribe-menu').addClass('active-header');
    }
    else {
      $('.subscribe-menu').toggleClass('active-header');
    }
    ;

    if ($('.subscribe-menu').hasClass('active-header')) {
      $('.subscribe-menu').addClass('animated fadeIn');
    }
    else {
      $('.subscribe-menu').removeClass('animated fadeIn');
    }
  });

  // Twitter submenu

  $('.twitter-button').click(function () {
    if ($('.twitter-menu').siblings().hasClass('active-header')) {
      $('.twitter-menu').siblings().removeClass('active-header');
      $('.twitter-menu').addClass('active-header');
    }
    else {
      $('.twitter-menu').toggleClass('active-header');
    }

    if ($('.twitter-menu').hasClass('active-header')) {
      $('.twitter-menu').addClass('animated fadeIn');
    }
    else {
      $('.twitter-menu').removeClass('animated fadeIn');
    }
  });

  // Search.
  $(window).load(function() {
    if($(window).width() > 768) {
      $('.search').addClass('desktop-search');
      $('#trigger-search-top').addClass('trigger-search-desktop');
    } else {
      $('.search').addClass('mobile-search');
      $('#trigger-search-top').addClass('trigger-search-mobile');
    }
  });
  $(window).resize(function() {
    if($(window).width() < 768) {
      $('.search').addClass('mobile-search').removeClass('desktop-search');
      $('#trigger-search-top').addClass('trigger-search-mobile').removeClass('trigger-search-desktop');
    } else {
      $('.search').removeClass('mobile-search').addClass('desktop-search');
      $('#trigger-search-top').addClass('trigger-search-desktop').removeClass('trigger-search-mobile');
    };
  });

  $('#trigger-search-top').on('click', function (e) {
    e.preventDefault();
    if(!$(this).parent().hasClass('active-field')) {
      $('#search-top-bar').fadeIn({
        complete: function() {
          $(this).addClass('active').focus();
        }
      });
      $('.wrap-search-field, .wrap-search-checkbox').addClass('active-field');
      $('#cuda-search-wrapper').fadeIn();
    } else {
      $('#search-theme-form-input').submit();
    }
  });

  $('#trigger-search-top-mobile').on('click', function (e) {
    e.preventDefault();
    $(this).css('display', 'none');

    if(!$('#wrap-search-field-mobile').hasClass('active-field')) {
      $('#search-top-bar-mobile').fadeIn({
        complete: function () {
          var $bar = $(this).addClass('active');
          $('#cuda-search-wrapper-mobile').fadeIn({
            complete: function() {
              $bar.focus();
            }
          });
        }
      });
      $('.wrap-search-field-mobile, .wrap-search-checkbox-mobile').addClass('active-field');
    } else {
      $('#search-top-bar-mobile, #cuda-search-wrapper-mobile').fadeOut();
    }
  });

  $('#trigger-search-top-mobile-active').on('click', function (e) {
    e.preventDefault();
    $('#search-theme-form-input-mobile').submit();
  });

  $('table').wrap('<div class="table-responsive"></div>');

  $(document).ready(function () {
    // CUDA search support
    var $searchFormTheme = $('#search-theme-form-input');
    $searchFormTheme.on('submit', function (e) {
      if ($("#cuda-search").is(':checked')) {
        // Perform CUDA search
        $searchFormTheme.attr({
          'action': 'https://developer.nvidia.com/search/gss/' + $("#search-top-bar").val(),
          'method': 'post'
        });

        // Remove extra field
        $('#s').remove();
      }
      else {
        // Populate WP search form
        $('#s').val($('#search-top-bar').val());

        // Remove extra fields
        $('#form-psuQ7x3mMxCYiM5jWNkM_GhZlUH-jE68gGh2xJ6dG4U').remove();
        $('#edit-search-theme-form').remove();
      }
    });

    var $searchFormTheme_mobile = $('#search-theme-form-input-mobile');
    $searchFormTheme_mobile.on('submit', function (e) {
      if ($("#cuda-search-mobile").is(':checked')) {
        // Perform CUDA search
        $searchFormTheme_mobile.attr({
          'action': 'https://developer.nvidia.com/search/gss/' + $("#search-top-bar-mobile").val(),
          'method': 'post'
        });

        // Remove extra field
        $('#s').remove();
      }
      else {
        // Populate WP search form
        $('#s').val($('#search-top-bar-mobile').val());

        // Remove extra fields
        $('#form-psuQ7x3mMxCYiM5jWNkM_GhZlUH-jE68gGh2xJ6dG4U').remove();
        $('#edit-search-theme-form').remove();
      }
    });

    // Init Isotope.
    jQuery('.all-posts-grid').isotope({
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
    });
    // Layout Isotope after each image loads.
    jQuery('.all-posts-grid').imagesLoaded().progress( function() {
      jQuery('.all-posts-grid').isotope('layout');
    });

  });
});
