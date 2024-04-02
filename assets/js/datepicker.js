$(function () {
  const onldDate = new Date();
  const options = { weekday: "long", year: "2-digit", month: "short" };
  const currentday = onldDate.getDate();

  var cudateGroup = $(".datepicker").siblings(".datetime");
  var cudayname = $(".dayname");

  var cusplt = onldDate.toLocaleDateString("en-US", options).split(" ");

  cudateGroup.children(".monfn").text(cusplt[0]);
  cudateGroup.children(".yrfn").text(cusplt[1]);
  cudayname.text(cusplt[2]);
  cudateGroup.children(".dayfn").text(currentday);

  $(".datepicker").datepicker({
    dateFormat: "yy/mm/dd",
    minDate: 0,

    onSelect: function (dateText, inst) {
      var date = new Date(dateText);
      var newDate = date.toString("en-us", { weekday: "long" });
      var resDate = newDate.split(" ");

      const fullDayName = date.toLocaleString("en-US", options);
      const splt = fullDayName.split(" ");
      var syear = splt[1];
      var datenm = splt[2];

      var smonth = resDate[1];
      var sday = resDate[2];

      var sdategroup = $(this).siblings(".datetime");
      var sdatename = $(this).siblings(".dayname");
      sdategroup.children(".monfn").text(smonth);
      sdatename.text(datenm);
      sdategroup.children(".dayfn").text(sday);
      sdategroup.children(".yrfn").text(syear);

      var selReturn = $("#returndate");

      var sdategroup = selReturn.siblings(".datetime");
      var sdatename = selReturn.siblings(".dayname");
      sdategroup.children(".monfn").text(smonth);
      sdatename.text(datenm);
      sdategroup.children(".dayfn").text(sday);
      sdategroup.children(".yrfn").text(syear);

      startDate = $(this).datepicker("getDate");
      $(".returndatepicker").datepicker("option", "minDate", startDate);
    },
  });

  // Get the next date
  var nextDate = new Date(onldDate);
  nextDate.setDate(onldDate.getDate() + 1);

  let nxtday = onldDate.getDate() + 1;
  var nxdateGroup = $(".returndatepicker").siblings(".datetime");
  var nxdayname = $(".returndayname");

  var nxsplt = nextDate.toLocaleString("en-US", options).split(" ");

  nxdateGroup.children(".monfn").text(nxsplt[0]);
  nxdateGroup.children(".yrfn").text(nxsplt[1]);
  nxdayname.text(nxsplt[2]);

  nxdateGroup.children(".dayfn").text(nxtday);

  $(".returndatepicker").datepicker({
    dateFormat: "yy/mm/dd",
    minDate: 0,
    onSelect: function (dateText2, inst2) {
      var edate = new Date(dateText2);
      var enewDate = edate.toString("en-us", { weekday: "long" });
      var eresDate = enewDate.split(" ");

      const efullDayName = edate.toLocaleString("en-US", options);
      const esplt = efullDayName.split(" ");
      var eyear = esplt[1];
      var edatenm = esplt[2];
      var emonth = eresDate[1];
      var eday = eresDate[2];

      var edategroup = $(this).siblings(".datetime");
      var edatename = $(this).siblings(".returndayname");
      console.log(edatename);

      edategroup.children(".monfn").text(emonth);
      edatename.text(edatenm);
      edategroup.children(".dayfn").text(eday);
      edategroup.children(".yrfn").text(eyear);
    },
  });
});
