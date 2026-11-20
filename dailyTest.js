const siswa = {
    nama: "aNdi",
    kelas: "x ict",
    email: "ANDI@GMAIL.COM"
};

const { nama, kelas, email } = siswa;

// console.log 
// (`Nama: ${nama.toUpperCase()}
// Kelas: ${kelas.toUpperCase()}
// Email: ${email.toLowerCase()}`);


const siswaSaya = [
    {nama: "Andi", email: "andi@gmail.com", umur: 17},
    {nama: "Budi", email: "budi@yahoo.com", umur: 17},
    {nama: "Citra",email:"citra@gmail.com", umur: 17 }
];
  const gmailSiswa = siswaSaya.filter((siswa) => {
  return siswa.email.endsWith("@gmail.com");
});
const hasilAkhir = gmailSiswa.map((siswa) => {
  return {
    nama: siswa.nama,
    email: siswa.email
  };
});
// console.log(hasilAkhir);

