//muestra la opcion seleccionada en el menu y quita el estilo a la previa
function seleccionar(link){
  var opciones = document.querySelectorAll('#links a');
  opciones[0].className ="";
  opciones[1].className ="";
  opciones[2].className ="";
  opciones[3].className ="";
  opciones[4].className ="";
  link.className = "seleccionado";

  /* desaparecer el menu cuando se haya seleccionado una de las opciones*/
  var x = document.getElementById("nav");
  x.className = "";
}

//muestra el menu responsivo
function responsiveMenu(){
  var x = document.getElementById("nav");
  if(x.className===""){
    x.className = "responsive";
  }else{
    x.className = "";
  }
}

//detectar el scrolling para aplicar la animacion de las habilidades
window.onscroll = function(){
  efectoHabilidades();
}

//aplicar la animacion de las habilidades
function efectoHabilidades(){
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if(distancia_skills >= 300){
    document.getElementById("html").classList.add("barra-progreso1");
    document.getElementById("bd").classList.add("barra-progreso2");
    document.getElementById("git").classList.add("barra-progreso3");
    document.getElementById("js").classList.add("barra-progreso4");
    document.getElementById("react").classList.add("barra-progreso5");
    document.getElementById("angular").classList.add("barra-progreso6");
    document.getElementById("sql").classList.add("barra-progreso7");
    document.getElementById("php").classList.add("barra-progreso8");
    document.getElementById("laravel").classList.add("barra-progreso9");
  }
}
