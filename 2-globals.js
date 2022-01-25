// CommonJS - setiap file adalah modul (default)
// Modules - pembungkus kode (share data yang diperlukan saja)

// cara 1 : inisialisasi variabel lokal dengan mengambil data dari modul lain
const names = require("./4-names");

// cara 2 : inisialisasi variabel lokal dengan mengambil variabel dari modul lain
// const { john, peter } = require("./4-names");

// inisialisasi fungsi lokal dengan mengambil fungsi dari modul lain
const sayHi = require("./5-utils");

const data = require("./6-alternative-flavor");
// console.log(data);

// langsung menjalankan fungsi
require("./7-mind-grenade");

// menjalankan fungsi sayHi dengan mengisi langsung variabel nama
// sayHi("susan");

// cara 1 -menjalankan fungsi sayHi menggunakan variabel names
// sayHi(names.john);
// sayHi(names.peter);

// cara 2 -menjalankan fungsi sayHi menggunakan variabel langsung
// sayHi(john);
// sayHi(peter);
