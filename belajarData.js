// membuat macam-macam data
//1. string

//1.a. Buat variabel nama depan, nama belakang (nama_depan : susilo, nama_belakang : hartomo)
//1.b. buat variabel alamat yang ada nomor rumah, rt, rw (jln Kalimantan no : 71)

//2. Number
//2.a. Buat variabel hasil, angka pertama, angka kedua 
//==> Buat operasi perhitungan - + / * pangkat 
//==> Tukar nilai angka pertama menjadi kedua (a=7; b=8 menjadi a=8; b=7)

//3. Array
// Buatlah array yang isinya nama-nama buah sebanyak 5 data
// Buat variabel buah = "apple" lalu masukkan buah apple, ke dalam array
// lalu hitung panjang array nya
// hapus isi array index ke-2

//4. Object
// Buatlah 2 object yang masing-masing terdapat (nama product, harga, berat)
// Berapa jumlah harga kedua barang tersebut?

// Jawaban Nomor 1.
let nama = "Athur Franky";
let alamat = "Jln Kalimantan No : 71";
console.log('1.a. Nama Depan : ', nama.slice(0, 5))
console.log('1.a. Nama Belakang : ', nama.slice(6))
console.log('1.b. Nomor Rumah : ', alamat.slice(-2))


// Jawaban Nomor 2.


let number = function (a, b) {
    console.log("2.a. Hasil Jumlah : ", a + b);
    console.log("2.b. Hasil kurang : ", a - b);
    console.log("2.c. Hasil kali : ", a * b);
    console.log("2.d. Hasil bagi : ", a / b);
    console.log("2.e. Hasil pangkat : ", Math.pow(a, b));
}

number(5, 3);

let a = 3;
let b = 6;


let c = b;
b = a;
a = c;

console.log("2.f. variabel a : ", a)
console.log("2.f. variabel b : ", b)


// 3. Array 

let arrData = ['Jeruk', 'Pepaya', 'Mangga', 'Nenas', 'Duku'];
let buah = 'Apel';
let newArr = arrData.push(buah);
console.log("3.a. Array baru adalah : ", arrData)

let newArr1 = arrData.splice(2, 1)
console.log("3.b. Array baru setelah di remove index 2 : ", arrData)

// 4. Object Data

let obj1 = {
    nama_produk: 'Mouse',
    harga: 47000,
    berat: "0,3 kg"
};

let obj2 = {
    nama_produk: 'Keyboard',
    harga: 150000,
    berat: "0,5 kg"
}

console.log("4.a. Harga total Rp. ", new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(obj1.harga + obj2.harga))