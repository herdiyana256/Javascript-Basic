/* 
Spreading operator dituliskan dengan three consecutive dots (….). Sesuai namanya “Spread”, Inti nya spread operator ialah pelebur array jadi beberapa elemen yang berbeda fitur baru ES6 ini dipakai untuk membentangkan nilai array atau lebih tepatnya iterable object jadi beberapa elements. Ayo kita lihat contoh kode berikut:

*/

const favorites = [“Seafood”, “Salad”, “Nugget”, “Soup”];
          console.log(favorites);
/* output:
[ ‘Seafood’, ‘Salad’, ‘Nugget’, ‘Soup’ ]


/* 
Pada kode itu hasil yang dicetak ialah sebuah array (ditunjukkan dengan tanda [ ]), sebab memang kita mencetak nilai favorites itu sendiri. Nah, dengan memakai spread operator kita bisa membentangkan nilai – nilai dalam array itu.
*/

const favorites = [“Seafood”, “Salad”, “Nugget”, “Soup”];
const others = [“Cake”, “Pie”, “Donut”];
const allFavorites = [favorites, others]
console.log(allFavorites);
/* output:[[ ‘Seafood’, ‘Salad’, ‘Nugget’, ‘Soup’ ], [ ‘Cake’, ‘Pie’, ‘Donut’ ]]
*/

//Sayang sekali, nilai array tak akan tergabung. Bukannya menggabungkan nilainya, variabel allFavorite jadi objek array baru yang menampung dua array di dalamnya. Nah lalu bagaimana bila kita mencoba memakai spread operator?


const favorites = [“Seafood”, “Salad”, “Nugget”, “Soup”];
const others = [“Cake”, “Pie”, “Donut”];
const allFavorites = […favorites, …others]
console.log(allFavorites);
/* output:
[ ‘Seafood’, ‘Salad’, ‘Nugget’, ‘Soup’, ‘Cake’, ‘Pie’, ‘Donut’ ]
*/


// example basic ->

var angka = [1,2,3,4]


var angka1 = [5,6,7,8]

var fusionNumber = [...angka,...angka2,9,10,11,12,13,14,15,16]


console.log(angka) //[ 1, 2, 3, 4 ]

console.log(angka1) //  [ 5, 6, 7, 8 ]

console.log(fusionNumber) 
/* 
[
   1,  2,  3,  4,  5,  6,
   7,  8,  9, 10, 11, 12,
  13, 14, 15, 16
]

*/