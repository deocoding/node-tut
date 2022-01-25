// built-in node module - fs modul
const { readFile, writeFile } = require("fs");

console.log("start");

// fungsi callback javascript
// tanpa parameter UTF8 akan menampilkan data buffer
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    // console.log(err);

    // tidak mengembalikan apapun
    return;
  }
  const first = result;

  //   fungsi callback (parameter 3) di dalam fungsi
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      // console.log(err);

      // tidak mengembalikan apapun
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
