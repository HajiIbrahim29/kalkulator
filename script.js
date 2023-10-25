let symbol = prompt("masukan symbol (+,-,*,/,**,%,^)");
let angka1 = parseInt(prompt("masukan angka pertama"));
let angka2 = parseInt(prompt("masukan angka kedua"));

let hasil
if (symbol == "+") {
    hasil = angka1 + angka2;
} else if (symbol == "-") {
    hasil = angka1 - angka2;
} else if (symbol == "*") {
    hasil = angka1 * angka2;
} else if (symbol == "/") {
    hasil = angka1 / angka2;
} else if (symbol == "**") {
    hasil = angka1 ** angka2;
} else if (symbol == "%") {
    hasil = angka1 % angka2;
} else if (symbol == "^") {
    hasil = angka1 ^ angka2;
}
document.write(hasil);

