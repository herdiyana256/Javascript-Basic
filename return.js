/* 
Fungsi yang Mengembalikan Nilai
Agar hasil pengolahan nilai di dalam fungsi dapat digunakan untuk proses berikutnya, maka fungsi harus mengembalikan nilai.

Pengembalian nilai pada fungsi menggunakan kata kunci return kemudian diikuti dengan nilai atau variabel yang akan dikembalikan. Contoh:

*/
function bagi(a,b){
  hasilBagi = a / b;
  return hasilBagi;
}

// memanggil fungsi
var nilai1 = 20;
var nilai2 = 5;
var hasilPembagian = bagi(nilai1, nilai2);

console.log(hasilPembagian); //-> 4
// 4
//------------------------------------------------------------------------------------------------>


function STMIK_Matraman () {
  return "STMIK_Ciracas";

  
}

console.log(STMIK_Matraman());
//STMIK_Ciracas


// example II:

function Iam_Programmer() {
  var developer = "System Analyst"; 
  return developer;

}

console.log(Iam_Programmer());
//System Analyst

/* 
Pada awal nya kita membuat function = Iam_Programmer dan kita membuat variable "Developer"  dengan value "System Analyst" dan kita coba melakukan return pada variable "Developer" , sehingga pada saat kita lakukan execution result yang di dapatkan = "System Analyst"
*/

// Example III :

function Iam_Programmer() {
  var Frontend  = "Backend Engineer";
 var developer = "Data Analyst"; 
  return developer;
  //"Data Analyst"

}
var tampung = Iam_Programmer();
// nilai nya adalah " Backend Engineer" => karena pada saat function ini di buat pada saat pengembalian value yang di buat adalah variable Developer { Data Analyst}

console.log(tampung);
// Data Analyst

//--------------------------------------------------------------------------------------------------> 

function Iam_Programmer() {
  var Frontend  = "Backend Engineer";
 var developer = "Data Analyst"; 
  return Frontend;
  //"Backend Engineer"

}
var tampung = Iam_Programmer();
// nilai nya adalah " Backend Engineer" => karena pada saat function ini di buat pada saat pengembalian value yang di buat adalah variable Frontend {Backend Engineer}

console.log(tampung);
// Backend Engineer



//---------------------------------------------------------------------------------------------------------->

// Example IV : Kembalikan beberapa nilai menggunakan larik


function getNames () {
  // get names from  the database or API
  let firstName = "'Herdiyan'";
  let MiddleName = "Adam";
  let lastName = "Putra";
  let FullName = "Herdiyan Adam Putra"


  // return as an array 
  //return  [firstName, MiddleName, lastName];
  return [FullName];
}
  console.log(getNames());
//[ 'Herdiyan Adam Putra' ]


//----------------------------------------------------------------------------------------------------->

function getNames () {
  // get names from  the database or API
  let firstName = "Herdiyan";
  let MiddleName = "Adam";
  let lastName = "Putra";
  let FullName = "Herdiyan Adam Putra"


  // return as an array 
  return  [firstName, MiddleName, lastName];
  //return [FullName];
}
  console.log(getNames());
//[ "'Herdiyan'", 'Adam', 'Putra' ]


//----------------------------------------------------------------------------------------------------->

//Berikut cara mendapatkan nilai hasil fungsi getNames():



function getNames () {
  // get names from  the database or API
  let firstName = "Herdiyan";
  let MiddleName = "Adam";
  let lastName = "Putra";
  let FullName = "Herdiyan Adam Putra";

    return FullName;

}
let Names = getNames();
  console.log(Names);

// Herdiyan Adam Putra


//------------------------------------------------------------------------------------------------------->

// Example Menjadi Array : firstName + LastName

function getNames () {
  // get names from  the database or API
  let firstName = "Herdiyan";
  let MiddleName = "Adam";
  let lastName = "Putra";
  let FullName = "Herdiyan Adam Putra"

    return[firstName, lastName]
    ;

}
const  [firstName, lastName] = getNames();
  console.log(getNames());
// [ 'Herdiyan', 'Putra' ]


//------------------------------------------------------------------------------------------------->


function getNames () {
  // get names from  the database or API
  let firstName = "Herdiyan";
  let MiddleName = "Adam";
  let lastName = "Putra";
  let FullName = "Herdiyan Adam Putra"

    return[firstName, MiddleName, lastName];
    

}
const  [firstName, lastName] = getNames();
  console.log(getNames());
// [ 'Herdiyan', 'Adam', 'Putra' ]


