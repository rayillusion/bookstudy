function getCurrentDate(format) {
  "use strict";
  let d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  month = month.toString().padStart(2, 0);
  let day = d.getDate();
  format = format.replace("YYYY", year);
  format = format.replace("MM", month);
  format = format.replace("DD", day);

  return format;
}

// getCurrentDate("YYYY-MM-DD");
// getCurrentDate("MM.DD,YYYY");

function convertDateFormat(yyymmdd, format) {
  let year = yyymmdd.substr(0, 4);
  let month = yyymmdd.substr(4, 2);
  let day = yyymmdd.substr(6, 2);

  format = format.replace("YYYY", year);
  format = format.replace("MM", month);
  format = format.replace("DD", day);
  return format;
}

// convertDateFormat("20220204". "YYYY.MM.DD");

function getInteervalDate(intervalDay, format) {
  let now = new Date();
  let millisecondsOneDay = 60 * 60 * 24 * 1000;
  // getTime() 이 ms 를 리턴하는군
  let d = new Date(noe.getTime() + millisecondsOneDay * intervalDay);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  month = month.toString().padStart(2, 0);
  let day = d.getDate();

  format = format.replace("YYYY", year);
  format = format.replace("MM", month);
  format = format.replace("DD", day);
  return format;
}

// getInteervalDate(5, "YYYY-MM-DD");
