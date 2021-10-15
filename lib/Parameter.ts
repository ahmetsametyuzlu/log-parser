import * as yargs from 'yargs';

export default class Parameter {
  type: string;
  value: string;

  constructor(type: string, def?: string) {
    const argv: any = yargs.argv;
    this.type = type;
    this.value = argv[this.type] ? argv[this.type] : def;
  }
}
