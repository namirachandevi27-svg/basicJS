const siswa = {
    nama : "Reihan",
    umur : 17,
    kelas : 7,
    hobby : "catur"
};
// delete siswa.kelas;
// console.log(siswa);

const {nama: namaSiswa, umur: umurSiswa, kelas: kelasSiswa, jurusan = "belum ditentukan"} = siswa;
// console.log("nama",namaSiswa);
// // console.log("umur",umurSiswa);
// // console.log("kelas",kelasSiswa);
// // console.log("jurusan",jurusan);

// const warna = ["kuning", "biru", "hijau"];

// const [warna1, warna2, warna3] = warna;
// // console.log(warna1);

const merkLaptop = [ "Asus", "Acer", "Lenovo", "Macbook", "HP" ];
const { merk1, merk2, merk3, merk4, merk5 } = merkLaptop;
// console.log(merkLaptop);

const siswaBaru = [
    {nama: "Adli",nilai: 90, umur: 16, kelas: 10},
    {nama: "Budi",nilai: 65, umur: 15, kelas: 9},   
    {nama: "Citra",nilai: 90, umur: 16, kelas: 11},
    {nama: "Dina",nilai: 70, umur: 17, kelas: 10},
    {nama: "Eko",nilai: 85, umur: 18, kelas: 12}
]

// const daftarNama = siswaBaru.map(({ nama, nilai }) => nama, nilai);
    //return (nama, nilai) ;
// console.log(daftarNama);
//ini yang pake destructuing

// const namaSaja = siswaBaru.map((siswa) => siswa.nama);
// console.log(namaSaja); 
// const nilaiSaja = siswaBaru.map((siswa) => siswa.nilai);
// console.log(nilaiSaja);
// ini GAK PAKE DESTRUCTURING

const daftarHarga = [
    {nama: "Asus", harga: 14000000, kondisi: "baru"},
    {nama: "Lenovo", harga: 16000000, kondisi: "bekas"},
    {nama: "Acer", harga: 22000000, kondisi: "baru"},
];

const daftarHargaBaru = daftarHarga.map(({ nama, harga }) => {
    return { nama, harga };
});
console.log(daftarHargaBaru);

