/* eslint-disable no-console */

const writeLog = (level, ...params) => {
  switch (level) {
    case 'debug': {
      console.log('DEBUG', ...params)
      break
    }
    case 'error': {
      console.error(...params)
      break
    }
    case 'info': {
      console.log('INFO', ...params)
    }
  }
}

// replace this with a real logger if needed
const logger = {
  debug: (...params) => {
    writeLog('debug', ...params)
  },
  error: (...params) => {
    writeLog('error', ...params)
  },
  info: (...params) => {
    writeLog('info', ...params)
  }
}

module.exports = logger
