let sayi1 = 20;
if (sayi1 > 10 && sayi1 < 50 ) {
    console.log("Sayı 10-50 arasındadır")
}

let tekcift = 11232142141;
if (tekcift % 2 == 0) {
    console.log(`${tekcift} sayısı çifttir`)
}
else {
    console.log(`${tekcift} sayısı tektir`)
}

let x = 334, y = 223, z = 76;
if (x > y && x > z) {
    console.log("En büyük x dir")
}
else if (y > x && y > z){
    console.log("En büyük y dir")
}
else {
    console.log("En büyük z dir")
}

let a = 34, b = 223, c = 76;
if (a > b && a > c) {
    if (b > c){
        console.log('Büyüklük sıralaması a > b > c şeklindedir')
    }
    else {
        console.log('Büyüklük sıralaması a > c > b şeklindedir')
    }
}
else if (b > a && b > c) {
    if (a > c) {
        console.log('Büyüklük sıralaması b > a > c şeklindedir')
    }
    else {
        console.log('Büyüklük sıralaması b > c > a şeklindedir')
    }

}
else if (c > a && c > b) {
    if (a > b) {
        console.log('Büyüklük sıralaması c > a > b şeklindedir')
    }
    else {
        console.log('Büyüklük sıralaması c > b > a şeklindedir')
    }
}

let vize1 = 76, vize2 = 52, final = 48;
let ortalama = ((vize1 + vize2) / 2 * 0.4) + final * 0.6
console.log(`Ortalamanız ${ortalama}`)
if ((ortalama > 50 && final > 50) || final >= 70) {
    console.log('Geçti')
}
else {
    console.log('Kaldı')
}

