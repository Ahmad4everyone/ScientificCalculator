
function ans(x) {
    document.getElementById("ade").value += x
}

function result() {
    document.getElementById("ade").value = eval(document.getElementById("ade").value)
}

function sin() {
    var flow = document.getElementById("ade").value
    var res = Math.sin(flow * Math.PI/180)
    document.getElementById("ade").value = res
}

function cos() {
    var flow = document.getElementById("ade").value
    var res = Math.cos(flow * Math.PI/100)
    document.getElementById("ade").value = res
}

function tan() {
    var flow = document.getElementById("ade").value
    var res = Math.tan(flow * Math.PI/100)
    document.getElementById("ade").value = res
}

function pow() {
    ade.value = Math.pow(ade.value,2)
}

function sqrt() {
    ade.value = Math.sqrt(ade.value,2)
}

function log() {
    var flow = document.getElementById("ade").value
    var res = Math.log10(flow)
    document.getElementById("ade").value = res
}

function pi() {
    ade.value = 3.14159265359
}

function e() {
    ade.value = 2.71828182846
}