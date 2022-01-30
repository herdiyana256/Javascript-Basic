/* 
Opeartor Bitwise pada Javascript
Operator bitwise merupkan operator yang digunakan untuk operasi berdasarkan bit (biner).

Operator ini terdiri dari:

Nama	Simbol di Java
AND	&
OR	|
XOR	^
Negasi/kebalikan	~
Left Shift	«
Right Shift	»
Left Shift (unsigned)	«<
Right Shift (unsigned)	»>


Operator ini berlaku untuk tipe data int, long, short, char, dan byte.

Operator ini akan menghitung dari bit-ke-bit.

Misalnya, kita punya variabel a = 60 dan b = 13.

Bila dibuat dalam bentuk biner, akan menjadi seperti ini:



*/

a = 00111100
b = 00001101


/* 

(perhatikan bilangan binernya, angka 0 dan 1)

Kemudian, dilakukan operasi bitwise

Operasi AND

*/


a     = 00111100
b     = 00001101
a & b = 00001100


//Operasi OR



a     = 00111100
b     = 00001101
a | b = 00111101




//Operasi XOR
a     = 00111100
b     = 00001101
a ^ b = 00110001



//Opearsi NOT (Negasi/kebalikan)

a   = 00111100
~a  = 11000011


/*

Konsepnya memang hampir sama dengan opeartor Logika. Bedanya, Bitwise digunakan untuk biner.

Untuk lebih jelasnya…

Mari kita coba lihat contohnya:


*/

var x = 4;
        var y = 3;

        // operator bitwise and
        var hasil = x & y;
        console.log(`${x} & ${y} = ${hasil}`);

        // operator bitwise or
        var hasil = x | y;
        console.log(`${x} | ${y} = ${hasil}`);

        // operator bitwise xor
        var hasil = x ^ y;
        console.log(`${x} ^ ${y} = ${hasil}`);

        // operator negasi
        var hasil = ~x;
        console.log(`~${x} = ${hasil}`);
        
        // operator bitwise right shift >>
        var hasil = x >> y;
        console.log(`${x} >> ${y} = ${hasil}`);

        // operator bitwise right shift <<
        var hasil = x << y;
        console.log(`${x} << ${y} = ${hasil}`);

        // operator bitwise right shift (unsigned) >>>
        var hasil = x >>> y;
        console.log(`${x} >>> ${y} = ${hasil}`);

/* 
4 & 3 = 0
4 | 3 = 7
4 ^ 3 = 7
~4 = -5
4 >> 3 = 0
4 << 3 = 32
4 >>> 3 = 0

*/










