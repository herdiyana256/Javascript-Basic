/* 
Pernyataan bersarang jika / lain membantu untuk mengatur dan mengisolasi kondisi untuk menghindari pengujian kondisi yang sama dua kali atau untuk meminimalkan berapa kali berbagai tes perlu dilakukan.

Dengan menggunakan pernyataan if dengan perbandingan dan operator logika, kita dapat mengatur kode yang akan dijalankan jika kombinasi kondisi tertentu terpenuhi. Kami tidak selalu ingin menguji seluruh kondisi untuk menjalankan satu set pernyataan jika seluruh tes benar, dan lainnya jika itu benar.

Bagaimana jika kita ingin dapat memilih di antara beberapa pernyataan yang berbeda, tergantung pada kombinasi kondisi tertentu yang benar.

Anggaplah, misalnya, kita memiliki tiga nilai untuk dibandingkan dan ingin menetapkan hasil yang berbeda tergantung pada nilai mana yang sama. Contoh berikut menunjukkan bagaimana kita dapat bersarang jika pernyataan untuk menguji ini (dicetak tebal di bawah)

> jawaban var; if (a == b) { if (a == c) {answer = "semuanya sama"; } else {answer = "a dan b adalah sama"; } } else {if (a == c) {answer = "a dan c sama"; } else { if (b == c) {answer = "b dan c sama"; } else {answer = "semuanya berbeda"; } }}
Cara kerja logika di sini adalah:

Jika kondisi pertama benar ( > if (a == b) ), maka program akan memeriksa kondisi nested if ( > if (a == c) ). Jika kondisi pertama salah, program akan berubah menjadi kondisi yang lain .
Jika ini bersarang jika benar, pernyataan tersebut dijalankan, yaitu "semua adalah sama".
Jika ini bersarang jika salah, maka pernyataan yang lain dieksekusi, yaitu "a dan b adalah sama".
Berikut adalah beberapa hal yang perlu diperhatikan bagaimana hal ini dikodekan:

Pertama, kami membuat jawaban variabel untuk menahan hasil sebelum kami memulai pernyataan if, membuat variabel global . Tanpa itu, kita perlu memasukkan variabel di depan semua pernyataan penugasan, karena itu akan menjadi variabel lokal.
Kedua, kami telah menjorok setiap pernyataan if nested. Ini memungkinkan kita untuk melacak lebih mudah berapa banyak tingkat pernyataan bersarang yang ada. Ini juga membuatnya lebih jelas bahwa kami telah menutup jumlah blok kode yang tepat untuk menyelesaikan semua pernyataan if yang kami buka. Anda mungkin menemukan bahwa lebih mudah untuk meletakkan tanda kurung di sana terlebih dahulu untuk setiap pernyataan jika sebelum Anda mulai menulis kode yang termasuk dalam blok itu.
Kita dapat menyederhanakan satu bagian dari kode ini sedikit untuk menghindari harus menyarangkan pernyataan if cukup banyak. Jika seluruh blok lain terdiri dari satu pernyataan if, kita dapat menghilangkan tanda kurung di sekitar blok itu dan memindahkan jika kondisi itu sendiri naik ke baris yang sama seperti yang lain, menggunakan ketentuan "lain jika". Sebagai contoh:


> jawaban var; if (a == b) {if (a == c) {answer = "semuanya sama"; } else {answer = "a dan b adalah sama"; }} else if (a == c) {answer = "a dan c sama"; } else if (b == c) {answer = "b dan c adalah sama"; } else {answer = "semuanya berbeda"; }
Pernyataan bersarang jika / kemudian umum dalam semua bahasa pemrograman, bukan hanya JavaScript . Pemrogram pemula sering menggunakan beberapa pernyataan if / then atau if / else daripada menumpuknya.

Sementara kode jenis ini akan berfungsi, kode ini akan cepat menjadi verbose dan akan menduplikasi kondisi. Pernyataan kondisional bersarang menciptakan lebih banyak kejelasan di sekitar logika program dan menghasilkan kode ringkas yang dapat berjalan atau dikompilasi lebih cepat.

*/

// example : nested if 
var x = 10;
var y = 20;
var z = 30;

if(x > y) {
    if(x > z) {
      console.log("X adalah yang paling besar nilai nya ");

}else{
  console.log("Nilai X adalah yang terbesar ke II");
}
}else{
  if(x < z){
    console.log("X adalah yang kecil nilai nya");
  }else{
    console.log("Nilai X adalah yang terkecil ke II");
  }
}
// jika kita membuat perbandingan dengan nilai x = 10, maka result/ output nya adalah :  X adalah yang kecil nilai nya


// example II ->

var x = 40;
var y = 20;
var z = 30;

if(x > y) {
    if(x > z) {
      console.log("X adalah yang paling besar nilai nya ");

}else{
  console.log("Nilai X adalah yang terbesar ke II");
}
}else{
  if(x < z){
    console.log("X adalah yang kecil nilai nya");
  }else{
    console.log("Nilai X adalah yang terkecil ke II");
  }
}
// jika kita membuat perbandingan dengan nilai x = 40, maka result/ output nya adalah :  X adalah yang paling besar nilai nya 


// example III ->
var x = 25;
var y = 20;
var z = 30;

if(x > y) {
    if(x > z) {
      console.log("X adalah yang paling besar nilai nya ");

}else{
  console.log("Nilai X adalah yang terbesar ke II");
}
}else{
  if(x < z){
    console.log("X adalah yang kecil nilai nya");
  }else{
    console.log("Nilai X adalah yang terkecil ke II");
  }
}
// jika kita membuat perbandingan dengan nilai x = 40, maka result/ output nya adalah :  Nilai X adalah yang terbesar ke II



// example  IV -> 
var x = 25
var y = 30;
var z = 10;

if(x > y) {
    if(x > z) {
      console.log("X adalah yang paling besar nilai nya ");

}else{
  console.log("Nilai X adalah yang terbesar ke II");
}
}else{
  if(x < z){
    console.log("X adalah yang kecil nilai nya");
  }else{
    console.log("Nilai X adalah yang terkecil ke II");
  }
}
// jika kita membuat perbandingan dengan nilai x = 25, maka result/ output nya adalah : Nilai X adalah yang terkecil ke II   