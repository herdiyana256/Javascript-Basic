/* 
Struktur logika SWITCH dapat disederhanakan sebagai bentuk khusus dari struktur IF ELSE. SWITCH digunakan untuk percabangan kode program dimana kondisi yang diperiksa hanya 1 namun membutuhkan banyak opsi.

Struktur dasar penulisan SWITCH adalah sebagai berikut:


switch (kondisi) 
{
case hasil_kondisi_1:
      // kode program jika kondisi sama dengan hasil_kondisi_1
      break;
case hasil_kondisi_2:
      // kode program jika kondisi sama dengan hasil_kondisi_2
      break;
default:
      kode program untuk kondisi lainnya
      break;
}

Kondisi untuk inputan struktur SWITCH biasanya adalah variabel yang akan diperiksa. Hasil percabangan dari variabel tersebut akan ditangani oleh perintah case. Opsi default bisa ditambahkan untuk menangani kasus yang tidak ditangani oleh perintah case.



/------------------------------------------------------------------------------------------------------->


Cara Penulisan Struktur Logika SWITCH dalam JavaScript :

*/

var angka=5;
  
switch (angka) 
{
case 1:
       console.log("Angka Satu");
       break;
case 2:
       console.log("Angka Dua");
       break;
case 3:
       console.log("Angka Tiga");
       break;
case 4:
       console.log("Angka Empat");
       break;
default:
       console.log("Bukan angka 1 - 4");
       break;  
}

/* 
Setelah mendeklarasikan variabel a dan mengisi nilainya dengan angka 5, kemudian kita masuk ke struktur SWITCH.

Blok SWITCH diawali dan diakhiri dengan kurung kurawal. Dan kemudian untuk setiap kemungkinan yang terjadi dari variabel angka, ditampung dengan perintah case


*/


/* 


Perintah case diikuti dengan kondisi yang ingin di-’tampung’. Di dalam contoh diatas, saya menampung isi variabel angka dengan case 1 untuk menangani kondisi jika angka==1, case 2 untuk menangani kondisi jika angka==2, dan seterusnya. Setiap case lalu diikuti dengan tanda titik dua (:).

Pada kondisi terakhir, terdapat perintah default yang tujuannya adalah untuk menampung kondisi jika seluruh kondisi case tidak tersedia. Contohnya, jika variabel angka berisi angka 0, maka kondisi case yang ada tidak tersedia untuk menangani hal ini, dan perintah default lah yang akan dijalankan.

Jika anda perhatikan dalam setiap case, saya menambahkan perintah break. Perintah break disini bertujuan untuk mengistruksikan kepada JavaScript untuk segera keluar dari SWITCH jika salah satu case ditemukan. Jika kita tidak mencantumkan perintah break, maka seluruh perintah mulai dari case yang sesuai sampai ke bawah akan dijalankan. Berikut contohnya:


*/


var angka=3;
  
switch (angka) 
{
case 1:
       console.log("Angka Satu");
case 2:
       console.log("Angka Dua");
case 3:
       console.log("Angka Tiga");
case 4:
       console.log("Angka Empat");
default:
       console.log("Bukan angka 1 - 4");
}


/* 
Jika anda menjalankan kode JavaScript tersebut, maka yang akan dihasilkan adalah:

Angka Tiga
Angka Empat
Bukan angka 1 – 4
Hal ini terjadi karena jika tanpa perintah break, struktur SWITCH akan mengeksekusi seluruh kode program dimulai dari posisi case yang dicapai.

Sepintas kebutuhan atas perintah break ini membuat kondisi SWITCH menjadi sedikit ribet, namun karena hal tersebut, kita bisa membuat perintah break seperti berikut ini:

*/
var angka=9;
  
switch (angka) 
{
case 1:
case 2:
case 3:
case 4:
case 5:
       console.log("Angka berada antara 1-5");
break;
case 6,7,8,9,10:
       console.log("Angka berada antara 6-10");
break;
default:
       console.log("Bukan angka 1 - 10");
break;
}


//------------------------------------------------------------------------------------------>


function testingSwitch() {

  var value = 10;

  switch(value) {
    case 10:
      console.log("Hasil Anda Memuaskan");
      break;
      
      case 8:
        console.log("Cukup Memuaskan");
        break;
        
        case 6:
        console.log("Cukup Baik");
        break;
        
        case 5:
          console.log("Baik");
          break;
          
          default:
            console.log("Mungkin Anda salah jurusan");



  }

}
  testingSwitch()
//Hasil Anda Memuaskan,karena variable value kita mendapatkan value : 10 sehingga pada saat di console menghasilkan ouput : Hasil Anda Memuaskan 
