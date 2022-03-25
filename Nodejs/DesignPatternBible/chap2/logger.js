

// p63
class Logger {
  constructor(name) {
    this.count = 0
    this.name = name
  }

  log(message)  {
    this.count++
    console.log(`[` + this.name + `] ` + message)
  }

}

// export instance
module.exports = new Logger('DEFAULT')


/*
module.exports = (message) => {
  console.log(`info: ${message}`)
}

module.exports.verbose = (message) => {
  console.log(`berbose: ${message}`)
}
*/

/* p62
class Logger {
  constructor(name) {
    this.name = name
  }

  log(message)  {
    console.log(`[${this.name}] ${message}`)
  }

  info(message)  {
    this.log(`info: ${message}`)
  }
  verbose(message)  {
    this.log(`verbose: ${message}`)
  }
}

module.exports = Logger
*/

