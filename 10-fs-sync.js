// built-in node module - fs modul
const { readFileSync, writeFileSync, write } = require("fs");

console.log("start");

// mengambil isi data dari file
// parameter kedua UTF8 karena file berekstensi txt
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// console.log(first, second);

// menabhakan file ke dalam folder dengan mengambil isi file dari file lain
// parameter 1 = folder dan nama file tujuan
// parameter 2 = isi file
// parameter 3 = pilihan objek
// pilihan objek -> flag:'a' = menambahkan baris baru pada file (tanpa menghapus isi file)
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
