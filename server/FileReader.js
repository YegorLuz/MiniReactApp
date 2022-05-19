const fs = require('fs');

class FileReader {
  static getUsers() {
    const rawData = fs.readFileSync(`./users.json`);
    return JSON.parse(rawData);
  }
}

module.exports = FileReader;