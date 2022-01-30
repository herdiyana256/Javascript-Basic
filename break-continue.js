/* 
Break dan Continue pada Javascript - Pada pemerograman javascript terdapat perintah Break dan Continue, seperti namanya Break berarti berhenti dan Continue berarti lanjut. Kedua perintah ini tentu mempunyai fungsi yang akan berguna sekali ketika melakukan pemerosesan data logika. Nah, muncul pertanyaan apa sih yang akan dhentikan dan dilanjutkan oleh kedua perintah ini ? 

Break dan Continue pada javascript mempunyai fungsi yang berbeda jika pada fungsi Break akan menghentikan semua perintah perulangan (For, While, Do While) atau menghentikan proses data misalnya pada Switch. Secara umum bentuk penulisan Break adalah seperti berikut.


*/

//break;
//Berikut adalah contoh penggunaan Break yang terjadi pada proses logika.


var num = 1;
while (num <= 15) {
  console.log("Nomor : " + num);
  if(num === 9) {
    break;
  }
}
Menampilkan penambahan / pengulangan : Number : 1 -> perulangan infinity 
ouput -> Nomor : 1 



/* 
Pada perintah diatas proses perulangan akan dihentikan paksa jika perulangan sudah sampai pada ke 9. Sehingga yang tadinya perulangan akan diulang sebanyak 15 akan dihentikan setelah perulangan ke 9.

Sementara perintah Continue mempunyai fungsi melanjutkan proses perulangan, ini berarti kebalikan dari fungsi break yang menghentikan suatu proses. Secara umum perintah Continue dituliskan seperti berikut.
*/

//continue;


//Berikut adalah contoh penggunaan Continue yang terjadi pada proses logika

num = 0;

while (num < 10) {
  num++;
  if(num == 5) {
    continue;
  }
    console.log("Nomor :", num);
    /* 
Nomor : 1
Nomor : 2 
Nomor : 3 
Nomor : 4 
Nomor : 6 
Nomor : 7 
Nomor : 8 
Nomor : 9 
Nomor : 1

*/

}

//Pada perintah diatas artinya proses perulangan akan menghasilkan nilai dari 1 - 10 akan tetapi karena ada perintah Continue pada perulangan ke 5 tidak akan dicetak artinya nilai 5 akan dilewati.






// example break;

for(var i=0; 0<10; i++) {

  console.log(i)
  if(i ==6)
  break;
  // break pada angka 6, apabila kita memberikan kondisi  :
  // if(i == 3) , maka hasil output yang didapatkan adalah -> 1,2,3
}

/* 
1
2
3
4
5
6
*/



// example continue;

for(var i =0; i <10; i++){
  if(i == 8)
  continue;
  // pada perintah continue ini maka secara default apabila sudah angka 8, maka angka perulangan / increment dilanjutkan dan tidak lewat puput cari console.log , sehingga pada angka 8 akan dilewatkan 
  console.log(i)
}

/*
0
1
2
3
4
5
6
7
9
*/



