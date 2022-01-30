/*
Nested Loop
Nested loop adalah loop di dalam loop, yaitu kita sebut saja loop luar dan loop dalam. Jadi, konsepnya, iterasi pertama loop luar dijalankan terlebih dahulu, kemudian menunggu sampai loop dalam selesai, baru melanjutkan ke iterasi kedua loop luar yang juga menunggu sampai loop dalam selesai dijalankan lagi, dan diulangi terus sampai semua iterasi dijalankan.

Berikut saya contohkan kode saya, semoga nampak perbedaan loop luar dan loop dalam.


*/





for(var b=0; b<2; b++) {
  console.log("b yang ke :", b)
  for(var c=0; c<2; c++){
    console.log("c yang ke :", c)
  }
  console.log("")
  // akan memberikan enter 
}

/* 
b yang ke : 0
c yang ke : 0
c yang ke : 1

b yang ke : 1
c yang ke : 0
c yang ke : 1
*/

//------------------------------------------------------------------------------------------------->

// example : kalau kita membuat value variable menjadi 3 maka hasil perulangan c juga menjadi 3 .

for(var b=0; b<3; b++) {
  console.log("b yang ke :", b)
  for(var c=0; c<2; c++){
    console.log("c yang ke :", c)
  }
  console.log("")
  // akan memberikan enter 
}


/* 
b yang ke : 0
c yang ke : 0
c yang ke : 1

b yang ke : 1
c yang ke : 0
c yang ke : 1

b yang ke : 2
c yang ke : 0
c yang ke : 1
*/



//---------------------------------------------------------------------------------------->


for (let i= 0; i<2; i++) {
	console.log('ini loop luar, looping ke -', i) 
for (let j = 0; j<2; j++) {
	console.log('ini loop dalam, looping ke -', i)
	}
	console.log('ini loop luar, looping ke -', i)

}


/*

ini loop luar, looping ke - 0
ini loop dalam, looping ke - 0
ini loop dalam, looping ke - 0
ini loop luar, looping ke - 0
ini loop luar, looping ke - 1
ini loop dalam, looping ke - 1
ini loop dalam, looping ke - 1
ini loop luar, looping ke - 1


*/