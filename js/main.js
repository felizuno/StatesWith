(function() {
  window.APP = {
    init: function() {
      this.view.init();
    }
  };

  APP.view = {
    _els: {
      $addMapForm: null,
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

      $('.add-map').click(function(e) {
        self.showAddMapForm();
      });

      return this;
    },
    _captureElements: function() {
      this._els = {
        $addMapForm: $('#new-map')
      };

      return this;
    }
  };

  APP.view.utils = {
    show: function($el) {
      $el
        .attr('aria-hidden', 'false')
        .show();

      return this;
    }
  }; 

  $(document).ready(function() {
    APP.init();
  });
})();
