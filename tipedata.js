function tipedata () {
  var data = "Jakarta";
  
  if(data === "Jakarta"){
    return data
  }else{
    return "Gagal menemukan data"

  } 

}

//tipedata() -> memanggil function 
// tidak ada output karena belum menampilkan console.log


console.log(tipedata())
// Jakarta 


//--------------------------------------------------------------------------------------------------------------->

// mengecek tipe data pada sebuah function if else -> STRIMG 
function tipedata () {
  var data = "Jakarta";
    console.log(typeof(data))
    // string
  if(data === "Jakarta"){
    return data
  }else{
    return "Gagal menemukan data"

  } 

}

//tipedata() -> memanggil function 
// tidak ada output karena belum menampilkan console.log


console.log(tipedata())
// Jakarta 


//---------------------------------------------------------------------------------------------------------------->
// mengecek tipe data pada sebuah function if else -> NUMBER 
function tipedata () {
  var data = 25;
    console.log(typeof(data))
    // number
  if(data === 25){
    return data
  }else{
    return "Gagal menemukan data"

  } 

}

//tipedata() -> memanggil function 
// tidak ada output karena belum menampilkan console.log


console.log(tipedata())
// 25 




//--------------------------------------------------------------------------------------------------->

function tipedata () {
  var data = 25;
    console.log(typeof(data))
    // number
  if(data === 25){
    return "Anda Berhasil mengakses data"
  }else{
    return "Gagal menemukan data"

  } 

}

//tipedata() -> memanggil function 
// tidak ada output karena belum menampilkan console.log


console.log(tipedata())
// Anda Berhasil mengakses data

// note : apabila variable data yang di tulis adalah string dengan nilai if pada kondisi value yang benar namun tidak ada tanda petik, maka data tsb dianggap tidak valid, meskipun keduanya memiliki value yang sama ( tidak terpenuhi )

//----------------------------------------------------------------------------------------------------------->


function tipedata () {
  var data = "2";
    console.log(typeof(data))
    // number
  if(data == 25){
    return "Anda Berhasil mengakses data"
  }else{
    return "Gagal menemukan data"

  } 

}

//tipedata() -> memanggil function 
// tidak ada output karena belum menampilkan console.log


console.log(tipedata())
// Anda Berhasil mengakses data

// note : apabila kita menggunakan compile == (tanda 2 ) maka nilai yang sama akan tetap dianggap valid, sehingga dari kondisi nya terpenuhi . dan hasil output nya berhasil .
