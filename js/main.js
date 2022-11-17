let input = document.querySelector('.input');
let power = "";

function insert(num) {
    if (input.textContent == 0) {
        input.textContent = '';
        input.textContent = input.textContent + num;
    } else {
        input.textContent = input.textContent + num;
    }
}
function clean() {
    input.textContent = '';
}
function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = '0';
    }
}
function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^')
        let num = eval(power);
        let pow = tmp[1]
        input.textContent = Math.pow(num, pow);
        power = "";
        return;
    }
    if (exp) {
        input.textContent = eval(exp);
    }
}
function percent() {
    input.textContent = eval(input.textContent) / 100
}

function constants(name) {
    if (input.textContent == 0) {
        input.textContent = '';
    }
    if (name == 'pi') {
        input.textContent = input.textContent + Math.PI.toFixed(3)
    }
    if (name == 'exp') {
        input.textContent = input.textContent + Math.E.toFixed(3)
    }
}

function sqrt() {
    input.textContent = Math.sqrt(eval(input.textContent))
}
function abs() {
    input.textContent = Math.abs(eval(input.textContent))
}

function pow(name) {
    if (name == "^") {
        power = input.textContent;
        input.textContent += "^";
    }
}
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
function fact() {
    input.textContent = factorial(eval(input.textContent));
}

document.querySelector('.type').addEventListener('click', function () {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
    }
})

function trigo(name) {
    if (name == 'sin') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'cos') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'tan') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
    if (name == 'ctg') {
        if (document.querySelector('.type').textContent == "deg") {
            //В градусах
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(8).toString());
        } else {
            //В радианах
            input.textContent = parseFloat(1 / Math.tan(eval(input.textContent)).toFixed(8).toString());
        }
    }
}