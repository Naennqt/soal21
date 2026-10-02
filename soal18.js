const prompt = require('prompt-sync')({ sigint: true })
let bilangan =Number(prompt('Masukkan Bilangan : '))
if (bilangan %7!==0)
    console.log("Anda belum beruntung")
else 
    console.log('Selamat ini adalah kelipatan 7')