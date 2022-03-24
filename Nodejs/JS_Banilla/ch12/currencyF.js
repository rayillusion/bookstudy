/**
 * 금액 표시 포맷을 받아, 포맷대로 출력해준다.
 * @param {소수점을 포함한 숫자형} amount
 * @param {문자열} format
 */
function covertCurrencyFormat(amount, format) {
  let currencyUnit = "";
  if (format.substring(0, 1) != "#") {
    currencyUnit = format.substring(0, 1);
  }

  let groupingSeparator = ""; // 3자리마다의 구분자. 기본 = ','
  let maxFractionDigits = 0; // 소수점 이하 자릿수. 기본 = 0
  let decimalSeparator = ""; // 소수점 구분자. 기본 = '.'

  if (format.indexOf(".") == -1) {
    groupingSeparator = ","; // . 이 없다면, 소수점 이하 없고, , 를 쓴다.
  } else if (format.indexOf(",") == -1) {
    groupingSeparator = ".";
  } else if (format.indexOf(",") < format.indexOf(".")) {
    // 소수점 이하 자리수를 센다
    groupingSeparator = ",";
    decimalSeparator = ".";
    maxFractionDigits = format.length - format.indexOf(".") - 1;
  } else {
    // 소수점 이하 자리수를 센다
    groupingSeparator = ".";
    decimalSeparator = ",";
    maxFractionDigits = format.length - format.indexOf(",") - 1;
  }

  // 음수 고려 : dec는 maxFractionDigits 에 따라, 10, 100, 1000 이 된다.
  let sign = "";
  let dec = 1;
  for (var i = 0; i < maxFractionDigits; ++i) {
    dec = dec * 10;
  }

  let v = String(Math.round(parseFloat(amount) * dec) / dec);

  if (v.startsWith("-")) {
    sign = "-";
    v = v.substring(1);
  }

  // 0으로 채움
  if (maxFractionDigits > 0 && formst.substring(format.length - 1) == "0") {
    v = String(parseFloat(v).toFixed(maxFractionDigits));
  }

  // 소수점 이하 값을 저장하는 변수
  let d = "";
  if (maxFractionDigits > 0 && v.indexOf(".") > -1) {
    d = v.substring(v.indexOf(".")); // 소수점 아래(. 포함)
    d = d.replace(".", decimalSeparator);
    v = v.substring(0, v.indexOf(".")); // 정수부분
  }

  let r = /(\d+)(\d{3})/; // 숫자가 하나 이상, 숫자 3자리.
  while (r.test(v)) {
    // v가 처음에, 3409585 라면,
    // 첫 테스트에서, $1 = 3409, $2 = 585 가 된다.
    v = v.replace(r, "$1" + groupingSeparator + "$2");
  }

  return sign + currencyUnit + String(v) + String(d);
}
