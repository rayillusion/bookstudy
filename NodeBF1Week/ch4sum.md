# Ch4. Node.js 시작하기

### module.exports

- 파일 단위로, 파일 이름을 가진 모듈(함수 및 변수의 집합)을 만들어, 다른 파일에서 사용할 수 있다.
- module.exports 로 지정한 것들은 다른 곳에서 사용할 수 있다.

```java
module.exports = {
  defaultNum,
  add,
  minus,
  mul,
  divide,
};
```

### require

- 모듈을 불러와 사용할 수 있다록 한다.

```java
const { add, minus, defaultNum } = require("./calculator");

console.log(add(7, 2));
...
```

### 실행

- 터미널에서 실행

```java
node module.js
node module
```
