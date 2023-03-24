"use strict";
let display = document.querySelector("#display");
let result = document.querySelector("#result");
let button = document.querySelectorAll(".btn");
let memory = 0;
button.forEach(btn => {
    btn.addEventListener('click', function (e) {
        display.value += this.value;
    });
});
function calculate() {
    let displayValue = display.value;
    display.value = eval(displayValue);
}
function degree() {
    display.value = (parseFloat(display.value) * (180 / Math.PI)).toFixed(8);
}
function fixedExpo() {
    let value = Number(display.value).toExponential();
    display.value = value;
}
function memoryClear() {
    let x = localStorage.clear();
    x = 0;
    document.getElementById('result').innerHTML = memory.toString();
    display.value = "";
}
function memoryRecall() {
    let x = localStorage.getItem(memory.toString());
    document.getElementById('result').innerHTML = x;
    console.log(localStorage.getItem(memory.toString()));
    display.value = display.value + x;
}
function memoryPlus() {
    var result = (Number(localStorage.getItem(memory.toString())) + Number(display.value)).toString();
    console.log(result);
    localStorage.setItem(memory.toString(), result);
    document.getElementById('result').innerHTML = result;
}
function memoryMinus() {
    var result = (Number(localStorage.getItem(memory.toString())) - Number(display.value)).toString();
    console.log(result);
    localStorage.setItem(memory.toString(), result);
    document.getElementById('result').innerHTML = result;
}
function memoryStore() {
    var _a, _b;
    localStorage.setItem(memory.toString(), display.value);
    var mem = localStorage.getItem(memory.toString());
    result.innerHTML = (_a = mem === null || mem === void 0 ? void 0 : mem.toString()) !== null && _a !== void 0 ? _a : '';
    document.getElementById('result').innerHTML = (_b = mem === null || mem === void 0 ? void 0 : mem.toString()) !== null && _b !== void 0 ? _b : '';
}
function trignometry() {
    let x = document.getElementById('trigno').value;
    if (x == 'sin') {
        sin();
    }
    else if (x == 'cos') {
        cos();
    }
    else if (x == 'tan') {
        tan();
    }
}
function sin() {
    display.value = Math.sin(parseFloat(display.value) * Math.PI / 180).toFixed(8);
    document.getElementById("trigno").value = "trignometry";
}
function cos() {
    display.value = Math.cos(parseFloat(display.value) * Math.PI / 180).toFixed(8);
    document.getElementById("trigno").value = "trignometry";
}
function tan() {
    display.value = Math.tan(parseFloat(display.value) * Math.PI / 180).toFixed(8);
    document.getElementById("trigno").value = "trignometry";
}
function func() {
    let x = document.getElementById('func').value;
    if (x == 'floor') {
        floor();
    }
    else if (x == 'ceil') {
        ceil();
    }
}
function floor() {
    display.value = Math.floor(Number(display.value)).toString();
    document.getElementById("func").value = "function";
}
function ceil() {
    display.value = Math.ceil(Number(display.value)).toString();
    document.getElementById("func").value = "function";
}
function pi() {
    if (display.value === '') {
        display.value = "3.14";
    }
    else {
        display.value = (Number(display.value) * 3.14).toFixed(10);
    }
}
function e() {
    if (display.value === "") {
        display.value = "Math.E";
    }
    else {
        display.value = (Number(display.value) * Math.E).toFixed(10);
    }
}
function clearDisplay() {
    display.value = '';
}
function oneClear() {
    display.value = display.value.slice(0, display.value.length - 1);
}
function xpower() {
    display.value = (Math.pow(Number(display.value), 2)).toFixed(10);
}
function oneByNumber() {
    display.value = (1 / Number(display.value)).toFixed(10);
}
function absulatevalue() {
    display.value = (Math.abs(Number(display.value))).toFixed(10);
}
function exponential() {
    display.value = (Math.exp(Number(display.value))).toFixed(10);
}
function sqroot() {
    display.value = Math.sqrt(Number(display.value)).toFixed(10);
}
function powX() {
    display.value = Math.pow(10, Number(display.value)).toFixed(10);
}
function log() {
    display.value = Math.log10(Number(display.value)).toFixed(10);
}
function ln() {
    display.value = Math.log(Number(display.value)).toFixed(10);
}
function factorial() {
    var i, num, f;
    f = 1;
    num = Number(display.value);
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    display.value = f.toString();
}
function plusMinus() {
    display.value = (Number(display.value) * -1).toString();
}
function showOpt() {
    display.value = (2 ** Number(display.value)).toString();
}
