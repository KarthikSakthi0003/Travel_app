  //////////////////////// Bootstrap number spinner
  $(".number-spinner").click(function (e) {
    e.preventDefault();
    var fieldName = $(this).attr("data-field");
    var type = $(this).attr("data-type");
    var input = $(this)
      .closest(".input-group")
      .find("input[name='" + fieldName + "']"); //$("input[name='" + fieldName + "']")
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
      if (type == "minus") {
        var minValue = parseInt(input.attr("min"));
        minValue = !minValue ? 0 : minValue;
        if (currentVal > minValue) {
          input.val(currentVal - 1).change();
        }
        if (parseInt(input.val()) == minValue) {
          $(this).attr("disabled", true);
        }
      } else if (type == "plus") {
        var maxValue = parseInt(input.attr("max"));
        maxValue = !maxValue ? 999 : maxValue;
        if (currentVal < maxValue) {
          input.val(currentVal + 1).change();
        }
        if (parseInt(input.val()) == maxValue) {
          $(this).attr("disabled", true);
        }
      }
    } else {
      input.val(0);
    }
  });
  $(".spinner-value").focusin(function () {
    $(this).data("oldValue", $(this).val());
  });
  $(".spinner-value").change(function () {
    var minValue = parseInt($(this).attr("min"));
    var maxValue = parseInt($(this).attr("max"));
    if (!minValue) minValue = 0;
    if (!maxValue) maxValue = 999;
    var valueCurrent = parseInt($(this).val());
    var name = $(this).attr("name");
    if (valueCurrent >= minValue) {
      $(
        ".number-spinner[data-type='minus'][data-field='" + name + "']"
      ).removeAttr("disabled");
    } else {
      $(this).val($(this).data("oldValue"));
    }
    if (valueCurrent <= maxValue) {
      $(
        ".number-spinner[data-type='plus'][data-field='" + name + "']"
      ).removeAttr("disabled");
    } else {
      alert("Sorry, the maximum value was reached");
      $(this).val($(this).data("oldValue"));
    }
  });
  $(".spinner-value").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if (
      $.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode == 65 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)
    ) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (
      (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
      (e.keyCode < 96 || e.keyCode > 105)
    ) {
      e.preventDefault();
    }
  });



$(document).ready(function () {
    $("#room_count").change(function () {
        var new_room_count = parseInt($(this).val());
//        addMoreRoom(new_room_count);

        if (new_room_count >= 1 && new_room_count <= 4) {
//            $("#room_count").val(new_room_count);
            renderRoomBlock(new_room_count);
        }

    });
});

function countOccupancies()
{
    var rooms = 0, adults = 0, child = 0;
    $("#rooms-repeat-block").find('[id^="room-"]:visible').each(function () {
        var roomId = $(this).attr('id').split('-')[1];
        adults += parseInt($("#adults-" + roomId).val());
        child += parseInt($("#children-" + roomId).val());
    });
    rooms = parseInt($("#room_count").val());

    $("#occ-room-count").text(rooms);
    $("#occ-adult-count").text(adults);
    $("#occ-child-count").text(child);
    $("#checkout-date-txt-block").toggleClass('hide', child === 0);

}


function renderRoomBlock(roomsSelected) {
    var source = $("#room-repeat-template").html();
    var template = Handlebars.compile(source);   //console.log(template);   var hh  = template({roomNumber: 1});  console.log(hh);  ;return;
    var roomsDisplayed = $("#rooms-repeat-block").find('[id^="room-"]:visible').length;
    var roomsRendered = $("#rooms-repeat-block").find('[id^="room-"]').length;
    //if room count is greater than number displayed - add or show accordingly
    if (roomsSelected > roomsDisplayed) {
        for (var i = 1; i <= roomsSelected; i++) {
            var r = $('#room-' + i);
            if (r.length == 0) {
                var html = template({roomNumber: i});
                //$(html).appendTo($('#rooms-repeat-block')); 
                $('#rooms-repeat-block').append(html);
                roomsRendered += 1;
            } else {
                //if the room exists and is hidden 
                $(r).show();
            }
        }

    } else {
        //else if less than room count selected - hide
        for (var i = ++roomsSelected; i <= roomsRendered; i++) {
            $('#room-' + i).hide();
        }
    }
    countOccupancies();
}
function renderAgeDropdown(that, roomId) {
    var source = $("#child-age-repeat-template").html();
    var template = Handlebars.compile(source);
    var childSelected = $(that).val();
    var childDisplayed = $('[id^="child-' + roomId + '-"]:visible').length;
    var childRendered = $("#rooms-repeat-block").find('[id^="room-' + roomId + '"]').find('[id^="child-"]').length;
    //if child count is greater than number displayed - add or show accordingly
    if (childSelected > childDisplayed) {
        for (var i = 1; i <= childSelected; i++) {
            var ch = $('#child-' + roomId + '-' + i);
            if (ch.length == 0) {
                var html = template({roomNumber: roomId, childNumber: i});
//                $(html).appendTo($('#child-age-block-' + roomId));
                $('#child-age-block-' + roomId).append(html)
                childRendered += 1;
            } else {
                //if the child exists and is hidden 
                $(ch).show();
            }
        }

    } else {
        //else if less than child count selected - hide
        for (var i = ++childSelected; i <= childRendered; i++) {
            $('#child-' + roomId + '-' + i).hide();
        }
    }
    countOccupancies();
}