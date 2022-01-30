/* 
Fungsi atau function di javascript adalah sebuah blok kode yang digunakan untuk membungkus suatu proses dengan tujuan agar penulisan kode atau proses yang sama tidak ditulis secara berulang kali. Di tutorial kali ini kita akan coba membuat function di javascript.

*/

/* 
Tata cara : 
Function bisa memiliki parameter bisa juga tidak memiliki parameter, parameter ini digunakan untuk menentukan proses yang ingin dijalankan, sesuai dengan kebutuhan kode program kita.

Berikut ini contoh cara membuat function di javascript dalam bentu pseudo-code.

*/
function namaFungsi(parameter1, parameter2) {
  // Kode yang ingin dieksekusi
}

/* 
Contoh fungsi bawaan javascript seperti console.log(), window.alert(), dan lain sebagainya, berikut ini adalah contoh penulisan function secara sintaks di javascript.

Didalam contoh sintaks function dibawah ini penulis membuat 2 parameter yaitu p1 dan p2 untuk melakukan penjumlahan antara p1 dan p2.*/


function hitung(p1, p2) {
			return p1+p2;
		}

		console.log(hitung(5,5));
    // 10

    /* 
    Fungsi diatas adalah proses penjumlahan sederhana, bisa dibayangkan apabila kita memiliki banyak proses yang sama dengan menulis kode yang sama dengan cara berulang kali. Bagi sebagian orang mungkin hal tersebut tidak masalah, tapi apabila sudah mengalami masalah dengan proses tersebut maka kita harus mengecek satu persatu kode yang sama dengan masalah yang sama.

Selain penulisan function dengan cara diatas, anda juga bisa menggunakan anonymous function dengan cara dideklarasikan terlebih dahulu dengan variabel.
*/

var hitung = function(p1, p2) {
	return p1+p2;
}

//Cara diatas sama dengan cara penulisan sebelumnya, hanya saja dideklarasikan dengan variabel terlebih dahulu.



/* 
Variabel Lokal

Variabel yang dideklarasikan didalam function akan menjadi variabel lokal dan hanya dapat diakses didalam function tersebut, berikut ini adalah sintaks sebagai gambaran penggunaan variabel lokal.

*/
// Varibel namaBuah tidak bisa diakses disini

function buah() {
	var namaBuah = 'Apel';
	// Varibel namaBuah bisa diakses disini
}
		
// Varibel namaBuah tidak bisa diakses disini



//===========================================================================================================> 

// Step I  => Metode penulisan lama 
function STMIK_Matraman () {
  console.log("STMIK_Matraman")
//STMIK_Matraman
}


// Step II => Metode penulisan lama 
  const STMIK_Ciracas = function () {
    console.log("STMIK_Ciracas");
    //STMIK_Ciracas
  }



// Step III  => Metode penulisan baru 
const STMIK_Bekasi = () => {
  console.log("STMIK_Bekasi");
  //STMIK_Bekasi
}

STMIK_Matraman()
STMIK_Ciracas()
STMIK_Bekasi()

