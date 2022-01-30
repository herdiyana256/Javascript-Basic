var angka = [3,4,5,6,7,8];
console.log(angka)
//[ 3, 4, 5, 6, 7, 8 ]

console.log(angka[3]);
// 6 => karena index dimulai dari 0 sehingga angka yang di hasilkan adalah : 6 

//========================================================================================================>

/* 
Array adalah tipe data yang berisi kumpulan dari nilai atau tipe data lain. Nilai di dalam array disebut dengan elemen, dan setiap elemen memiliki ‘nomor urut’ yang dikenal dengan istilah index.

Penomoran index di dalam array dimulai dari angka 0, sehingga elemen pertama berada di index 0, elemen kedua berada di index 1, dst. Index maksimum yang bisa ditampung array dalam JavaScript adalah 4.294.967.294 (2^23 – 2), dengan jumlah elemen maksimum adalah 4.294.967.295.

Array di dalam JavaScript tidak bertipe (untyped array). Elemen dari array bisa bertipe data string, number dan boolean dalam sebuah array yang sama, bahkan elemen dari array bisa berupa objek atau array yang lain.

Array di dalam JavaScript bersifat dinamis, dan kita tidak perlu mendefenisikan berapa ukuran array pada saat membuat variabel. Jumlah elemen dapat ditambah dan dikurang setiap saat.

Index array di dalam JavaScript juga tidak harus berurutan, JavaScript membolehkan elemen dari array ‘tidak terurut’. Kita bisa mengisi hanya index 0, 5, dan 10 saja di dalam array.

*/


var arr1 = []                               // array kosong, 0 elemen
var arr2 = [1,2,3,4,5]                      // array dengan 5 elemen
var arr3 = [3,4.1,"belajar","JavaScript"]   // array dengan 4 elemen
 
//buat object objek1
var arr4 = new Array();                     // array kosong, 0 elemen
var arr5 = new Array(1,2,3,4,5)             // array dengan 5 elemen
var arr6 = new Array(3,4.1,"belajar","JavaScript")  // array 4 elemen
  
// tampilkan array
console.log(arr1.toString());
// kosong 
console.log(arr2.toString());
//1,2,3,4,5
console.log(arr3.toString());
// 3,4.1,belajar,JavaScript
console.log(arr4.toString());
// kosong 
console.log(arr5.toString());
//1,2,3,4,5
console.log(arr6.toString());
// 3,4.1,belajar, Javascript 

