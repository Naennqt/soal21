const prompt=require('prompt-sync')({sigint:true})
let p = Number(prompt(`Masukkan Panjang :`))
let l = Number(prompt(`Masukkan Lebar :`))
let Luas = p * l
let Keliling = 2 * (p+l)
console.log(`Luas     : ${Luas}`)
console.log(`Keliling : ${Keliling}`)