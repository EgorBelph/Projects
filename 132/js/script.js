let m5000 = document.querySelector('.input-5000');
let m2000 = document.querySelector('.input-2000');
let m1000 = document.querySelector('.input-1000');
let m500 = document.querySelector('.input-500');
let m200 = document.querySelector('.input-200');
let m100 = document.querySelector('.input-100');
let m50 = document.querySelector('.input-50');
let m10 = document.querySelector('.input-10');
let m5 = document.querySelector('.input-5');
let m2 = document.querySelector('.input-2');
let m1 = document.querySelector('.input-1');
let out = document.querySelector('.out-result')
let button = document.querySelector('button');

button.onclick = function () {
    let a1 = m5000.value * 5000;
    let a2 = m2000.value * 2000;
    let a3 = m1000.value * 1000;
    let a4 = m500.value * 500;
    let a5 = m200.value * 200;
    let a6 = m100.value * 100;
    let a7 = m50.value * 50;
    let a8 = m10.value * 10;
    let a9 = m5.value * 5;
    let a10 = m2.value * 2;
    let a11 = m1.value * 1;

    out.innerHTML = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + " руб.";
}