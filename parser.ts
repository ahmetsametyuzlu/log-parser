import Log from "./lib/Log";
import fileInput from './src/FileInput';
import fileOutput from './src/FileOutput';

const fileInp = fileInput();
const fileOut = fileOutput();

// Read Input File
fileInp.readLineByLine((line: string) => {
  const log = new Log(line);
  if (log.type === Log.TYPE_ERROR) {
    fileOut.append(log.line);
  }
});
