console.log("Hello World");


// VAR => masih dapat diubah untuk value nya 
var message = "Herdiyan Adam Putra";

//VAR => masih dapat mendeklarasikan value nya walau hanya ""; , dan hasil output nya juga akan mendapatkan : undefined 
var undefined;
//undefined

 // => pada deklarasi pertama bisa di declarasi ke variable kedua dengan value yang berbeda 
message = "Herdiyan Adam Putra,S.kom";
//Herdiyan Adam Putra,S.kom

//Tanpa key Variable => dapat di deklarasikan karena masih ada value yang dimasukan 
message3 = "Berhasil memasukan value tanpa key variable";


// gagal karena memasukan tanpa variable + tanpa value yang akan di decklarasikan =>
// message3 = "";

// Perbedaan VAR dengan LET =>

if(true) {
  var message = 1;
  // pada VAR , value nya masih tetap bisa diubah meskipun didalam curly bracket / sebuah function sekalipun, namun 
  // untuk LET , value nya hanya bisa di deklarasikan didalam lokasi atau 1 tempat saja, tidak untuk global. sehingga output yang di hasil nya adalah deklarasi : Hello Codepolitan;

  let message1 = 2;
  message3 = "Berhasil memasukan value didalam function atau didalam curlyBrackets";
  console.log(message3);
  //Berhasil memasukan value didalam function atau didalam curlyBrackets, dan nilai / value nya secara global bisa diubah secara global, pada deklarasi pertama kita membuat message : Berhasil memasukan value tanpa key variable
  // pada mmessage kedua : Berhasil memasukan value didalam function atau didalam curlyBrackets , berbeda dengan LET yang bisa di deklarasikan sesuai ruang / local nya saja 

  console.log("testing", message1);
  // pada LET , value akan dapat diubah apabila LET berada pada 1 executor/console yang 1 tempat, sehingga pada output pada LET dapat melakukan perubahan dengan hasil : Testing 2 
}


//LET => pada deklarasi pertama pada LET , bisa dilakukan deklarasi ke variable kedua dengan value yang berbeda  ( LOCAL )
let message1 = "Hello Coders";
// Hello Coders

message1 = "Hello Codepolitan";
//Hello Codepolitan


//CONST  => nilai awal sudah constant sehingga tidak bisa dilakukan deklarasi sebanyak 2x
const message2 = "Hello Programmer";
//Hello Programmer


console.log(message);
// Herdiyan Adam Putra

console.log(message1);
//Hello Codepolitan


console.log(message2);
//Hello Programmer

console.log(message3);
//Berhasil memasukan value tanpa key variable

console.log(undefined);
//
