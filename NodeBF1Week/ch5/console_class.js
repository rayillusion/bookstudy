const fs = require("fs"); // fs 는 파일시스템 모듈로 읽기, 쓰기 등을 할 수 있는 내장 모듈
const { Console } = require("console"); // console 모듈 사용
const output = fs.createWriteStream("../stdout.log");
const errorOutput = fs.createWriteStream("../stderr.log");

const logger = new Console({ stdout: output, stderr: errorOutput });
const count = 5;
logger.log("count: %d", count);
logger.error("count: " + count);
console.log("count: %d", count);
