  // Operator Perbandingan ->

  /* 
  Nama Operator	Simbol
Lebih Besar	>
Lebih Kecil	<
Sama Dengan	== atau ===
Tidak Sama dengan	!= atau !==
Lebih Besar Sama dengan	>=
Lebih Kecil Sama dengan	<=

*/
  
  

  var aku = 20;
  var kamu = 19;

  // sama dengan
  var hasil = aku == kamu;
  console.log(`${aku} == ${kamu} = ${hasil}`);

// lebih besar
var hasil = aku > kamu;
console.log(`${aku} > ${kamu} = ${hasil}`);

// lebih besar samadengan
var hasil = aku >= kamu;
console.log(`${aku} >= ${kamu} = ${hasil}`);

// lebih kecil
var hasil = aku < kamu;
console.log(`${aku} < ${kamu} = ${hasil}`);

// lebih kecil samadengan
var hasil = aku <= kamu;
console.log(`${aku} <= ${kamu} = ${hasil}`);

// tidak samadengan
var hasil = aku != kamu;
console.log(`${aku} != ${kamu} = ${hasil}`);

/* 

20 == 19 = false
20 > 19 = true
20 >= 19 = true
20 < 19 = false
20 <= 19 = false
20 != 19 = true


Apa perbedaan == (dua simbol samadengan) dengan === (tiga simbol samadengan)?

Perbandingan dengan menggunakan simbol == hanya akan membandingkan nilai saja. Sedangkan yang menggunakan === akan membandingkan dengan tipe data juga.




*/

var a = "4";
console.log(== 4); //-> true


// sedangkan ini akan bernilai false
var b = "4" === 4; //-> false

//---------------------------------------------------------------------------->

  /* 
  Nama Operator	Simbol
Lebih Besar	>
Lebih Kecil	<
Sama Dengan	== atau ===
Tidak Sama dengan	!= atau !==
Lebih Besar Sama dengan	>=
Lebih Kecil Sama dengan	<=

*/
  
var angka = 10;
var angka1 = 15;


console.log(angka > angka1) // Lebih Besar	> //false
console.log(angka < angka1) // Lebih Kecil	<v />/ true
console.log(angka == angka1) // Sama Dengan	== atau === // false
console.log(angka === angka1) // Sama Dengan	== atau === // false
console.log(angka != angka1) // tidak sama dengan != !== / ! == // true
console.log(angka >= angka1) //  lebih besar sama dengan > =  // false
console.log(angka <= angka1) // lebih kecil sama dengan < =  // true 





