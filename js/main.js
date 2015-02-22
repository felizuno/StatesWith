(function() {
  window.APP = {
    init: function() {
      this.view
        .init()
        .showAddMapForm();
    }
  };

  APP.view = {
    _els: {

    },
    init: function() {
      return this
        ._captureElements();
    },
    showAddMapForm: function() {

    },
    _captureElements: function() {
      this._els = {

      };

      return this;
    }
  };

  $(document).ready(function() {
    App.init();
  });
})();
