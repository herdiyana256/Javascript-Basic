/* 
Definisi IF
Struktur IF adalah stuktur kode pemograman ‘conditional’ yang akan membuat percabangan di dalam program. Dengan menggunakan struktur IF, kita bisa membuat 2 percabangan program yang akan dieksekusi jika ‘kondisi’ terpenuhi, dan akan menjalankan kode program lain jika ‘kondisi’ tidak terpenuhi.
*/

if (kondisi) {
  //kode program jika kondisi true
}
else {
  //kode program jika kondisi false
}


/*
Kondisi di dalam struktur IF disini bisa berisi variabel dengan tipe data boolean, atau dengan kode program yang akan menghasilkan boolean, misalkan IF (a==b), atau IF (a>=b). Jika kondisi diisi dengan selain boolean (selain true atau false), maka hasilnya akan dikonversi menjadi boolean (tentang aturan konversi ini telah kita bahas pada tutorial tentang tipe data boolean).

*/

//Cara Penulisan Struktur Logika IF dalam JavaScript

var departementName = "IT";
if (departementName  == "IT") 
  console.log("Successfully") // Successfully
    

    /* 
      Jika baris yang akan dijalankan terdiri dari 2 baris atau lebih, maka kita harus menggunakan tanda kurung kurawal (tanda { dan })pada awal dan akhir blok kondisi IF, seperti contoh berikut:

  */

  var firstName = "Herdiyan";
  var middleName = "Adam";
  var lastName = "Putra";
  var fullName = "Herdiyan Adam Putra";

    if(firstName == "Adam")
      console.log("Successfully for get firstName") // Jika Parameter argument / compile nya adalah nama "Herdiyan" -> maka ini pesan yang didapatkann
    else
      console.log("Failed for get your firstName")   // Jika Parameter argument / compile nya adalah selain nama "Herdiyan" -> maka ini pesan yang didapatkan 


      //------------------------------------------------------------------------------------------> 

      //example II :
      var name = "STMIK-Matraman";
      if(name == "STMIK-Matraman")
      {
          console.log("Successfully your name University") //Successfully your name University

          console.log("Hello Student Developers") //Hello Student Developers

          console.log("Hello Coders, Welcome to My World") // Hello Coders, Welcome to My World

      }

      //----------------------------------> EXAMPLE from Niomic :

      function addressName () {
        var addressName = "Jalan Jati Kelapa No.31";
        if(addressName === "Jalan Jati Kelapa No.31") {
            console.log(addressName)    
        } else {
            console.log("Jalan Jati Cempedak No.5")
        }
        
        
  }        
addressName() // Jalan Jati Kelapa NO.31


// Example Niomic -> 

function Nama () {
  var nama = "Herdiyan";
  if(nama === "Herdiyan") {
    console.log(nama)
  } else {
    console.log("Adam")
  }


}

Nama() // Herdiyan -> Jika kta membuat compiler nya bukan nama "Herdiyan" maka result / output yang di hasilkan adalah 'Adam'


// IF - ELSE - ELSE IF with curly bracket {recommended}

function angka () {
  var angka = 1;
  if(angka === 1) {
    console.log("Successfully angka 1") // Successfully angka 1 

  } else if(angka === 2) {
    console.log("Successfully angka 2") // Jika var di isi dengan angka 2, maka result / output nya :  Successfully angka 2

  } else {
    console.log("Failed to get angka ") // Jika tidak keduanya maka result / output yang di hasilkan   : Failed to get angka 
  }


}

angka()


// IF - ELSE - ELSE IF without  curly bracket {no recommended}


function huruf () {
  var huruf = "H";
  if(huruf === "H") console.log("Successfully get huruf H")  //Successfully get huruf H

  else console.log("Not Found your huruf")


}


huruf()


// kesimpulan : pada if-else hanya memungkinkan kita dapat membuat 2 kondisi saja, berbeda dengan if-else-if yang dimana kita dapat membuat 2 atau banyak kondisi .




