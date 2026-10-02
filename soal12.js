const prompt= require('prompt-sync')({sigint:true})
const PHI = 3.14
let r = Number (prompt('Masukkan Jari-jari :'))
let v =  4/3 * PHI * r * r * r
let luasPermukaan = 4 * PHI * r * r
console.log(`Volume : ${v}`)
console.log(`Luas Permukaan : ${luasPermukaan.toFixed(2)}.`)