var juego = ["", "", "", "", "", "", "", "", ""]
var contador = 0
var turno = true
var contadorx = 0
var contadoro = 0
window.onload = function () {
    var el = document.getElementById("body");
    el.setAttribute("style", "height:" + window.innerHeight + "px");

    var celdas = document.getElementsByClassName("celda");

    for (var celda of celdas) {
        celda.onclick = function () {
            if (this.innerHTML == "") {
                destaca()
                if (turno) {
                    this.innerHTML = "X"
                    turno = false;
                    contador = contador + 1
                    juego[this.id] = "X"
                } else {
                    this.innerHTML = "O"
                    turno = true;
                    contador = contador + 1
                    juego[this.id] = "O"
                }
                comprobar(juego)
            }
        }
    }
}

function comprobar(juego) {
    if (juego[0] == juego[1] && (juego[1] == juego[2]) && (juego[0] != "")) {
        alert("ha ganado: " + juego[0])
        if (SumandoMarcador()) {
            document.getElementById("marcadordeo").innerHTML = contadoro
        } else {
            document.getElementById("marcadordex").innerHTML = contadorx
        }
        Vaciar()
    }
    if (juego[0] == juego[3] && (juego[3] == juego[6]) && (juego[0] != "")) {
        alert("ha ganado: " + juego[0])
        if (SumandoMarcador()) {
            document.getElementById("marcadordeo").innerHTML = contadoro
        } else {
            document.getElementById("marcadordex").innerHTML = contadorx
        }
        Vaciar()
    }
    if (juego[0] == juego[4] && (juego[4] == juego[8] && juego[0] != "")) {
        alert("ha ganado: " + juego[0])
        if (SumandoMarcador()) {
            document.getElementById("marcadordeo").innerHTML = contadoro
        } else {
            document.getElementById("marcadordex").innerHTML = contadorx
        }
        Vaciar()
    }
    if (juego[3] == juego[4] && (juego[4] == juego[5]) && (juego[3] != "")) {
        alert("ha ganado: " + juego[3])
        if (SumandoMarcador()) {
            document.getElementById("marcadordeo").innerHTML = contadoro
        } else {
            document.getElementById("marcadordex").innerHTML = contadorx
        }
        Vaciar()
    }
    if (juego[6] == juego[7] && (juego[7] == juego[8]) && (juego[6] != "")) {
        alert("ha ganado: " + juego[6])
        if (SumandoMarcador()) {
            document.getElementById("marcadordeo").innerHTML = contadoro
        } else {
            document.getElementById("marcadordex").innerHTML = contadorx
        }
        Vaciar()
    }
    if (juego[1] == juego[4] && (juego[4] == juego[7]) && (juego[1] != "")) {
        alert("ha ganado: " + juego[1])
        if (SumandoMarcador()) {
            document.getElementById("marcadordeo").innerHTML = contadoro
        } else {
            document.getElementById("marcadordex").innerHTML = contadorx
        }
        Vaciar()
    }
    if (juego[2] == juego[5] && (juego[5] == juego[8]) && (juego[2] != "")) {
        alert("ha ganado: " + juego[2])
        if(SumandoMarcador()){
            document.getElementById("marcadordeo").innerHTML=contadoro
        }else{
            document.getElementById("marcadordex").innerHTML=contadorx
        }
        Vaciar()
    }
    if (juego[2] == juego[4] && (juego[4] == juego[6]) && (juego[2] != "")) {
        alert("ha ganado: " + juego[2]);
         if(SumandoMarcador()){
            document.getElementById("marcadordeo").innerHTML=contadoro
        }else{
            document.getElementById("marcadordex").innerHTML=contadorx
        }
        Vaciar()
    }
    if (contador >= 9) {
        alert("empate")
        Vaciar()
    }
}


function Vaciar() {
    var celdas = document.getElementsByClassName("celda");
    for (let c of celdas) {
        c.innerHTML = "";
        juego = ["", "", "", "", "", "", "", "", ""]
        contador = 0
    }
}

function destaca() {
    if (turno) {
        var Divo = document.getElementById("o")
        Divo.setAttribute("style", "border:" + "2px solid black")
        Divo.setAttribute("style", "background:" + "green")
        var Divx = document.getElementById("x")
        Divx.setAttribute("style", "border:" + " ")
    } else {
        var Divx = document.getElementById("x")
        Divx.setAttribute("style", "border:" + "2px solid black")
        Divx.setAttribute("style", "background:" + "green")
        var Divo = document.getElementById("o")
        Divo.setAttribute("style", "border:" + " ")
    }
}
function SumandoMarcador() {
    if (turno) {
        contadoro++
        return true
    } else {
        contadorx++
        return false
    }
}
