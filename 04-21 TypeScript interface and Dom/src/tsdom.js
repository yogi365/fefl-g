"use strict";
// const p = document.getElementById('p');
// const div = document.getElementsByTagName('div');
// const clssName = document.getElementsByClassName('.class');
// const para = document.querySelector('.para');
// const p1 = document.querySelectorAll<HTMLInputElement>('.para');
// para.innerText = "html";
// if (para) {
//     (para as HTMLParagraphElement).innerText = "html"
// }
// if (para instanceof HTMLParagraphElement) {
//     p1[0].innerText = "HTML";
// }
// const textBox = document.querySelector('#textBox') as HTMLInputElement;
// textBox?.addEventListener('input', (e:kebo) => {
//     var result = document.getElementById('result');
//     if (result) {
//         result.innerText = (e.target as HTMLInputElement).value;
//     }
// })
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
    try {
        if ((num1 instanceof HTMLInputElement) && (num2 instanceof HTMLInputElement)) {
            var result = document.getElementById('result');
            if (result) {
                result.innerText = String(Number(num1.value));
            }
        }
        else {
            throw new Error('Num1 is not an HTML Input Element');
        }
    }
    catch (exception) {
        console.error(exception);
    }
});
