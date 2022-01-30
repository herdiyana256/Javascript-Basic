// if else if -> memiliki banyak kondisi / lebih , yang memungkinkan sebuah variabel tersebut variatif


/* 

IF digunakan untuk menentukan kondisi pertama, dan akan di eksekusi jika kondisinya benar.

ELSE IF digunakan untuk menentukan kondisi kedua, apabila setelah pengujian pada kondisi yang pertama salah, dan akan di eksekusi jika kondisinya benar.

ELSE digunakan apabila semua kondisi sebelumnya salah, maka ELSE adalah opsional dari kondisi-kondisi lainnya dan akan di eksekusi.
*/

var nilaiAD = 150;

if(nilaiAD > 200 ) // 150 tidak lebih besar dari 200
  console.log("nilaiAD lebih besar dari 200")
    else if (nilaiAD > 150) // 150 tidak lebih besar dari 150
    console.log("nilaiAD lebih besar dari 150")
    else if (nilaiAD < 150) // 150 tidak lebih kecil dari 150
    console.log("nilaiAD lebih kecil dari 150")
    else if(nilaiAD == 150)
      console.log("nilaiAD sama dengan 150") // nilaiAD sama dengan 150 { 150 : 150 } 
    else 
    console.log("nilaiAD adalah 150")
  //nilaiAD adalah 150 jika semua kondisi tidak terpenuhi 



  // example II
  var buah = "anggur";
  if(buah === "Jeruk"){
    console.log("anggur sama dengan jeruk")
  } else if (buah === "Semangka") {
    console.log("anggur sama dengan Semangka")
  } else if (buah === "Apel") {
    console.log("anggur sama dengan mangga")
  } else {
    console.log("anggur sama sama buah seperti semangka,jeruk dan mangga")
    // saat kondisi tidak terpenuhi dari kondisi 1 - 2 -3 maka hasip output yang di dapatkan adalah : anggur sama sama buah seperti semangka,jeruk dan mangga
  }