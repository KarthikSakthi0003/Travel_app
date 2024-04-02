// function loginFade() {
//   document.getElementById("logindd_fade").classList.toggle("modal-backdrop");
//   document.getElementById("logindd_fade").classList.toggle("fade");
//   document.getElementById("logindd_fade").classList.toggle("show");
// }

// document.getElementById("navbarDropdown").addEventListener("click", loginFade);
let navOnewaytab = document.getElementById("nav-oneway-tab");
let navRoundtriptab = document.getElementById("nav-roundtrip-tab");
let navMulticitytab = document.getElementById("nav-multicity-tab");
let tab_to_return = document.querySelector(".tab_to_return");
let datepicker_input = document.getElementById("returndate");
let returndate = document.querySelector(".returndate");
let returnday = document.querySelector(".returnday");
let navOneway = document.getElementById("nav-oneway");
let navMulticity = document.getElementById("nav-multicity");

tab_to_return.addEventListener("click", () => {
  navOnewaytab.classList.remove("active");
  navRoundtriptab.classList.add("active");
  tab_to_return.classList.add("d-none");
  returndate.classList.remove("d-none");
  returnday.classList.remove("d-none");
  datepicker_input.classList.remove("d-none");
});

navRoundtriptab.addEventListener("click", () => {
  navOnewaytab.classList.remove("active");
  navRoundtriptab.classList.add("active");
  navMulticitytab.classList.remove("active");
  tab_to_return.classList.add("d-none");
  returndate.classList.remove("d-none");
  returnday.classList.remove("d-none");
  datepicker_input.classList.remove("d-none");
  navOneway.classList.add("show");
  navOneway.classList.add("active");
  navMulticity.classList.remove("show");
  navMulticity.classList.remove("active");
});

navOnewaytab.addEventListener("click", () => {
  navOnewaytab.classList.add("active");
  navRoundtriptab.classList.remove("active");
  tab_to_return.classList.remove("d-none");
  returndate.classList.add("d-none");
  returnday.classList.add("d-none");
  datepicker_input.classList.add("d-none");
});

navMulticitytab.addEventListener("click", () => {
  navOneway.classList.remove("show");
  navOneway.classList.remove("active");
});
document.querySelector(".city_btn").addEventListener("click", () => {
  document
    .querySelector(".fa-solid.fa-circle-xmark.fa-beat")
    .classList.remove("d-none");
});

// var dclone = null;
// dclone = $(".template").clone();
// $("#add_room").click(function (e) {
//     e.preventDefault();
//   var _elm = dclone.clone();
//   _elm.css("display", "block")
//   _elm.find(".remove_btn").show();
//   _elm.appendTo("#clonehere");

//   $(document).on("click", ".remove_btn", function (e) {

//     var $e = $(e.currentTarget);

//     $e.closest(".template").remove();
//   });
// });

/*=====================
     6. Quantity js
     ==========================*/

$(".number-spinner-flight").click(function (e) {
  var that = this;
  e.preventDefault();
  var fieldName = $(that).attr("data-field");
  var type = $(that).attr("data-type");
  var input = $(that)
    .closest(".input-group")
    .find("input[name='" + fieldName + "']");
  var currentVal = parseInt(input.val());
  /* Fields Count*/
  var passenger_dropdown = $(that).closest(".passenger-dropdown");
  var adult = passenger_dropdown.find("input[name='adult_count']").val();
  var child = passenger_dropdown.find("input[name='child_count']").val();
  var infant = passenger_dropdown.find("input[name='infant_count']").val();
  var total = parseInt(adult) + parseInt(child) + parseInt(infant);
  if (!isNaN(currentVal)) {
    if (type == "minus") {
      var minValue = parseInt(input.attr("min"));
      minValue = !minValue ? 0 : minValue;
      if (currentVal > minValue) {
        input.val(currentVal - 1).change();
      }
      // if (parseInt(input.val()) == minValue) {
      //     $(that).attr('disabled', true);
      // }
    } else if (type == "plus") {
      var maxValue = parseInt(input.attr("max"));
      maxValue = !maxValue ? 999 : maxValue;
      if (currentVal < maxValue && total < 9) {
        input.val(currentVal + 1).change();
      }
      if (parseInt(input.val()) == maxValue) {
        $(that).attr("disabled", true);
      }
    }
  } else {
    input.val(0);
  }
});
$(".spinner-value-flight").on("change paste keyup", function () {
  var minValue = parseInt($(this).attr("min"));
  var maxValue = parseInt($(this).attr("max"));
  minValue = !minValue ? 0 : minValue;
  maxValue = !maxValue ? 999 : maxValue;

  var valueCurrent = parseInt($(this).val());
  var parent = $(this).closest(".traveller_count_fx");
  var name = $(this).attr("name");
  // if (valueCurrent >= minValue) {
  //     parent.find(".number-spinner-flight[data-type='minus'][data-field='" + name + "']").removeAttr('disabled');
  // } else {
  //     $(this).val($(this).data('oldValue'));
  // }
  // if (valueCurrent <= maxValue) {
  //     parent.find(".number-spinner-flight[data-type='plus'][data-field='" + name + "']").removeAttr('disabled');
  // } else {
  //     alert('Sorry, the maximum value was reached');
  //     $(this).val($(this).data('oldValue'));
  // }

  var passenger_dropdown = $(this).closest(".passenger-dropdown");
  var adult = passenger_dropdown.find("input[name='adult_count']").val();
  var child = passenger_dropdown.find("input[name='child_count']").val();
  var infant = passenger_dropdown.find("input[name='infant_count']").val();
  var total = parseInt(adult) + parseInt(child) + parseInt(infant);
  if (infant > adult) {
    infant = adult;
    total = parseInt(adult) + parseInt(child) + parseInt(infant);
    passenger_dropdown.find("input[name='infant_count']").val(infant).change();
  }

  $(".passenger-count").text(total);
});

let radioflight = document.querySelectorAll(".radio_animated");
let arr = [...radioflight];

arr.forEach((e) => {
  e.addEventListener("change", (e) => {
    let inval = e.currentTarget.value;
    let radionclass = document.querySelectorAll(".flight_cls");
    [...radionclass].forEach((e) => {
      e.innerText = inval;
      console.log("s", e);
    });
  });
  // if (checkedradio === true) {
  // let radionclass= document.getElementsByClassName('flight_cls');
  // radionclass.innerHTML=

  // }
});
// why book with us read more
function Readmore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readmoreBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// why travel app
function openAbout(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("about_link_content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("about_link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

let fdbk_star_lbl = document.querySelectorAll(".fdbk_star_lbl");


fdbk_star_lbl.forEach((e,index) => {
  console.log(e,index.valueOf(0), "test");
  
});

// user_frnd_star.addEventListener("click", () => {});
