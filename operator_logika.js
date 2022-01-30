/*
Opeartor Logika pada Javascript
Operator logika digunakan untuk melakukan operasi terhadap dua nilai boolean.

Operator ini terdiri dari:

Nama Operator	Simbol
Logika AND	&&
Logika OR	||
Negasi/kebalikan	!

*/

var nilai = 10;

console.log(nilai>10 && nilai<20) // Logika AND
console.log(nilai>10 || nilai<20 ) // Logika OR
console.log(!true) // Negasi atau kebalikan 

//------------------------------------------------------------------------------------------------->

var value = 20;

console.log(value<20 && value>20)
console.log(value<20 || value<20)
console.log(!false)

//----------------------------------------------------------------------------------------------->

// example -> 
        var aku = 20;
        var kamu = 19;

        var benar = aku > kamu;
        var salah = aku < kamu;

        // operator && (and)
        var hasil = benar && salah;
        console.log(`${benar} && ${salah} = ${hasil}`); //true && false = false

        
        // operator || (or)
        var hasil = benar || salah;
        console.log(`${benar} || ${salah} = ${hasil}`); //true || false = true

        
        // operator ! (not)
        var hasil = !benar
        console.log(`!${benar} = ${hasil}`); //!true = false

