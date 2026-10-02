const prompt = require('prompt-sync')({sigint: true});
let huruf = prompt('Masukkan huruf : ');
if (huruf === 'a' || huruf === 'i' || huruf === 'u' || huruf === 'e' || huruf === 'o') 
   console.log(`${huruf} adalah huruf vokal`);
else if (huruf >= 'a' && huruf <='z')
   console.log(`${huruf} adalah huruf konsonan`);
else
   console.log(`${huruf} bukan berupa huruf`);
