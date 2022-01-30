/* 
Null adalah kata kunci (keyword) khusus yang berarti ‘tidak memiliki nilai’. Kita bisa memberikan nilai null kepada variabel, elemen dari array, property dari objek, atau yang lainnya.

Null berbeda dengan string kosong, karena string kosong masih bertipe ‘string’. Sedangkan null bukan merupakan tipe data apapun. Jika kita menggunakan operator typeof kepada null, hasilnya adalah : object. Hal Ini berarti bahwa null adalah object khusus yang mengindikasikan ’tidak ada nilai’ di dalam JavaScript. 
*/

var a;
a = null;
var b= null;
  
console.log(a);          // null
console.log(b);          // null
console.log(typeof a);   // object


// ================================================================================================================>


/* 
Undefined adalah keyword khusus lainnya di dalam JavaScript yang mengindikasikan ’tidak ada nilai’. Namun undefined lebih ’dalam’ dari pada null. Undefined adalah hasil yang akan didapat dari proses berikut:
*/

/* 
Nilai dari pemanggilan variabel yang belum didefenisikan
Nilai dari pemanggilan element array yang tidak ada
Nilai dari pemanggilan property objek yang tidak ada
Nilai dari pemanggilan fungsi yang tidak mengembalikan nilai
Nilai dari parameter fungsi yang tidak memiliki argumen
*/

/* 
Undefined adalah variabel global di dalam javascript, dan bukan merupakan objek khusus seperti null. Pemanggilan operator typeof untuk undefined akan menghasilkan undefined.
*/


var a = "test";         // a adalah string
var b = [1,2,3,4,5]     // b adalah array
  
console.log(a);         // "test"
console.log(a.length);  // 4: pemanggilan property length dari objek string
console.log(a.panjang); // undefined : panjang bukan property dari string
console.log(b[2]);      // 3 : index ke 2 dari array b adalah 3
console.log(b[10]);     // undefined : index dalam array b hanya sampai 4

/* 
test
4
undefined
3
undefined
*/

//  Perbedaan Null dengan Undefined  ======================> 
 /* 

 Dalam tahap pembelajaran JavaScript, kadang kita akan menyamakan nilai null dengan undefined. Bahkan hasil dari operasi null == undefinded adalah true. Keduanya juga akan menjadi false jika dikonversi menjadi boolean.

Namun null dan undefined pada dasarnya adalah berbeda. Null biasanya diperoleh dalam kondisi normal dan sudah direncanakan. Namun undefined biasanya didapat dari hasil kesalahan program dan tidak direncanakan. Operasi null === undefinded akan menghasilkan nilai false, yang menunjukkan kedua nilai ini berbeda.

Hampir selalu dalam proses pembuatan program, jika membutuhkan nilai untuk mendefenisikan ’tanpa nilai’ kita menggunakan nilai null, bukan undefined.

Sebagai penutup, berikut adalah contoh program kode program yang menghasilkan null dan undefined:
*/

var a;
a = null;
var b=null;
  
console.log(a);           // null
console.log(b);           // null
console.log(typeof a);    // object
  
var a = "test";           // a adalah string
var b = [1,2,3,4,5]       // b adalah array
  
console.log(a);           // "test"
console.log(a.length);    // 4: pemanggilan property length dari objek string
console.log(a.panjang);   // undefined : panjang bukan property dari string
console.log(b[2]);        // 3 : index ke 2 dari array b adalah 3
console.log(b[10]);       // undefined : index dalam array b hanya sampai 4
   
var z = (null == undefined);
console.log(z);           // true
  
var z = (null === undefined);
console.log(z);           // false




//=======================================================================================>

// Niomic =>

var kosong1;
//undefined
var kosong = "Ada";
// ada
kosong = null;
// null 
console.log(kosong);
console.log(kosong1);



