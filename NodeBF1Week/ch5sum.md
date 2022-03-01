# ch5. Node.js 내장 모듈과 객체

## 1. Console 클래스

- 파일 로그, 에러 로그 등으로 사용된다.
- 전역 객체인 console 이 있다.

---

## 2. Timers

- 타이머 모듈의 모든 함수는 전역이라, 바로 사용할 수 있다.
- timer.js
- **setTimeout(콜백,밀리초)**
  - 밀리초 후에 콜백이 실행되지만, 정확히 실행되지는 않는다.
- **setInterval(콜백, 밀리초)**
  - 밀리초마다 콜백이 실행된다. 변수명으로 취소가능
- **setImmediate(콜백)**
  - '현재 이벤트 루프 주기 끝에 코드를 실행한다.', 해당함수 호출 뒤에 오는 모든 코드가 먼저 실행된 후 바로 다음에 실행된다. 변수명으로 취소가능.
- **clearInterval(변수)**
  - 변수에 해당하는 타이머를 취소한다.

---

## 3. Process

현재 실행되고 있는 Node.js 프로세스에 대한 정보와 제어를 제공한다.
require / import 로 명시적으로 사용하는게 좋다.

### Process events

> EventEmiiter 의 인스턴스로 다음과 같은 이벤트가 발생할 때마다 리스너를 등록할 수 있다.

- **beforeExit**: Node.js 가 이벤트 루프를 비우고 예약할 추가 작업이 없을 때 발생되는 이벤트. 일반적으로 예정된 작업이 없는 경우 종료되지만, beforeExit 이벤트에 등록된 리스너가 비동기식 호출을 하여 Node.js 프로세스를 계속할 수 있다.
- **exit**: exit 이벤트는 process.exit()를 호출하거나 Node.js 이벤트 루프가 더 이상 수행할 추가 작업이 없을 때 발생한다. 이 시점에서 이벤트 루프가 종료되는 것을 막을 수는 없으며, exit 이벤트에 등록된 리스너가 실행을 마치면 프로세스는 종료된다.
- **disconnect**: Node.js 프로세스가 IPC채널(클러스터로 자식 프로세스를 생성했을 때)로 생성된 경우 IPC채녈이 닫힐 때 disconnect이벤트가 발생한다.
- **message**: message 이벤트는 Node.js 프로세스가 IPC채널로 생성된 경우 chileprocess.send()를 사용해서 상위 프로세스가 보낸 메시지를 **하위 프로세스에서 수신할 때마다** 발생한다.

> 이외에도 multipleResolve, rejectHandled, uncaughtException, uncaughtExceptionMonitor, unhandledRejection, warning 등의 이벤트가 있다. (process.js)

**process.nextTick**

> Node.js 의 이벤트 루프는 다른 콜백 함수보다 nextTick에 인수로 전달한 콜백함수를 우선적으로 처리한다.(process2.js)
