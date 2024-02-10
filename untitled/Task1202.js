function calc () {
    let v1 = document.getElementById("v1").value;
    let option = document.getElementById("option").value
    let v2 = document.getElementById("v2").value;
    let total = document.getElementById("result")

    if (option === "+") {
        total = parseInt(v1) + parseInt(v2)
    } else if (option ==="-") {
        total = parseInt(v1) - parseInt(v2)
    } else if (option ==="/") {
        total = parseInt(v1) / parseInt(v2)
    } else if (option ==="*") {
        total = parseInt(v1) * parseInt(v2)
    }
    document.getElementById("result").innerHTML = total;
    return false;
}

document.getElementById("v1").addEventListener("input", calc);
document.getElementById("option").addEventListener("change", calc);
document.getElementById("v2").addEventListener("input", calc);