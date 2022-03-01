const defaultNum = 1;

function add(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// 현재 모듈(calculator 가 export 하는 변수 및 함수 지정)
module.exports = {
  defaultNum,
  add,
  minus,
  mul,
  divide,
};
