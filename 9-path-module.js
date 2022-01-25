// built-in node module - path modul
const path = require("path");

// info pemisah path
console.log(path.sep);

// menampilkan path file
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// menampilkan file utama
const base = path.basename(filePath);
console.log(base);

// menampilkan absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
