try {
  var ce = new window.CustomEvent('test');
  ce.preventDefault();
  if (ce.defaultPrevented !== true) {
    throw new Error('Could not prevent default');
  }
}
catch (e) {
  var CustomEvent = function (event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      }
      catch (e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
}

;(function ($) {

  $(document).ready(function () {
    // Integration with an isotope.
    var istp_count = jQuery('.all-posts-grid .grid-item').length;
    var istp_shift = 0;
    var istp_more = 0;
    var img_sz_pf = 0;

    $('.elm-button').on('click', function (e) {
      e.preventDefault();

      var $that = $(this),
          url = $that.attr('data-href'),
          nextPage = parseInt($that.attr('data-page'), 10) + 1,
          maxPages = parseInt($that.attr('data-max-pages'), 10);

      $that.addClass('is-loading');

      if (url.indexOf('?') > 0) {
        url += '&';
      }
      else {
        url += '?';
      }

      url += 'paged=' + nextPage;

      $.ajax({
        type: 'POST',
        url: url,
        dataType: 'text'
      }).done(function (data) {

        $that.removeClass('is-loading');

        if ($(elm_button_vars.wrapper).length) {
          $(elm_button_vars.wrapper).append($($.parseHTML(data)).find(elm_button_vars.wrapper).addBack(elm_button_vars.wrapper).html());

          // Integration with an isotope.
          istp_shift = jQuery('.all-posts-grid .grid-item').length - istp_count;
          istp_count = jQuery('.all-posts-grid .grid-item').length;
          if (istp_shift < 15) {
            istp_more = 1;
          }
          img_sz_pf = jQuery('.all-posts-grid .grid-item:eq(-' + istp_shift + ') img').height();
          while (istp_shift > 0) {
            jQuery('.all-posts-grid').isotope('appended', jQuery('.all-posts-grid .grid-item:eq(-' + istp_shift + ')'));

            jQuery('.all-posts-grid .grid-item:eq(-' + istp_shift + ') img').load(function () {
              jQuery('.all-posts-grid').isotope('layout');
            });

            istp_shift--;
          }

          document.dispatchEvent(new window.CustomEvent('elm-load'));
        }
        else {
          console.log('Please update Easy Load More settings with post list wrapper selector.');
        }

        if (nextPage == maxPages) {
          $that.remove();
          document.dispatchEvent(new window.CustomEvent('elm-lastPage'));
        }
        else {
          $that.attr('data-page', nextPage);
        }

        if (istp_more == 1) {
          jQuery('.all-pagination').fadeOut(800);
        }

      }).fail(function () {
        document.dispatchEvent(new window.CustomEvent('elm-fail'));
        console.log('Ajax failed. Navigating to ' + url + '.');
        document.location.href = url;
      });

      return false;
    });
  });

}(jQuery));