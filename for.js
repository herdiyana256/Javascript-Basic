/* 

Perulangan adalah sebuah cara untuk mengeksekusi blok kode secara berulang kali dengan kondisi yang kita tentukan.
Perulangan sangatlah berguna ketika kita menemukan kasus yang mengharuskan kita untuk menuliskan kalimat yang sama berulang kali bahkan yang memiliki nilai berbeda sekalipun.
Misalkan kita kita ingin menampilkan sebuah kalimat ‘Hello World’ sebanyak 100 kali, tidak mungkin kita menuliskan/melakukan copy paste program ‘Hello World’ sebanyak 100 kali. Jadi solusi nya adalah dengan kita menggunakan perulangan for.
Cara menulis perulangan for pada javascript kita memerlukan 4 perintah, yaitu :
kondisi awal perulangan
kondisi akhir perulangan
increment/decrement (yaitu tambah/kurangnya nilai dalam perulangan)
dan yang terakhir adalah baris kode yang ingin diulang.
saya akan memberikan contoh code perulangan for :


*/

function repeatCode () {

  for(var i = 0; i < 10; i++) {
    console.log("Jalan Jati kelapa no:", i); // i disini artinya angka variable yang pertama akan di tampilkan. var i  = 0
  }


}

repeatCode()
/* 
Jalan Jati kelapa no: 0
Jalan Jati kelapa no: 1
Jalan Jati kelapa no: 2
Jalan Jati kelapa no: 3
Jalan Jati kelapa no: 4
Jalan Jati kelapa no: 5
Jalan Jati kelapa no: 6
Jalan Jati kelapa no: 7
Jalan Jati kelapa no: 8
Jalan Jati kelapa no: 9

*/


function repeatAngka () {

  for(var angka = 1; angka <=  10; angka++) { // pada saat membuat perbandingan apabila variabel adalah sebuah name maka wajib menggunakan < = sehingga function terdefinisi dan perulangan dapat dijalankan 

    console.log("Angka terkecil dari :", angka); // disetiap perintah console pada sebuah text yang ingin di tampilkan , wajib memasukan kembali untuk variable nya { agar pada output dapat terdefinisi untuk function yang dijalankan }
  }

}

repeatAngka()
/* 
Angka terkecil dari : 1
Angka terkecil dari : 2
Angka terkecil dari : 3
Angka terkecil dari : 4
Angka terkecil dari : 5
Angka terkecil dari : 6
Angka terkecil dari : 7
Angka terkecil dari : 8
Angka terkecil dari : 9
Angka terkecil dari : 10

*/


//---------------------------------------------------------------------------------------------->

function perulanganAangka () {
  for(var a = 1;  a < 10; a++ ) {
    console.log("Angka diurutkan dari No :", a);
  }
}

perulanganAangka()
/* 
Angka diurutkan dari No : 1
Angka diurutkan dari No : 2
Angka diurutkan dari No : 3
Angka diurutkan dari No : 4
Angka diurutkan dari No : 5
Angka diurutkan dari No : 6
Angka diurutkan dari No : 7
Angka diurutkan dari No : 8
Angka diurutkan dari No : 9

*/