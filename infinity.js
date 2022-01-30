for(var i = 0; i>=0; i++) {
  console.log(i)

}
// perulangan tidak terhitung / infinity , sehingga selama kondisi nya masih salah maka nilai akan selalu bertambah 1 . berhenti apabila kondisi itu terpenuhi.


//---------------------------------------------------------------------------------------->

var i = 1;
while(true) {
  console.log(i)
  i++;
}
// perulangan tidak terhitung / infinity , sehingga selama kondisi nya masih salah maka nilai akan selalu bertambah 1 . berhenti apabila kondisi itu terpenuhi.



/* 

NaN dan Infinity adalah dua hasil perhitungan matematis yang digunakan JavaScript untuk menampung nilai yang bukan angka.

Operasi matematika yang hasilnya ‘tidak terdefinisi’, tidak akan dianggap error di dalam JavaScript. Misalnya operasi pembagian sebuah angka dengan angka 0, atau hasil dari akar kuadrat nilai negatif. Di dalam JavaScript, operasi seperti ini diselesaikan dengan nilai NaN dan Infinity.

Perhitungan yang menghasilkan nilai Infinity
Hasil Infinity akan di dapat jika kita melakukan salah satu operasi di bawah ini:

Jika sebuah angka melewati nilai maksimum angka yang bisa ditampung di dalam JavaScript (disebut juga dengan istilah: overflow).
Jika sebuah angka lebih besar dari angka negatif yang bisa ditampung (negative overflow).
Melakukan operasi aritmatika dengan infinity (misal: a=1 + infinity)
Melakukan operasi pembagian dengan nilai 0 (division by zero)
Nilai Infinity di dalam JavaScript dibedakan menjadi 2, yakni infinity positif dan infinity negatif. Infinity positif di dapat jika angka yang dihasilkan lebih besar dari angka positif yang dapat ditampung. Infinity negatif di dapat jika angka yang dihasilkan lebih negatif dari angka negatif yang dapat ditampung (bukan nilai paling kecil).

Jika angka hasil operasi sangat kecil, atau disebut dengan underflow, JavaScript akan menampilkannya dengan angka 0.

*/