function sumar(a, b) {
    let resultado = a + b
    return resultado
}

function restar(a, b) {
    let resultado = a - b
    return resultado
}

function multi(a, b) {
    let resultado = a * b
    return resultado
}

function div(a, b) {
    let resultado = a / b
    return resultado
}

const caracteresProhibidos = ["+", "-", "x", "÷"];

function verificarProhibidos(visual, caracteresProhibidos) {
    for (const caracter of caracteresProhibidos) {
        if (visual.includes(caracter)) {
            return true;
        }
    }
    return false;
}

let num1 = ""
let operator = ""
let num2 = ""



let visual = ""
let pantalla = document.getElementById("pantalla")
pantalla.textContent = visual
let calculadoraFunction = true
let CambiaOpera = true


function operate(operator, num1, num2) {
    let resultado
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (operator == "+") {
        resultado = sumar(num1, num2)
        return resultado
    }
    else if (operator == "-") {
        resultado = restar(num1, num2)
        return resultado
    } else if (operator == "*") {
        resultado = multi(num1, num2)
        console.log(resultado)

        return resultado
    } else if (operator == "/") {
        resultado = div(num1, num2)

        return resultado
    }

}



function mathStatus(num) {
    if (verificarProhibidos(visual, caracteresProhibidos) === false) {
        num1 += num
    } else {
        num2 += num
    }
}

function operatorStatus(ope) {
    if (CambiaOpera === true) {
        operator = ope
    } else if (CambiaOpera === false) {

    }
}

function actualizarPantalla(actua) {
    if (visual.slice(-1) === "x" || visual.slice(-1) === "-" || visual.slice(-1) === "+" || visual.slice(-1) === "÷") {
        CambiaOpera = false;
    }

    if (CambiaOpera === false) {
        console.log("sop[as")
    } else { console.log("naadda") }

    if (visual.slice(-1) !== ("x") && visual.slice(-1) !== ("-") && visual.slice(-1) !== ("÷") && visual.slice(-1) !== ("+")) {
        CambiaOpera = true
    } else { }

    pantalla.textContent = actua
    if (visual.length >= 16) {
        calculadoraFunction = false

    } else if (visual.length < 16) {
        calculadoraFunction = true
    }


}
function actualizarResultado(visu) {
    pantalla.textContent = visu
}

let clearB = document.getElementById("clearBut")
clearB.addEventListener("click", function () {
    num1 = ""
    num2 = ""
    operator = ""
    visual = ""
    actualizarPantalla(visual)
})
let deleteB = document.getElementById("deleteBut")
deleteB.addEventListener("click", function () {
    if (!visual.includes("+") && !visual.includes("-") && !visual.includes("x") && !visual.includes("÷")) {
        num1 = num1.replace(/.$/, '');
    } else if (CambiaOpera === false) {
        operator = "";
    } else {
        num2 = num2.replace(/.$/, '');
    }
    console.log(num1, num2, operator);
    visual = visual.substring(0, visual.length - 1);
    actualizarPantalla(visual);
});

let bdiv = document.getElementById("bDiv")
bdiv.addEventListener("click", function () {
    if (verificarProhibidos(visual, caracteresProhibidos) === false) {
        if (calculadoraFunction === true && CambiaOpera === true) {
            operatorStatus("/")
            visual += "÷"
            actualizarPantalla(visual)
        } else {

        }
    } else { }
})

let bmulti = document.getElementById("bx")
bmulti.addEventListener("click", function () {
    if (verificarProhibidos(visual, caracteresProhibidos) === false) {
        if (calculadoraFunction === true && CambiaOpera === true) {
            operatorStatus("*")
            visual += "x"
            actualizarPantalla(visual)
        } else { }
    } else { }
})


let brestar = document.getElementById("b-")
brestar.addEventListener("click", function () {
    if (verificarProhibidos(visual, caracteresProhibidos) === false) {
        if (calculadoraFunction === true && CambiaOpera === true) {
            operatorStatus("-")
            visual += "-"
            actualizarPantalla(visual)
        } else { }
    } else { }
})

let bsumar = document.getElementById("b+")
bsumar.addEventListener("click", function () {

    if (calculadoraFunction === true && CambiaOpera === true) {
        operatorStatus("+")
        visual += "+"
        actualizarPantalla(visual)
    } else { }
})

let bpunto = document.getElementById("b.")
bpunto.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        visual += "."
        actualizarPantalla(visual)
    } else { }
})

let bigual = document.getElementById("b=")
bigual.addEventListener("click", function () {
    let respuesta = operate(operator, num1, num2)
    visual = respuesta
    num1 = respuesta
    num2 = ""
    operator = ""
    actualizarResultado(visual)
})


let b9 = document.getElementById("b9")
b9.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        mathStatus('9')
        console.log(num1, num2, operator)
        visual += "9"
        actualizarPantalla(visual)
    } else {

    }
})

let b8 = document.getElementById("b8")
b8.addEventListener("click", function () {
    if (calculadoraFunction === true) {

        mathStatus('8')
        console.log(num1, num2, operator)
        visual += "8"
        actualizarPantalla(visual)
    } else { }
})

let b7 = document.getElementById("b7")
b7.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        mathStatus('7')
        console.log(num1, num2, operator)
        visual += "7"
        actualizarPantalla(visual)
    } else { }
})
let b6 = document.getElementById("b6")
b6.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        mathStatus('6')
        console.log(num1, num2, operator)
        visual += "6"
        actualizarPantalla(visual)
    } else { }
})

let b5 = document.getElementById("b5")
b5.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        mathStatus('5')
        console.log(num1, num2, operator)
        visual += "5"
        actualizarPantalla(visual)
    } else { }
})
let b4 = document.getElementById("b4")
b4.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        mathStatus('4')
        console.log(num1, num2, operator)
        visual += "4"
        actualizarPantalla(visual)
    } else { }
})

let b3 = document.getElementById("b3")
b3.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        mathStatus('3')
        console.log(num1, num2, operator)
        visual += "3"
        actualizarPantalla(visual)
    } else { }
})
let b2 = document.getElementById("b2")
b2.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        mathStatus('2')
        console.log(num1, num2, operator)
        visual += "2"
        actualizarPantalla(visual)
    } else { }
})
let b1 = document.getElementById("b1")
b1.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        mathStatus('1')
        console.log(num1, num2, operator)
        visual += "1"
        actualizarPantalla(visual)
    } else { }
})
let b0 = document.getElementById("b0")
b0.addEventListener("click", function () {
    if (calculadoraFunction === true) {
        mathStatus('0')
        console.log(num1, num2, operator)
        visual += "0"
        actualizarPantalla(visual)
    }
})








