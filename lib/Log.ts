export default class Log {
  static TYPE_ERROR = 'error';
  static TYPE_DEBUG = 'debug';
  static TYPE_WARN = 'warn';
  static TYPE_INFO = 'info';

  line: string = '';
  data: any;
  type: string;
  date: Date;

  constructor(line: string) {
    this.line = line;

    const match = /(.+) - (.+) -(.+)/gm.exec(line);

    if (match) {
      this.date = new Date(match[1]);
      this.type = match[2];
      this.data = JSON.parse(match[3]);
    } else {
      throw Error('Not in expected log format');
    }
  }
}
