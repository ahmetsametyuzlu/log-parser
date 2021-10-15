import * as yargs from 'yargs';
import * as fs from 'fs';
import * as readline from 'readline';

const argv: any = yargs.argv;

const input: string = argv.input;
if (!argv.input) {
  console.error('No input file specified. ');
  process.exit();
}

let output: string;
if (argv.output) {
  output = argv.output;
} else {
  console.info('No output file specified. Output file is assumed to be out.txt ');
  output = 'out.txt';
}

// Clear file content
fs.writeFileSync(output, '');

const readInterface = readline.createInterface({
  input: fs.createReadStream(input),
  completer: () => {
    return false;
  },
});

readInterface.on('line', async (line) => {

  if (/(.+) - error -(.+)/gm.exec(line)) {
    fs.appendFile(output, line + "\n", 'utf-8', () => {
    });

    console.log(line);
  }
});

