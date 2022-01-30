/* 
Parameter adalah variabel yang menyimpan nilai untuk diproses di dalam fungsi.
example 0 :
*/

function kali(a, b){
  hasilKali = a * b;
  console.log("Hasil kali a*b = " + hasilKali);
}

/* 
Pada contoh di atas, a dan b adalah sebuah parameter.

Lalu cara memanggil fungsi yang memiliki parameter adalah seperti ini:

kali(3, 2); // -> Hasil kali a*b = 6
Kita memberikan 3 untuk parameter a dan 2 untuk parameter b.

*/


//------------------------------------------------------------------------------------------------------->
// Example I : Number
function requestData (x) {
    console.log(x);

}

requestData(10);
//10

//------------------------------------------------------------------------------------------> 
// Example I : String 
function requestData (x) {
  console.log(x);

}

requestData("Hello Coders");
//Hello Coders


//------------------------------------------------------------------------------------------>


function requestName (x,y,z) {

  console.log(x);
  console.log(y);
  console.log(z);
  console.log(x,y,z)

}

requestName("Herdiyan", "Adam", "Putra");
/* 
Herdiyan
Adam
Putra
Herdiyan Adam Putra
*/