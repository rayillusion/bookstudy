import { readFile } from 'fs'

const cache = new Map()

function inconsistentRead(filename, cb) {
  if(cache.has(filename)) {
    cb(cache.get(filename))
  } else {
    // async
    readFile(filename, 'utf8', (err, data) => {
      cache.set(filename, data)
      cb(data)
    })
  }
}

function consistentRead(filename, cb) {
  if(cache.has(filename)) {
    process.nextTick(() => cb(cache.get(filename)))
  } else {
    // async
    readFile(filename, 'utf8', (err, data) => {
      cache.set(filename, data)
      cb(data)
    })
  }
}

function createFileReader(filename) {
  const listeners = []
  consistentRead(filename, value => {
    console.log('call cb')
    listeners.forEach(listener => listener(value))
  })

  return {
    onDataReady: listener => { console.log('push listener'); listeners.push(listener) }
  }
}


const reader1 = createFileReader('data.txt')
reader1.onDataReady(data => {
  console.log(`First call data: ${data}`)

  const reader2 = createFileReader('data.txt')
  reader2.onDataReady(data => {
    console.log(`Second call data: ${data}`)
  })
})


/* p94
function addCps(a, b, callback) {
  setTimeout(() => callback(a + b), 100);
}

console.log('before')
addCps(1, 2, result => console.log(`Result: ${result}`))
console.log('after')
*/