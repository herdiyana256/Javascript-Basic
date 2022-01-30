/* 
Object juga bisa disebut sebagai container, yakni wadah yang digunakan untuk menampung berbagai data.

Dalam bahasa permrograman PHP terdapat konsep associative array yaitu yang key-nya bisa diisi string (tidak hanyaa angka sahaa sebagaimana layaknya array biasa). Konsep associative array PHP ini sangat mirip seperti object di dalam javascript.

Format Dasar Object
Seperti yang saya singgung sebelumnya, object di javascript sangat mirip seperti array, dan cara pembuatanya pun hampir sama.

Berikut format dasar pembuatan object di javascript:

*/

//-------------------> Example II 

var namaObject = {
  property1 : "Herdiyan Adam Putra",
  property2 : "Helmi Rhama Putra",
  property3 : "Ajis Saputra",

    method1  : function () {
      "isi method 1";
    },

    method2 : function() {
      "isi method 2";
    }

}

/*
Pada baris pertama saya membuaat variabel namaObject, variabel inilah yang akan diisi dengan data object. Aturan nama object sama seperti identifier lain, yakni boleh diawali dengan angka, tidak boleh mengandung spasi, dst.

Block kode program untuk pendefinisian object diawali tanda kurung kurawal. Disinilah 'isi' dari object kita tulis.
*/







//-------------------------------------------------------------------------------------------------> 
function panggilObject () {
  var motor = {
    type1 : "Honda",
    harga1 :  18000000,
    model : "Beat Deluxe",

    
  }
  console.log(motor)
  // { type1: 'Honda', harga1: 18000000, model: 'Beat Deluxe' }

  console.log(motor.harga1)
//18000000

  console.log(motor.model)
  //Deluxe

  console.log(motor.type1)
  // Honda
}


panggilObject()