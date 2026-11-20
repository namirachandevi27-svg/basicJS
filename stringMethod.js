const nama = "Elshayas";

// console.log(nama.toUpperCase());
// console.log(nama.toLowerCase());

const username = "AnDI";
const username2 = username.toLowerCase();
// console.log(username2);

const nama2 = " Andi ";

// console.log(nama2);
// console.log(nama2.trim());

const email = "andi@gmail.com";
// console.log(email.includes("@"));

const nama3 = "Andi";
// console.log(nama3.includes("di"));
// console.log(nama3.includes("xyz"));

const email2 = "andi@gmail.com";
// if (email2.includes("@")) {
//     console.log("Email valid");
// }
// else {
//     console.log("Email tidak valid");
// }

const kode = "LT-001";
// if (kode.startsWith("PC")) {
//     console.log("Barangnya komputer");
// }  else {
//     console.log("Barangnya bukan komputer");
// }

const file = "laporan.docx";
// if (file.endsWith(".jpg")) {
//     console.log("File gambar");

// } else if (file.endsWith(".pdf")) {
//     console.log("File PDF");

// } else if (file.endsWith(".docx")) {
//     console.log("File Word");

// } else {
//     console.log("File tidak didefinisikan");
// }


const name = "Andi";
// if (name.indexOf("d") !== -1) {
//     console.log("Huruf 'd' ditemukan");
// } else {
//     console.log("Huruf 'd' tidak ditemukan");
// }

// if (name.indexOf("z") !== -1) {
//     console.log("Huruf 'z' ditemukan");
// } else {
//     console.log("Huruf 'z' tidak ditemukan");
// }

const numby = "2";
// if (numby % 2 === 0) {
// //     console.log("Bilangan genap");
// }   else {
//     console.log("Bilangan ganjil");
// }

const namaBaru2 = "Andi";
// console.log(namaBaru2.slice(0, 2));

const namaBarang = "PC-001";
// console.log(namaBarang.slice(0, 2));

const kalimat = "Saya belajar Java";

const hasil = kalimat.replace(
    "Java", "JavaScript"
);
const hasil2 = hasil.replace(
    "Saya", "Aku"
);
// console.log(hasil2);

const warna = "Merah-Kuning-Hijau";
// console.log(warna.split("-"));

// const warna2 = "Merah, Kuning, Hijau";
// const hasil3 = warna2.split(", ");
// console.log(hasil3);

const namaKelopok = ["Andi", "Budi", "Citra"];
const joinKelompok = namaKelopok.join(" - ");
// console.log(joinKelompok);

const kasus1 = ("Aku suka renang");
const kaskus = kasus1.replace("Asku", "Saya");
const ks = kaskus.replace("renang", "berenang");
const splitceunah = ks.split(" ");
// console.log(splitceunah);

const username3 = "AdMin123";

const hasilusername3 = username3
.trim()
.toLowerCase()

// console.log(hasilusername3);

const emailAndi = "ANDIEMAIL@GMAIL.COM";
const hasilEmailAndi = emailAndi.toLowerCase();
console.log(hasilEmailAndi);