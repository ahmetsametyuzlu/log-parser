import * as fs from 'fs';
import File from '../File';

test('Append file content', () => {
  const filename = __dirname + '/a.txt';
  const content = 'Content to append';

  const file = new File(filename);
  file.clear();
  file.append(content);

  expect(file.read()).toBe(content + "\n");

  // Clean Test Case
  fs.rmSync(filename);
});
