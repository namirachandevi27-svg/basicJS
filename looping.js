// console.log("Nama saya Mera");
// console.log("Nama saya Mera");
// console.log("Nama saya Mera");
// console.log("Nama saya Mera");
// console.log("Nama saya Mera");

// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }

// for (let i = 11; i <= 20; i += 2) {
//         console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//         console.log(i + " x " + 1 + " = " + (1*i));
// }

// let total = 0;

// for (let i = 10; i <= 20; i+=2) {
//     total = total +i;
//     console.log(`i=${i} -> total =${total}`);
// }
// console.log(total);

// let nama = ["Mera", "Gendhus", "Sean", "KJ", "Firmus", "Chece", "ilarayaraya", "Ben", "Jidah", "Gracia"];
// for ( let i = 0; i < nama.length; i++) {
//     console.log(i + 1 + "." + nama[i]);
// }

// let nilai = 70;
// for (let i = 0; i < nilai; i++) {
//     if (nilai >= 90) {
//         console.log("nilainya ", nilai + " = Sangat Bagus");
//     } 
//     else if (nilai >= 80) {
//         console.log("nilainya " + nilai + " = bagus");
//     } 
//     else {
//         console.log("nilainya " + nilai + " = cukup");
//     }
// }


// let nama = ["Andi", "Budi", "Citra", "Doni", "Eka"];
// let nilai = [85, 60, 90, 72, 45];
// for (let i = 0; i < nama.length; i++) {
//     if (nilai[i] >= 85) {
//         console.log(nama[i] + " - " + nilai[i] + " - lulus");
//     } else {
//         console.log(nama[i] + " - " + nilai[i] + " - tidak lulus");
//     }
// }

let angka = [12, 7, 20, 15, 8, 3, 14, 9];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] % 2 === 0 && angka[i] >= 10)
    {
        console.log(angka[i] + " - genap - <= 10");
    } else {
        console.log(angka[i] + " - ganjil - >= 10");
    }

}