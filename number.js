/* 
Di dalam JavaScript, method untuk tipe angka akan lebih banyak berfungsi untuk mengontrol bagaimana angka tersebut ditampilkan ke dalam web browser, dan umumnya akan menghasilkan nilai dengan tipe data String. Kita akan membahas method untuk tipe data number ini secara satu-persatu.

Method ini diurutkan menurut abjad. */




var bilanganbulat = 20;
var bilangandesimal = 30.5;
var negative = -10;
var bool = false;
var bool1 = true;
console.log(bilanganbulat);
console.log(bilangandesimal);
console.log(negative);
console.log(bool);
console.log(bool1);
/* 
20
30.5 
-10  
false
true */

/* 



Method JavaScript: Number.toExponential()
Method toExponential digunakan untuk menampilkan angka menjadi tampilan scientific notation. Scientific Notation adalah tampilan angka dengan 1 digit sebelum tanda desimal, dan diikuti dengan tanda pangkat. Misalnya angka 123.45, jika ditulis kedalam bentuk scientific notation akan menjadi 1.23 x 10^2. Akan tetapi, bahasa pemograman umumnya mengganti penyebutan pangkat sepuluh ini menjadi karakter e atau E. Sehingga 1.23 x 10^2 ditulis menjadi 1.23e+2.

Method Number.toExponential menyediakan 1 argumen opsional yang jika diinput inputan akan menentukan ‘panjang’ digit secara keseluruhan. Argumen ini bisa diisi dengan angka 0 – 20. Apabila tidak menggunakan argumen, maka method toExponential akan menggunakan panjang paling maksimal sesuai jumlah digit dalam variabel asal.

Tipe data kembalian method Number.toExponential() bertipe String.


*/

a = 5000.123456789;
b = a.toExponential();    
c = a.toExponential(1);  
console.log(b);                      // hasil: 5.000123456789e+3
console.log(c);                      // hasil: 5.0e+3
console.log(a.toExponential(5));     // hasil: 5.00012e+3
console.log(a.toExponential(10));    // hasil: 5.0001234568e+3
console.log(a.toExponential(20));    // hasil: 5.00012345678899964696e+3



//=================================================================================================>

/* 
Method JavaScript: Number.toFixed()
Method toFixed digunakan untuk membuat tampilan angka dengan jumlah desimal yang tetap. Method ini membutuhkan satu parameter opsional yang jika diinput akan menentukan jumlah digit setelah tanda desimal.

Jika angka yang di tampilkan mengurangi digit asal, method ini akan membulatkan ke bilangan terdekat (0,5 akan menjadi 1). Dan apabila angka yang ditampilkan melebihi digit asal, method ini akan menambahkan angka 0 dibelakang hasil agar tampilan sesuai dengan yang diinginkan.

Misalkan angka 123,222222, akan ditampilkan menjadi 123,22 jika menggunakan method toFixed(2), dan akan ditampilkan menjadi 123,222 jika menggunakan toFixed(3). Hasil pemanggilan method ini bertipe String.

*/

a = 123.4367;
b = a.toFixed();    
c = a.toFixed(2);  
console.log(b);               // hasil: 123;
console.log(c);               // hasil: 123.44;
console.log(a.toFixed(1));    // hasil: 123.4;
console.log(a.toFixed(4));    // hasil: 123.4367;
console.log(a.toFixed(7));    // hasil: 123.4567000;


//===============================================================================================================>

/* 

Method JavaScript: Number.toFixed()
Method toFixed digunakan untuk membuat tampilan angka dengan jumlah desimal yang tetap. Method ini membutuhkan satu parameter opsional yang jika diinput akan menentukan jumlah digit setelah tanda desimal.

Jika angka yang di tampilkan mengurangi digit asal, method ini akan membulatkan ke bilangan terdekat (0,5 akan menjadi 1). Dan apabila angka yang ditampilkan melebihi digit asal, method ini akan menambahkan angka 0 dibelakang hasil agar tampilan sesuai dengan yang diinginkan.

Misalkan angka 123,222222, akan ditampilkan menjadi 123,22 jika menggunakan method toFixed(2), dan akan ditampilkan menjadi 123,222 jika menggunakan toFixed(3). Hasil pemanggilan method ini bertipe String.

Berikut adalah contoh penggunaan method toFixed untuk tipe data angka dalam JavaScript
*/


a = 123.4367;
   b = a.toFixed();    
   c = a.toFixed(2);  
   console.log(b);               // hasil: 123;
   console.log(c);               // hasil: 123.44;
   console.log(a.toFixed(1));    // hasil: 123.4;
   console.log(a.toFixed(4));    // hasil: 123.4367;
   console.log(a.toFixed(7));    // hasil: 123.4567000;


   //============================================================================================================>

   /* 
   Method JavaScript: Number. toPrecision()
Method toPrecision digunakan untuk menampilkan angka dengan jumlah digit angka yang ‘tetap’ tergantung nilai angka yang dijadikan sebagai argumen. Misalkan jika angka yang akan ditampilkan adalah 12.2234 maka hasil dari toPrecision(2) adalah 12, dan toPrecision(3) adalah 12.2.

Berbeda dengan 2 method sebelumnya, nilai tetap untuk method toPrecision adalah jumlah digit sebelum dan sesudah desimal. */

/* Jika argumen tidak ditulis, method ini akan mengembalikan nilai awal variabel, tanpa ‘menformatnya’. Hasil kembalian toPrecision() bertipe String.

Sebagai contoh program, berikut adalah hasil tampilan penggunaan method toPrecision di dalam JavaScript:*/

a = 123.43678;
   b = a.toPrecision();    
   c = a.toPrecision(1);  
   console.log(b);                    // hasil: 123.4367
   console.log(c);                    // hasil: 1e+2
   console.log(a.toPrecision(2));     // hasil: 1.2e+2
   console.log(a.toPrecision(4));     // hasil: 123.4;
   console.log(a.toPrecision(7));     // hasil: 123.4368;

   /* Perhatikan bahwa jika angka asal memiliki digit yang lebih dari argumen method to precision, seperti contoh pemanggilan a.toPrecision(2) dari123.43678 , hasilnya akan ditampilkan menggunakan scientific notation. */

   //========================================================================================================>


   /*
   Method JavaScript: Number.toString()
Method toString dimiliki hampir semua tipe data. Method ini berfungsi untuk menkonversi tipe data menjadi string.

Jika digunakan untuk tipe data number, method ini bisa diberikan sebuah argumen opsional yang akan menampilkan angka ke dalam bentuk basis lain selain 10. Misalkan angka asal 255, jika dipanggil dengan toString(2) akan ditampilkan menjadi 11111111. Karena toString(2) berarti menampilkan angka menjadi basis 2 (bilangan biner). Argumen yang didukung adalah dari 2 sampai 36.

*/

a = 255;
b = a.toString();    
c = a.toString(16);  
console.log(b);                 // hasil: 255
console.log(c);                 // hasil: ff
console.log(a.toString(2));     // hasil: 11111111
console.log(a.toString(8));     // hasil: 377
console.log(a.toString(32));    // hasil: 7v

/* 

Diluar dari ke empat method yang dijelaskan di sini, JavaScript juga memiliki 2 method lain untuk tipe data number, yakni Number.toLocaleString() untuk menampilkan angka sesuai aturan lokal web browser (mengganti tanda titik menjadi koma untuk pembeda tempat desimal), dan Number.valueOf() yang digunakan untuk memanggil tipe data ‘primitif’ dari objek angka. Keduanya tidak terlalu sering digunakan. 

Selain memiliki method (fungsi) tipe data number di dalam JavaScript juga memiliki read-only properti, atau konstanta yang menyimpan angka ‘khusus’ yang bisa digunakan di dalam kode program. Konstanta ini akan kita pelajari dalam tutorial berikutnya: Mengenal Konstanta Objek Angka (Number) dalam JavaScript.
*/

