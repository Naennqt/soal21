const prompt=require('prompt-sync')({sigint:true})
let rpl1 = Number (prompt('Jumlah Siswa X RPL 1  :'))
let rpl2 = Number (prompt('Jumlah Siswa X RPL 2  :'))
let tjkt1 = Number (prompt('Jumlah Siswa X TJKT 1 :'))
let tjkt2 = Number (prompt('Jumlah Siswa X TJKT 2 :'))
let totalSiswa = rpl1+rpl2+tjkt1+tjkt2
console.log(`Total Siswa : ${totalSiswa}`)