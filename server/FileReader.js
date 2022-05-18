const fs = require('fs');

export class FileReader {
  static getUsers() {
    const rawData = fs.readFileSync(`./users.json`);
    return JSON.parse(rawData);
  }
}