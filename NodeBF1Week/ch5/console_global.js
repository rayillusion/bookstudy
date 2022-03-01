console.log("hello world");
console.log("hello %s", "world");

const world = "world";
console.log(`hello ${world}`);

console.error(new Error("에러 메시지 출력"));

const arr = [
  { name: "John Doe", email: "john@mail.com" },
  { name: "Jeremy Go", email: "jeremy@mail.com" },
];
console.table(arr); // 테이블 형태로 배열과 오브젝트 출력

const obj = {
  students: {
    grade1: { class1: {}, class: {} },
    grade2: { class1: {}, class: {} },
    teachers: ["Johm Doe", "Jeremy Go"],
  },
};

console.dir(obj, { depth: 1, colors: true }); // 오브젝트를 출력, 깊이와 색상을 적용.
// arg0 = 객체
// arg1 = 옵션.

console.time("time to for-loop"); // 레이블을 가지 시간 측정기. time - timeEnd 사이의 실행 시간 측정
for (let i = 0; i < 999999; ++i) {}
console.timeEnd("time to for-loop");
