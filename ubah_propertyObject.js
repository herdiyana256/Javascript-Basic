function namaRestoran () {
  var makanan = {
    nama_menu : "SeaFood",
    harga : 500000,
    pilihan_menu : "Makanan Siap Saji",
    jenis_Makanan : "Kering"

  }
  // Menambahkan object property 
    makanan.type = "Seafood Special";
    /* 
    {
  nama_menu: 'SeaFood',
  harga: 500000,
  pilihan_menu: 'Makanan Siap Saji',
  jenis_Makanan: 'Kering',
  type: 'Seafood Special'
}*/

  // Mengubah value pada object property ->
  makanan.harga = 70000;
  makanan.nama_menu = "Ketoprak";
  /* 
  {
  nama_menu: 'Ketoprak',
  harga: 70000,
  pilihan_menu: 'Makanan Siap Saji',
  jenis_Makanan: 'Kering',
  type: 'Seafood Special'
}
*/



    console.log(makanan) 
    /* 
      {
  nama_menu: 'SeaFood',
  harga: 500000,
  pilihan_menu: 'Makanan Siap Saji',
  jenis_Makanan: 'Kering'
}

*/


}
namaRestoran()