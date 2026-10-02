const prompt=require('prompt-sync')({sigint:true})
let harga = Number(prompt('Harga Makanan :'))
let pajak = harga * 0.10
let fee = harga * 0.05
let hargaBayar = harga + pajak + fee
console.log(`Pajak : ${pajak}`)
console.log(`Fee : ${fee}`)
console.log(`Harga bayar : ${hargaBayar}`)