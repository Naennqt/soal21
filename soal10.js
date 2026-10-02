const prompt=require('prompt-sync')({sigint:true})
let judul = prompt('Masukkan Judul Buku :')
let penerbit = prompt('Masukkan Penerbit :')
let jumlah = prompt('Masukkan jumlah pembelian :')
let tanggal = prompt('Masukkan tanggal pembelian :')
console.log(`
Judul Buku :  ${judul}
Penerbit  : ${penerbit}
Jumlah Buku : ${jumlah}
Tanggal Pembelian : ${tanggal}
`);