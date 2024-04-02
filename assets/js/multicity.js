// multicity
var dclone = null;
dclone = $(".template").clone();
$("#add_room").click(function (e) {
  e.preventDefault();
  var _elm = dclone.clone();
  _elm.css("display", "block");
  _elm.find(".remove_btn").show();
  _elm.appendTo("#clonehere");

  $(document).on("click", ".remove_btn", function (e) {
    var $e = $(e.currentTarget);

    $e.closest(".template").remove();
  });
});
