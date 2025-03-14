import { close, constants, open, read, unlink, writeFile } from 'node:fs';
import path from 'node:path';

const fileName = 'thefile.txt';
const filePath = path.join(import.meta.dirname, fileName);

writeFile(filePath, 'hoge', (err) => {
  if (err) throw err;

  open(filePath, 'w', constants.O_WRONLY, (err, fd) => {
    if (err) throw err;

    read(fd, (err) => {
      if (err)
        console.log(
          'openしたファイルが書き込み専用アクセスなのでエラーが発生する',
        );
    });

    console.log(`File ${fileName} opened successfully!`);

    close(fd, (err) => {
      if (err) throw err;
      console.log(`File ${fileName} closed successfully!`);

      unlink(filePath, (err) => {
        if (err) throw err;
        console.log(`File ${fileName} deleted successfully!`);
      });
    });
  });
});
