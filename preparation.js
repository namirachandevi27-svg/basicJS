// const barang = [
//     { 
//         kode: "kb-001",
//         nama: "keyboard mechanical",
//         harga: 450000
//     },
//     {
//         kode: "ms-002",
//         nama: "mouse gaming",
//         harga: 250000
//     },
//     {
//         kode: "hs-003",
//         nama: "headset",
//         harga: 350000
//     }
// ];

// // const jumlahBeli = 7;
// // if (jumlahBeli >= 5) {
// //     const hargaDiskon = barang[1].harga * 0.1 * jumlahBeli;
// // //     console.log("Total bayar : " + hargaDiskon);
// // } else {
// //     console.log("Total bayar: " + totalHarga);
// // };

// const daftarSiswa = [
//      {
//       nama: "Andi",
//       kelas: "XI SIJA",
//       nilai: 85,
//       kehadiran: 90
//     },
//     {
//         nama: "Budi",
//         kelas: "XI SIJA",
//         nilai: 65,
//         kehadiran: 85
//     },
//     {   nama: "Citra",
//         kelas: "XI SIJA",
//         nilai: 92,
//         kehadiran: 95
    
//     },
//     { 
//         nama: "Tsuraya",
//         kelas: "XI SIJA",
//         nilai: 87,
//         kehadiran: 90

//     }
// ]
// for (let  n = 0; n < daftarSiswa.length; n++) {
//     if (daftarSiswa[n].nilai >= 75 && daftarSiswa[n].kehadiran >= 80) {
//         console.log(daftarSiswa[n].nama + "  lulus");
//     } else {
//         console.log(daftarSiswa[n].nama + " tidak lulus");
//     }
// };

const barangToko = [
     { 
        nama: "Keyboard",
        stock: 10
     },
     {
        nama: "Mouse",
        stock: 5
     },
     { 
        nama: "Headset",
        stock: 0
     },

     { 
        nama: "Webcam",
        stock: 7
     },
     {
        nama: "USB Hub",
        stock: 2
     }
];

// for (let i = 0; i < barangToko.length; i++) {

//     if (barangToko[i].stock === 0) {
//         console.log(` ${barangToko[i].nama} - stok habis`);
//     }
//     else if (barangToko[i].stock <= 5) {
//         console.log(` ${barangToko[i].nama} - stok sedikit`);
//     }
//     else {
//         console.log(` ${barangToko[i].nama} - stok tersedia`);
//     }

// }
for (let i = 0; i <= 10; i++) 
    console.log(i);