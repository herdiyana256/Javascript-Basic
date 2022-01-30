/* 

Dalam javascript perulangan dapat dilakukan dengan tipe data primitive seperti string dan juga bisa digunakan untuk tipe data array dan objek yang nilainya dapat kita tampilkan dengan lakukan perulangan. Untuk itu mari kita berkenalan dengan fitur keren dari javascript yaitu “for-of” dan “for-in” keduanya sama berfungsi untuk melakukan perulangan. Namun ada perbedaan yang signifikan dari kedua fungsi tersebut. Langsung saja kita melihat perbedaan masing-masing diantaranya.
2. Penjelasan dan contoh For…of pada javascript
Syntak:
for (variable of iterable) {
statement
}
Variable = kita mendeklarasikan suatu variable untuk dimasuki nilai perulangan yang diperlukan
Iterable = objek yang akan diberlakukannya perulangan
Jika anda dulu suka melakukan perulangan pada tipe data array dengan menggunakan foreach(), tidak ada salahnya anda mencoba fitur for…of untuk melakukan perulangan dengan tipe data array. Penggunaan for…of akan membuat kode jadi lebih singkat dan bersih ketimbang anda menggunakan foreach(). For..of adalah fitur yang dibawa oleh ES6 pada tahun 2015. Dan ini adalah contoh jika kita ingin menampilkan data pada suatu array.



For..of juga dapat dilakukan dalam perulangan dengan Map(), Set() dan juga tipe data string. Mari kita langsung saja pada contoh masing-masing.

*/

// deklarasi array berisi judul buku ->

const judulBuku = ['Javascript Basic','Javascript LifeHack','Javascript Asyncronous']

for(let buku of judulBuku) {
  console.log(buku)
  
}
/*

Javascript Basic
Javascript LifeHack
Javascript Asyncronous

*/


//Contoh for..of dengan String

//----> deklarasi dengan tipe data string
const namaMakanan  = "Ketoprak";

for(let ejaanNama of namaMakanan) {
  console.log(ejaanNama)
}
/*
K
e
t
o
p
r
a
k

*/

//Terlihat bahwa melakukan perulangan dari kata “ketoprak” satu persatu kata di tampilkan.



// example -> Contoh for..of dengan Map()


const namaMakanan  = new Map ([[1, 'Ketoprak',[2, 'Sate'],[3, 'Bubur Kacang Ijo']])

// Menampilkan perulangan pada semua element ->
for(let jenisMakanan of namaMakanan) {
  console.log(jenisMakanan)

}


console.log('\n---------------------\n');


// Melakukan perulangan hanya pada key setiap element -> 

for(let [key, value] of namaMakanan) {
  console.log(value)

} 


/*
Pada perulangan pertama kita menampilan semua nilai pada setiap element, dan pada perulangan kedua kita hanya menampilkan value pada setiap element.
Dan yang terakhir kita membuat contoh perulangan dengan Set(). Berikut ini contohnya.

*/

const number = ['1', '2', '3', '4', '5', '6', '7', '8']

// nilai pada object set akan bersifat unik
// dan tidak terduplikat

const mySet  = new Set(number)

for (const value of mySet) {
  console.log(value)
}


/*
1
2
3
4
5
*/



// example for of 


var angka = [0,1,3,4,8,10,15]
  for(let x of angka) {
    console.log(x)
  }
  /* 

0
1
3
4
8
10
15
*/