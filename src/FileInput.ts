import Parameter from "../lib/Parameter";
import File from "../lib/File";

export default function fileInput(): File {
  const parameter = 'input';
  const filePath = new Parameter(parameter);

  if (!filePath.value) {
    console.error('No input file specified. ');
    process.exit();
  }

  try {
    return new File(filePath.value);
  } catch (e) {
    console.error('Can\'t find input file');
    process.exit();
  }
}
