const text = document.getElementById("Inputexto");
var statuss = true
var initial;
function encriptar() {
  limpiar();
  if(validar()){
      const encrypted = text.value
      .replaceAll(/e/gi, "enter")
      .replaceAll(/i/gi, "imes")
      .replaceAll(/a/gi, "ai")
      .replaceAll(/o/gi, "ober")
      .replaceAll(/u/gi, "ufat");
    show(encrypted);
    alerta("Tú texto ha sido encriptado");
    ProgressBar();
  }
  else{
    alerta("Introduzca caracteres válidos");
    ProgressBar();
  }
}

function desencriptar() {
  limpiar();
  if(validar()){
  const desencrypted = text.value
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  show(desencrypted);
  alerta("Tú texto ha sido desencriptado");
  ProgressBar();
  }else{
    alerta("Introduzca caracteres válidos");
    ProgressBar();
  }
}

function show(type) {
  document.getElementById("ocultar").style.display = "none";
  document.getElementById("parte2").style.justifyContent = "space-between";
  document.getElementById("TextAfter").style.color = "#495057";
  document.getElementById("TextAfter").style.display = "block";
  document.getElementById("buttonAppear").style.display = "block";
  document.getElementById("TextAfter").innerHTML = type;
}

function copiar(){
  limpiar();
  const copyText = document.getElementById("TextAfter");
  text.value = "";
  text.value = copyText.textContent;
  alerta("Tú texto ha sido copiado");
  show(copyText.textContent);
  ProgressBar();
}

function alerta(texto){
  document.getElementById("alert").style.display = "block";
  document.getElementById("alertMessage").innerHTML = texto;
  document.getElementById("Progress_Status").style.display = "block";
  if(statuss){
  const parent = document.getElementById("Progress_Status");
  const child = document.createElement("div");
  child.setAttribute("id","myprogressBar");
  parent.appendChild(child);
  statuss = false;
  initial = setTimeout(function(){
    document.getElementById("alert").style.display = "none";
    if(!statuss){
      document.getElementById("myprogressBar").remove();
    }
    statuss = true;
  },4000)
}
}

function validar(){
  //Validación sin texto vacios y solo minusculas
  const validation = /^[a-z\s.\-]+$/;
  const result = validation.test(text.value);
  return result;
}

function ProgressBar() {
  var element = document.getElementById("myprogressBar");   
  var width = 1;
  var identity = setInterval(scene, 40);
  function scene() {
    if (width >= 100) {
      clearInterval(identity);
    } else {
      width++; 
      element.style.width = width + '%'; 
    }
  }
}

function limpiar(){
  clearTimeout(initial);
  document.getElementById("alert").style.display = "none";
  if(!statuss){
    document.getElementById("myprogressBar").remove();
    statuss = true;
  }
  document.getElementById("parte2").style.justifyContent = "center";
  document.getElementById("ocultar").style.display = "block";
  document.getElementById("buttonAppear").style.display = "none";
  document.getElementById("TextAfter").style.display = "none";
}

function load(){
  statuss = true
}