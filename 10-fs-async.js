const { readFile, writeFile } = require('fs');

// without this 'utf-8' it returns a buffer
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    const newText = `Here is the new result: ${first} & ${second}`
    writeFile('./content/result-sync.txt', newText, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
      console.log("done with this taks");
    })
  })
})
console.log("starting next task");