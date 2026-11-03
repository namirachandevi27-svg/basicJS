// const nilai = [80, 75, 90, 85, 70, 60, 67, 95,78,88];
// nilai.forEach((angka) => {
//     // console.log(angka);
// });

// nilai.forEach((angka) => {
//     if (angka >= 75){
//             console.log(angka + "- lulus")
//     }else {
//             console.log (angka + "- Remedial" )
//     }
// });

// const baru = ["harry", "potter", "Malfoy", "Wizard", "David",
//     "Lucy", "maine", "Dorio", "Kiwi", "Rebecca"];
// baru.forEach((name) => {
//     // console.log("Halo, " + name);  
// });

// const siswa = [
//     { nama: "mirmut", alamat: "Jl. Mawar 16", kelas: "X.2 ICT", umur: 16 },
//     { nama: "ALine", alamat: "Jl. Tulip 12", kelas: "X.2 ICT", umur: 15 },
//     { nama: "Chece", alamat: "Jl. Melati 09", kelas: "X.2 ICT", umur: 14 }
// ];

// const namaSaja = siswa.map((namaDoang) => namaDoang.nama);
// const umurSaja = siswa.map((umurDoang) => umurDoang.umur * 2);
// console.log(namaSaja);
// console.log(umurSaja);

// const nilaiBaru = [80, 65, 90, 70, 85, 80, 60, 45, 35, 78]
// const nilaiLulus = nilaiBaru.filter((angka) => {
//         return angka <= 75;
// });
// console.log(nilaiLulus);

 const arrayAngka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
 const angkaGenapBaru = arrayAngka.filter((jumlah) => {
        return jumlah % 2 === 0
 });
//  console.log(angkaGenapBaru)

 const angkaGanjil = arrayAngka.filter((jumlah) => {
    return jumlah % 2 !== 0
});
// console.log(angkaGanjil)

    const warTiket = [
        {nama : "Konser", jumlah : 300, dipesan : 200},
        {nama : "Seminar", jumlah : 100, dipesan : 90},
        {nama : "Workshop", jumlah : 80, dipesan : 80}
    ];

    const sisaTicket = warTiket.filter((ticket) =>{
       ticket.sisa = ticket.jumlah - ticket.dipesan;
        return ticket.sisa
    });
     const sisaTicket2 = warTiket.find((ticket) =>{ 
        ticket.sisa = ticket.jumlah - ticket.dipesan;
        return ticket.sisa && ticket.nama!== "Konser"&& ticket.sisa!== 0;
    });
    // console.log(sisaTicket)
    // console.log(sisaTicket2)
    

    const siswa = [
        { nama: "Andi", nilai: 80 },
        { nama: "Budi", nilai: 65 },
        { nama: "Citra", nilai: 90 },
        { nama: "Dina", nilai: 75 },
        { nama: "Eka", nilai: 85 }
    ];
     siswa.forEach((siswa) => {
         if (siswa.nilai >= 75) {
        console.log(siswa.nama + " - " + siswa.nilai + " - Lulus");
        } else {
        console.log(siswa.nama + " - " + siswa.nilai + " - Remidial");
        }
    });