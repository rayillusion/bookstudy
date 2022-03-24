# Ch3. 서버 프로그램을 위한 자바스크립트

**sort()**

- 기본은 요소를 문자열로 인식, 오름차순으로 정리한다.
- 숫자형이나 Object 형의 배열을 정렬할 땐, 콜백을 쓴다.
- 인수2개. 리턴 +1/-1/0. 1은 순서를 바꾸고, -1은 순서를 바꾸지 않는다.
- points.sort(function(a, b) { return a-b; }); // 숫자형의 오른차순 정렬

**filter()**

- 조건을 만족하는 요소들로 이뤄진 새로운 배열을 반환한다.
- arr.filter(function(word) { return word.length > 6; });

**map()**

- 배열의 데이터가 오브젝트 형일 때, 새로운 형태의 Object 로 변환해서 배열로 반환한다.

```java
let userList2 = userList.map(function(user)) {
  return {
    fullName: user.lastName + user.firstName;
    firstName: user.firstName;
    lastName: user.lastName;
    email: user.email
  }
});
```

**reduce()**

- 배열의 합계등을 구할 때 많이 사용된다.
- 모든 요소를 순회한다.
- 콜백 함수의 매개변수 : 주로 2개만 쓴다.
  > 1. 누적 값
  > 2. 현재 배열의 요소
  > 3. 인덱스 번호
  > 4. arr(배열)

```java
let points = [40, 100, 1, 5, 25, 10];
let sum = points.reduce(function(total, currentValue) {
  return total + currentValue;
}, 0);
```

### Template Literal

```java
function hello(name) {
  let name2 = "John";
  console.log('Hello ${name2}. Welcoome! ${name}');
}
```

### Spread Operator

- 배열, 문자열과 같은 iteration 형태의 데이터를 요소 하나하나로 분해한다.
- ...variable. 을 사용한다.

```java
  let cd = "CD";
  let alphabet - ['A', 'B', ...cd]; // 'A', 'B', 'C', 'D'
```

### Object Destucturing

- Object 에 저장된 데이터 중 일부를 캡쳐할 수 있다.

```java
var {firstName, lastName} = getPerson(); // getPerson() 이 리턴하는 Object 의 fistName, lastName 키의 값을 받는다.
function distplayFullName({fistName, lastName}) {
  console.log('${fistName} ${lastName}');
}

distplayFullName(getPersion());
```

### Array Destructuring

```java
let [x, y, z] = getScores();  // getScores 가 반환하는 배열의 요소를 순서대로 x, y, z 에 저장한다.

let [x, y, ...args] = getScores(); // 나머지는 args 에 배열로 얻어온다.

function getProfile() {
  return [
    'John',
    'Doe',
    ['Red', 'Green', 'Blue']
  ];
}

let [
  firstName,
  lastName,
  [
    color1,
    color2,
    color3
  ]
] = getProfile();
```

### Rest Parameter

```java
function sum(...arg) {
  ...
  for(let x of arg) {
    ...
  }
}
```

### Promise / Async / Await

**Promise**

- 비동기 처리를 위한 객체로, 완료시 then() 햠수를 통해 결과에 대한 코드를 실행할 수 있다.
- new 생성자를 통해 생성한다.

**Async**

- 비동기 함수를 작성할 때 function 앞에 붙인다.

**Await**

- Async 함수가 바로 비동기로 동작하는 게 아니고, 코드에서 호출시에 await 를 써야 비동기도 동작한다.

## Class

**constructor()**

- 모든 class 는 반드시 이 함수를 가져야 한다.
- 이 함수 내에서 데이터 멤버의 선언 및 초기화가 이뤄진다.
- 데이터 멤버의 선언 및 접근은 this 를 이용한다. ex) this.modelName = modelName;

**상속**

- extends 키워드 : child **extends** parent
- 자식 클래스의 contructor() 함수에서 super(...) 로 부모 클래스의 contructor()를 호출할 수 있다.

```java
class ElectricCar extends Car {
  constructor(modeName, modelYear, price, chargeTime) {
    super(modelName, modelYear, "E", price);
    this.chargeTime = chargeTime; // 자식 클래스의 새 데이터 멤버
  }
}
```

## 정규 표현식(Regular Expression)

- 슬래시(/)로 감싸는 **정규식 리터럴**과 **RegExp** 를 사용할 수 있다.

```java
var regexp = /World/;
var regexp2 = new RegExp("World");
```

- 이 외의 사항은 블로그를 보자. (https://blog.naver.com/ray_illusion/222632947705)
