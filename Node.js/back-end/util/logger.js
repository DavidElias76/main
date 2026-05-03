
// in logger.js - it is used when logging and debugging applications
// it prints messages, logs errors and track activity within an application

class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }

  error(error) {
    console.error(`[${this.name}] ERROR:`, error.message);
  }
}

// Exporting a single class
export default Logger;