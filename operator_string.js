/* 
Operasi yang sering dilakukan untuk tipe data String adalah operasi penyambungan string, atau dikenal dengan istilah ‘concatenate string’. Untuk operasi ini, JavaScript menggunakan operator tambah (+). Berikut contoh penggunaannya :

1
2
3
4
5
<script>
var a="Dunia";
var b="Ilkom";
var situs = a + b;    // DuniaIlkom
</script>
JavaScript akan ‘mendeteksi’ operasi tipe data pada saat menggunakan operator +. Jika kedua tipe data adalah angka (number), maka operasi yang akan dilakukan adalah penjumlahan, namun jika salah satu atau kedua variabel bertipe String, akan dilakukan operasi penyambungan String.

*/



// example ->

var x = "Hello, "; // spasi 1 kali membuat jarak untuk paragraf atau sebuah kalimat 
var y = "Coders ";  
var z = "Happy New years for : ";
var year = 2022;

var result = x + y + z + year

console.log(result);
//Hello, Coders Happy New years for : 2022



// example II ->

var a="Dunia";
var b="Ilkom";
var c="14";
var d=12;
var e=3;
 
console.log(a+b);     // DuniaIlkom
console.log(a+c);     // Dunia14
console.log(c+d);     // 1412
console.log(d+e);     // 15


//----------------------------------------------->

/* 
String sebagai Array dari Karakter
Di dalam JavaScript, string bisa dianggap sebagai array dari karakter, dan kita bisa mengambil nilai sebuah karakter dari String dengan mengaksesnya seperti array.

Walaupun kita belum membahas tentang array, konsepnya untuk String sebagai array, bisa dipahami sebagai berikut: sebuah string dimulai dari array dengan index 0 untuk karakter pertama, index 1 untuk karakter kedua, dan seterusnya. Jika variabel a=”duniailkom”, maka hasil dari a[0] adalah d, dan a[5] adalah i.

Berikut contoh pengaksesan karakter dari sebuah string dalam JavaScript:

*/

var situs = "duniailkom";
console.log(situs[0]);    // d
console.log(situs[1]);    // u
console.log(situs[2]);    // n
console.log(situs[3]);    // i
console.log(situs[4]);    // a


/* 

Contoh Penggunaan String di dalam JavaScript
Sebagai penutup dari perkenalan kita dengan tipe data String dalam JavaScript, berikut adalah contoh kode program untuk pendefenisian String, penggunaan karakter escape, operasi penyambungan string, dan pengaksesan string sebagai array dalam JavaScript:*/

var belajar = 'Saya sedang belajar "JavaScript"';
console.log(belajar);         // Saya sedang belajar "JavaScript"
  
var situs = 'http:\\\\www.duniailkom.com';
console.log(situs);           // http:\\www.duniailkom.com
 
var pesan = "dia berkata:I\"ll be back";
console.log(pesan);           // dia berkata:I"ll be back
  
var baris2 = "Kalimat ini terdiri dari \n 2 baris";
console.log(baris2);         // Kalimat ini terdiri dari
                             // 2 baris
  
var santai = "Saya sedang ngopi di caf\u00e9";
console.log(santai);         //Saya sedang ngopi di café
  
var a="Dunia";
var b="Ilkom";
var c="14";
var d=12;
var e=3;
console.log(a+b);   // DuniaIlkom
console.log(a+c);   // Dunia14
console.log(c+d);   // 1412
console.log(d+e);   // 15
  
var situs = "duniailkom";
console.log(situs[0]);     // d
console.log(situs[1]);     // u
console.log(situs[2]);     // n
console.log(situs[3]);     // i
console.log(situs[4]);     // a