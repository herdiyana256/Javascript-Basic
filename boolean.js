/* Boolean adalah suatu tipe data yang hanya mempunyai dua nilai. Yaitu true atau false (benar atau salah).
Pada beberapa bahasa pemograman nilai true bisa digantikan 1 dan nilai false digantikan 0. */

var tinggi = true;
var lebar = false 
console.log(tinggi)
//true
console.log(lebar)
// False


var tinggi = false;
var cm = 165;


if (cm > 170) 
tinggi = true;

else 
tinggi = false;

console.log(tinggi)
// false => karena nilai 165 lebih kecil dari 170
// apabila nilai tinggi lebih dari 170 maka nilai nya menjadi => true 


var lebar = true;
var cm = 180;


if (cm > 170) 
tinggi = true;

else 
tinggi = false;

console.log(lebar)
//true



// ========================================================================================================>

var a = true;
var benar = true;
var salah = false;


/* 

Konversi Tipe Data Menjadi Boolean
Di dalam JavaScript, sebuah tipe data akan ‘berubah’ sifatnya tergantung kapan tipe data itu digunakan. Misalkan kita membuat variabel a = 12. Variabel a dalam contoh ini akan menjadi tipe data number. Namun jika digunakan di dalam struktir logika seperti if (a), maka a akan ‘bersifat’ menjadi boolean dengan nilai true.

Aturan konversi tipe data menjadi boolean ini sering menjadi sumber ‘error’ jika tidak dipahami. Di dalam JavaScript, terdapat 6 nilai yang akan menghasilkan boolean false, atau disebut juga dengan falsy value.

Nilai-nilai berikut ini akan dianggap false di dalam JavaScript:

0
-0
NaN
“” (string kosong)
undefined
null

*/



/* 
Method untuk Objek Boolean
Sama seperti tipe data number dan string, tipe data boolean juga memiliki method atau fungsi yang bisa ‘dipanggil’. Namun tidak seperti tipe data number dan string yang memiliki banyak method, tipe data boolean hanya memiliki 2 buah method, yakni toString() dan valueOf().

Method toString() akan menkonversi nilai boolean menjadi string. Nilai boolean true akan menjadi “true”, dan nilai boolean false akan menjadi “false”.

Method valueOf() akan menghasilkan nilai ‘primitif’ dari boolean, kita akan jarang memanggil method ini, namun jika digunakan akan menghasilkan nilai yang sama dengan method toString().

Berikut adalah contoh penggunaannya:
*/

var a = true;
var b = false;
  
console.log(a.toString()); // true
console.log(b.toString()); // false
  
console.log(a.valueOf()); // true
console.log(b.valueOf()); // false

