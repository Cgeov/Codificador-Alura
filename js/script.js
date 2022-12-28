const text = document.getElementById("Inputexto");
const area = document.getElementsByClassName("ocultar");
function encriptar() {
  const encrypted = text.value
    .replaceAll(/e/gi, "enter")
    .replaceAll(/i/gi, "imes")
    .replaceAll(/a/gi, "ai")
    .replaceAll(/o/gi, "ober")
    .replaceAll(/u/gi, "ufat");
  show(encrypted);
}

function desencriptar() {
  const desencrypted = text.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  show(desencrypted);
}

function show(type) {
  document.getElementById("ocultar").style.display = "none";
  document.getElementById("parte2").style.justifyContent = "space-between";
  document.getElementById("TextAfter").style.color = "#495057";
  document.getElementById("buttonAppear").style.display = "block";
  document.getElementById("TextAfter").innerHTML = type;
}
