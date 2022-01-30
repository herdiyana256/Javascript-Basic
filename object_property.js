function panggilObject () {
  var Mobil = {
    type : "Mitsubshi",
    model : "Xpander Sport",
    harga : 15000000,
    tahun : [2015,2016,2017,2018,2019],

    
  }


}
Mobil.harga = 20000000; // 20000000
// sesuai dengan value object yang sebelum nya -> kita dapat mengubah value nya dan object property ini sangat fleksible 

  console.log(Mobil.harga)
  //// 20000000
  
  console.log(Mobil.tahun[2])
  //2017
  console.log(Mobil.tahun)
  //[ 2015, 2016, 2017, 2018, 2019 ]

}

panggilObject()

//------------------------------------------------------------------------------------------------>

// example II ->

function STMIKMJ () {

  var mahasiswa = {
    nama : "Herdiyan Adam Putra",
    jurusan : "Teknik Informatika",
    ipk : 3.30,
    semester : 4

    /* 
    Object diatas bisa juga saya buat seperti ini:

    var mahasiswa = {};

    mahasiswa.nama = "Herdiyan Adam Putra";
    mahasiswa.jurusan = "Teknik Informatika";
    mahasiswa.ipk = 3.30;
    mahasiswa.semester = 4;


    Saya membuat terlebih dahulu sebuah object kosong, yakni mahasiswa. Penisian property dilakukan setelah pendefinisian object. Caranya seperti mengisi variabel, hanya saja kita juga menulis lengkap nama object beserta nama property yang ingin ditambahkan.

    Dengan menggunakan bracket notation, kita juga bisaa menambahkan property mahasiswa:

    var mahasiswa = {};

    mahasiswa["nama"] = "Herdiyan Adam Putra";
    mahasiswa["jurusan"] = "Teknik Informatika";
    mahasiswa["ipk"] = 3.30;
    mahasiswa["semester"] = 4;

    Khusus penambahan property dengan bracket notation, kita bisa membuat nama property yang memiliki spasi (yang akan error jika ditulis menggunakan dot notation).

Tentu saja kita juga bisa membuat sebagian property pada saaat pendefinisian dan sebagian lagi setelahnya:


    */


  }
  console.log(mahasiswa) 
  /* 
  {
  nama: 'Herdiyan Adam Putra',
  jurusan: 'Teknik Informatika',
  ipk: 3.3,
  semester: 4
}
*/

}

STMIKMJ()


// Final Example->


function stmikMatraman () {
  var mahasiswa = {
  nama : "Herdiyan Adam Putra",
  jurusan : "Teknik Informatika",
  nim : 2030047
  };
  // menambahkan sebuah ( object property ) value didalam variable mahasiswa -> tetap menampilkan perubahan walau tidak berada didalam curly bracker varible mahasisa 
  mahasiswa.ipk = 3.30;
  mahasiswa.semester = 4;

  console.log(mahasiswa.nama); //Herdiyan Adam Putra

  console.log(mahasiswa.jurusan); // Teknik Informatika
  console.log(mahasiswa.ipk); // 3.30
  console.log(mahasiswa.semester) // 4
  console.log(mahasiswa.nim); // 20300047

}


stmikMatraman()



