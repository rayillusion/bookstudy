// on(event, listener) : 이벤트 유형(문자열)에 대해 새로운 리스너(함수)를 등록
// once(event, [arg1], [...]) : 새 이벤트를 생성하고 리스너에게 전달할 추가 인자들을 제공
// removeListener(event, listener) : 지정된 이벤트 유형에 대한 리스너를 제거

// emit() 이 호출될 때 어떤 값이든 전달가능하다.


// 예) 파일 목록에서 특정 패턴이 발견되면 실시간으로 구독자들에게 통지

import { EventEmitter } from 'events'
import { readFile } from 'fs'


function findRegex(files, regex) {
  const emitter = new EventEmitter()
  for(const file of files) {
    readFile(file, 'utf8', (err, content) => {
      if(err) {
        return emitter.emit('error', err);
      }

      emitter.emit('fileread', file, content)
      const match = content.match(regex)
      // console.log(`Req Match: ${match}, ${regex}`)
      if(match) {
        match.forEach(elem => emitter.emit('found', file, elem))
      }
    })
  }
  return emitter
}

findRegex(
  ['data.txt', 'data2.txt'], /\w+\s/g
)
.on('fileread', (file, con) => console.log(`${file} was read : ${con}`))
.on('found', (file, match) => console.log(`Matched ${match} in ${file}`))
.on('error', err => console.log(`Error emitted ${err.message}`))


