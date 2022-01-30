/* 
Perbedaanya ialah jika while melakukan pengecekan kondisi diawal atau didepan sebelum masuk ke perulangan, sedangkan jika do while sebaiknya yakni pengecekan kondisi diakhir/belakang setelah melakukan perulangan.

Program akan melakukan perulangan terlebih dahulu kemudian akan mengecek sebuah kondisi didalam kurung while.

Jika anda sudah pernah mempelajari looping do while dalam bahasa pemrograman lain seperti c++, java dll. Maka akan terasa mudah untuk memahami cara menggunakan perulangan do while pada javascript. Karena semua pada dasarnya perulangan do while memiliki perintah yang sama walaupun dalam bahasa pemrograman yang berbeda.

Seperti biasa, saya akan memberikan contoh programnya, agar lebih muda dimengerti.

*/


// Do while => melakukan output dulu baru dilakukan pengecekan function , apabila nilai nya sekalipun salah maka akan di tampilkan .

// example false
var nilai = 10;

do {
  console.log("ini yang ke :",  nilai)
  // ini yang ke : 10

  nilai++

}while
(nilai < 10)



// example true
var nilai = 1;

do{
  console.log("ini adalah angka yang ke ", nilai)
  nilai++;

}while (nilai < 15);
/* 
ini adalah angka yang ke  1
ini adalah angka yang ke  2
ini adalah angka yang ke  3
ini adalah angka yang ke  4
ini adalah angka yang ke  5
ini adalah angka yang ke  6
ini adalah angka yang ke  7
ini adalah angka yang ke  8
ini adalah angka yang ke  9
ini adalah angka yang ke  10
ini adalah angka yang ke  11
ini adalah angka yang ke  12
ini adalah angka yang ke  13
ini adalah angka yang ke  14
*/


// example complex :

//kita juga bisa menggunakan pop-up confirm() dengan do while yang bisa mengulang dan menghentikan perintah semau user sendiri.

//Contoh looping do while javscript dengan pop-up box confirm():

 //<script type="text/javascript">
  var c = 0;
  var nilai;
  do {
   c++;
   nilai = confirm('lagi ga');
  } while(nilai)
 //</script>