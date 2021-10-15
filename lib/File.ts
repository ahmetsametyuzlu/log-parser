import * as fs from 'fs';

export default class File {
  filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  read() {
    return fs.readFileSync(this.filename).toString();
  }

  readLineByLine(callback: (line: string) => void): void {
    const lineReader = require('readline').createInterface({
      input: require('fs').createReadStream(this.filename)
    });

    lineReader.on('line', (line: string) => {
      callback(line);
    });
  }

  clear() {
    return fs.writeFileSync(this.filename, '');
  }

  append(message: string) {
    return fs.appendFileSync(this.filename, message + "\n", 'utf-8');
  }
}
