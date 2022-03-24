/*
import fs from 'fs'
import { mockEnable, mockDisable} from './mock-read-file.js'

mockEnable(Buffer.from('Hello World') )

fs.readFile('fake-path', (err, data) => {
  if(err) {
    console.error(err)
    process.exit(1)
  }

  console.log(data.toString())
})

mockDisable()
*/

// "type": "module",
/*
const logger = require('./logger')

logger('This is an informational message')
logger.verbose('This is an verbose message')
*/

// p63
/*
const Logger = require('./logger')

const dbLogger = new Logger('DB')
dbLogger.info('This is an informational message')

const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')
*/

// p63 ~ 64
const logger = require('./logger')
logger.log('This is an informational message')

const customLogger = new logger.constructor('CUSTOM')
customLogger.log('This is an second informational message')