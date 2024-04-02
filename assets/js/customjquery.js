
$(function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 15000,
      step: 1,
      values: [4000, 10000],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + "   -    $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0)  +
        "   -    $" +
        $("#slider-range").slider("values", 1)
    );

    jQuery(document).on('touchstart', '#slider-range .ui-slider-handle', function (e) {
      let t = e.touches[0] || e;
      jQuery(this).addClass('ui-state-hover').addClass('ui-state-active').addClass('ui-state-focus')
      var newEvent = new MouseEvent('mousedown', {
        screenX: t.screenX, screenY: t.screenY,
        clientX: t.clientX, clientY: t.clientY,
        relatedTarget: t.target,
      })
      Object.defineProperty(newEvent, 'target', {value: t.target, enumerable: true});
      Object.defineProperty(newEvent, 'currentTarget', {value: t.target, enumerable: true});
      jQuery(this).parent().slider("instance")._mouseDown(newEvent)
  });
  jQuery(document).on('touchend', '#slider-range .ui-slider-handle', function (e) {
      let t = e.touches[0] || e;
      jQuery(this).removeClass('ui-state-hover').removeClass('ui-state-active').removeClass('ui-state-focus')
      var newEvent = new MouseEvent('mouseup', {
        screenX: t.screenX, screenY: t.screenY,
        clientX: t.clientX, clientY: t.clientY,
        relatedTarget: t.target,
      })
      Object.defineProperty(newEvent, 'target', {value: t.target, enumerable: true});
      Object.defineProperty(newEvent, 'currentTarget', {value: t.target, enumerable: true});
      jQuery(this).parent().slider("instance")._mouseUp(newEvent)
  });
  jQuery(document).on('touchmove', '#slider-range .ui-slider-handle', function (e) {
      let t = e.touches[0] || e;
      var newEvent = new MouseEvent('mousemove', {
        screenX: t.screenX, screenY: t.screenY,
        clientX: t.clientX, clientY: t.clientY,
        relatedTarget: t.target,
        'bubbles': true,
        'cancelable': true,
      });
      Object.defineProperty(newEvent, 'target', {value: t.target, enumerable: true});
      Object.defineProperty(newEvent, 'currentTarget', {value: t.target, enumerable: true});
      jQuery(this).parent().slider("instance")._mouseMove(newEvent);
  });
  });
  