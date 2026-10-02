const prompt=require('prompt-sync')({sigint:true})
let kode = Number(prompt(`Masukkan Kode : `))
if (kode === 78821)
    console.log(`You are authenticated`)
else
    console.log('You have no acces')