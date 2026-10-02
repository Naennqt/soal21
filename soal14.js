const prompt=require('prompt-sync')({sigint:true})
let angka = Number (prompt('Masukkan Angka : '))
if (angka > 100)
    console.log(`Nilai Kamu Sempurna!`)
else
    console.log(`Nilai Kamu Kurang :( `)