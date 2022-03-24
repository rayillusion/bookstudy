// 첫번째 = text 필드에 이벤트를 걸어 체크함

// <input type="text" onkeydown="checkInt(event);" onkeyup="checkKr(event);" />
// <input type="text" onkeydown="checkFloat(event);" onkeyup="checkFloatKr(event);" />
/**
 * 사용자의 입력을 감지, 0~9, 백스페이스, delete 키, 좌우 방향키만 통과시킨다.
 * @param {event} e
 * @returns
 */
function checkInt(e) {
  if (
    !(
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      e.keyCode == 8 ||
      e.keyCode == 46 ||
      e.keyCode == 37 ||
      e.keyCode == 39
    )
  ) {
    e.preventDefault();
  }
}

/**
 * 한글이 입력되면 삭제한다.
 * @param {event} e
 * @returns
 */
function checkKr(e) {
  e.target.value = e.target.value.replace(/[^0-9]/gi, "");
}

/**
 * 위의 CheckInt 에, 소수점을 추가로 받을 수 있음.
 * @param {event} e
 * @returns
 */
function checkFloat(e) {
  if (
    !(
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      e.keyCode == 190 ||
      e.keyCode == 8 ||
      e.keyCode == 46 ||
      e.keyCode == 37 ||
      e.keyCode == 39
    )
  ) {
    e.preventDefault();
  }
}

/**
 * 한글이 입력되면 삭제한다.
 * @param {event} e
 * @returns
 */
function checkFloatKr(e) {
  e.target.value = e.target.value.replace(/[^0-9]\./gi, "");
}

// 두번째 = 이벤트를 동적으로 추가하여 체크함
// <input type="text" id="num1" />
// <input type="text" id="num2" />
/**
 * @param {String} eleId - input 요소의 아이디
 * @param {String} type - int 면 정수형, float 면 소수점 포함.
 */
function setField(eleId, type) {
  if (type == "int") {
    document.getElementById(eleId).addEventListener("keydown", checkInt);
    document.getElementById(eleId).addEventListener("keyup", checkKr);
  } else if (type == "float") {
    document.getElementById(eleId).addEventListener("keydown", checkFloat);
    document.getElementById(eleId).addEventListener("keyup", checkFloatKr);
  }
}

setField("num1", "int");
setField("num2", "float");
