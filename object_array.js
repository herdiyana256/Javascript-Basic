function panggilObject () {
  var Mobil = {
    type : "Mitsubshi",
    model : "Xpander Sport",
    harga : 15000000,
    tahun : [2015,2016,2017,2018,2019],

    
  }
  console.log(Mobil)
  /* 
  type: 'Mitsubshi',
  model: 'Xpander Sport',
  harga: 15000000,
  tahun: [ 2015, 2016, 2017, 2018, 2019 ]
  */
}
  
  console.log(Mobil.tahun[2])
  //2017
  console.log(Mobil.tahun)
  //[ 2015, 2016, 2017, 2018, 2019 ]

}

panggilObject()