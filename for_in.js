
//Pengertian Struktur Perulangan FOR IN

//Perulangan FOR IN adakah perulangan khusus di dalam JavaScript yang digunakan untuk menampilkan ‘isi’ dari sebuah objek. Objek yang digunakan dapat berupa Array, karena array pada dasarnya juga merupakan objek di dalam JavaScript.

//Perulangan FOR IN mirip dengan perulangan FOR EACH di dalam PHP. Berikut adalah penulisan dasar perulangan FOR IN dalam JavaScript:

for (variable in objek ) 
{
  // code program
}

//Perulangan di dalam FOR IN akan dijalankan sebanyak ‘isi’ dari objek. Jika objek tersebut adalah Array, maka perulangan akan dilakukan sebanyak data yang ada di dalam Array.


//Cara Penulisan Struktur Perulangan FOR IN


// example I -> 

  
function panggilNumber  () {
  var number = {
    angka : [5,4,3,2,1],
    angka2 : "1233445"

  }

// for (var x in number)  
for(number2 in number)
console.log(number[x])
}
panggilNumber()

// Hasil Output apabila menggunakan kondisi ->  for(number2 in number)
                                              // console.log(number[number2])
/* 

{ angka: [ 5, 4, 3, 2, 1 ], angka2: '1233445' }
{ angka: [ 5, 4, 3, 2, 1 ], angka2: '1233445' }

*/


// Hasil Output apabila menggunakan kondisi -> for(var x in number )
//                                              console.log(number[x])
/*
[ 5, 4, 3, 2, 1 ]
1233445

*/

// Hasil Output apabila menggunakan kondisi -> for(var number2 in number )
//                                              console.log(number[number2])
/*
[ 5, 4, 3, 2, 1 ]
1233445


*/





// Example II -> 


function panggildataObject () {
  var mahasiswa = {
    nama : "Herdiyan Adam Putra",
    semester : 8,
    jurusan : "Teknik Informatika",


  }
    for(var nama in mahasiswa) {
      console.log(mahasiswa[nama])
    }
}

panggildataObject()

/* 
Herdiyan Adam Putra
8
Teknik Informatika

*/