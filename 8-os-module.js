// built-in node module - os modul
const os = require("os");

// info tentang user sekarang
const user = os.userInfo();
// console.log(user);

// metode untuk menampilkan uptime sistem dalam detik
// console.log(`System Uptime adalah ${os.uptime()} detik`);

// info OS
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
