(function() {
  window.APP = {
    init: function() {
      this.view.init();
    }
  };

  APP.view = {
    _els: {
      $addMapForm: null,
      $newMapButton: null,
    },
    init: function() {
      return this
        ._captureElements()
        ._bindMainButtons();
    },
    showAddMapForm: function() {
      this.utils.show(this._els.$addMapForm);
      return this;
    },
    _bindMainButtons: function() {
      var self = this;

      this._els.$newMapButton
        .click(function(e) {
          // $(this) == the thing you clicked on
          self.utils.hide($(this));
          
          self.showAddMapForm();
        });

      $('#new-map-submit').click(function(e) {
        var $el = $(this);

        self.utils
          .stop(e) // For now to stop POST
          .hide($el.closest('#new-map'))
          .show(self._els.$newMapButton);
      });

      return this;
    },
    _captureElements: function() {
      this._els = {
        $addMapForm: $('#new-map'),
        $newMapButton: $('.add-map')
      };

      return this;
    }
  };

  APP.view.utils = {
    stop: function(e) {
      e.preventDefault();
      e.stopPropagation();

      return this;
    },
    show: function($el) {
      $el
        .attr('aria-hidden', 'false')
        .show();

      return this;
    },
    hide: function($el) {
      $el
        .attr('aria-hidden', 'true')
        .hide();

      return this;
    }
  }; 

  $(document).ready(function() {
    APP.init();
  });
})();
