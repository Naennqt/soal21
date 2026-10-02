const prompt = require ('prompt-sync')({sigint:true})
let x = Number(prompt('Nilai X : '))
let y = Number(prompt('Nilai Y : '))
let z = Number(prompt('Nilai Z : '))

let b = Math.max(x,y,z)
let k = Math.min(x,y,z)
console.log(`
Nilai Terbesar     : ${b} 
Nilai Terkecil     : ${k} `)