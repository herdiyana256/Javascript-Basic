/* 
Sebuah fungsi JavaScript tidak melakukan pemeriksaan apapun pada nilai-nilai parameter (argumen).

Function Parameters dan Arguments
example :

functionName ( parameter1, parameter2, parameter3 ) {
    code to be executed
}


Function parameters adalah nama-nama yang tercantum dalam definisi fungsi.
Function arguments adalah nilai-nilai nyata dilewatkan ke (dan diterima oleh) fungsi.

Aturan parameter
definisi fungsi JavaScript tidak menentukan tipe data untuk parameter.

fungsi JavaScript tidak melakukan jenis memeriksa argumen berlalu.

fungsi JavaScript tidak memeriksa jumlah argumen yang diterima.

Default parameter
Jika fungsi ini disebut dengan argumen yang hilang (kurang dari dinyatakan), nilai-nilai yang hilang ditetapkan untuk: terdefinisi

Kadang-kadang ini dapat diterima, tapi kadang-kadang lebih baik untuk menetapkan nilai default untuk parameter:
*/

function requestData ( x = 10) {
  console.log(x)

}

requestData(20);
// 20

//------> secara default akan menampilkan result / output : 20 , namun apabila pada requestData kita tidak mengisi value nya maka secara default akan menampilkan result / output : 10




function requestName (x = "Herdiyan Adam Putra"){
  console.log(x)
}
requestName("Hello Coders, Welcome to your dahsboard"); // Hello Coders, Welcome to your dahsboard 
// apabila kita tidak mengisi requestName / blank maka secara default untuk result / output yang akan di dapatkan adalah "Herdiyan Adam Putra"





// example II :

function STMIK_MJ (x, y) {
  if(y == undefined) {
    y = 0;
         
  }

  
}
console.log(STMIK_MJ()) // undefined 


// Jika fungsi ini disebut dengan terlalu banyak argumen (lebih dari dinyatakan), argumen ini dapat dicapai dengan menggunakan argumen objek.



/* 
Argumen Object
fungsi JavaScript memiliki built-in objek disebut argumen objek.

Objek Argumen berisi array argumen yang digunakan saat fungsi dipanggil (dipanggil).

Dengan cara ini Anda dapat menggunakan fungsi untuk menemukan (misalnya) nilai tertinggi dalam daftar nomor:

*/


x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    var i;
    var max = -Infinity;
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}


//Atau membuat fungsi untuk jumlah semua nilai input:

Contoh
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}