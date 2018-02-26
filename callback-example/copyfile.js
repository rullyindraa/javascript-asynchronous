const copyFile = require('fs-copy-file');

copyFile('github-tips.txt', 'new-github-tips.txt', (err) => {
  if (err) throw err;
  console.log('github-tips.txt was copied to new-github-tips-txt');
});
