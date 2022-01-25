// inisialisasi variabel
// variabel lokal, tidak boleh dishare jika bersifat rahasia
const secret = "SUPER SECRET";
// variabel share, boleh dibagikan ke modul yang lain
const john = "john";
const peter = "peter";

// cara 1 - inisialisasi variabel yang boleh dibagikan
module.exports = { john, peter };

// cara es 6 :
// export default [variabel/fungsi]
