function nestedObject() {
  var mahasiswa = {
    nama: "Herdiyan Adam Putra",
    ipk: {
      semester1: 3.25,
        semester2 : 3.30,
        semester3: 3.40,
        semester4 : 3.70,
        semester5:  3.50,
        semester6 : 4.00,
          semester7: 3.35
      }
  }


  console.log(mahasiswa.ipk.semester7)
  // 3.35
}

nestedObject()



function nestedObject2 () {
  var peserta = {
    nama : "Helmi Rhama Putra",
    umur : 25,
    alamat : "Jalan Jati Kelapa No.31 RT 0087/ RW 004",

    datapeserta : {
      pendidikan : "Sarjana Telnik Informatika",
      keahlian   : "Programming,Web designer,Web Developer"
    }
  }


  console.log(peserta.nama) //   Helmi Rhama Putra

  console.log(peserta.datapeserta)
/* 

{
  pendidikan: 'Sarjana Telnik Informatika',
  keahlian: 'Programming,Web designer,Web Developer'
}


*/




}

nestedObject2()