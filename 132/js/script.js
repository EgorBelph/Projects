const m5000 = document.querySelector('.input-5000'),
 m2000 = document.querySelector('.input-2000'),
 m1000 = document.querySelector('.input-1000'),
 m500 = document.querySelector('.input-500'),
 m200 = document.querySelector('.input-200'),
 m100 = document.querySelector('.input-100'),
 m50 = document.querySelector('.input-50'),
 m10 = document.querySelector('.input-10'),
 m5 = document.querySelector('.input-5'),
 m2 = document.querySelector('.input-2'),
 m1 = document.querySelector('.input-1'),
 out = document.querySelector('.out-result'),
 button = document.querySelector('button')

button.onclick = () => {
    const a1 = m5000.value * 5000,
     a2 = m2000.value * 2000,
     a3 = m1000.value * 1000,
     a4 = m500.value * 500,
     a5 = m200.value * 200,
     a6 = m100.value * 100,
     a7 = m50.value * 50,
     a8 = m10.value * 10,
     a9 = m5.value * 5,
     a10 = m2.value * 2,
     a11 = m1.value * 1
    out.innerHTML = a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + " руб."
}
