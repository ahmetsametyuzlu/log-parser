import Parameter from "../lib/Parameter";
import File from "../lib/File";

export default function fileInput(): File {
  const parameter = 'output';
  const filePath = new Parameter(parameter);

  if (!filePath.value) {
    console.error('No output file specified. ');
    process.exit();
  }

  const file = new File(filePath.value);
  file.clear();

  return file;
}
