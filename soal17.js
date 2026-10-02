const prompt = require('prompt-sync')({ sigint: true });
let totalHarga = Number(prompt('Masukkan total harga barang: '))
let diskon = 0
if (totalHarga >= 200000) 
    { diskon = totalHarga * 0.075; }
let totalBayar = totalHarga - diskon

console.log(`Diskon : ${diskon}`)
console.log(`Total yang harus dibayar : ${totalBayar}`)