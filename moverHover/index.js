const no = document.getElementById("no");
const p = document.getElementById("puntos");
const jugar = document.getElementById("jugar");
let modal =document.getElementsByClassName(".modal");
let Puntaje = document.getElementById("puntaje");
let PuntajeMaximo = document.getElementById("puntajemax");
let Tiempo = document.getElementById("tiempo");
let tiempo = 10;

puntos = 0
puntajeMax = 0

var tamaño = 200;
const achicar =()=>{
  no.style.height = tamaño + "px";
  no.style.width = tamaño + "px";
  tamaño = tamaño - (tamaño*8/100)
  console.log(tamaño)
  
}

no.addEventListener("mousemove",()=>{
    
let x = Math.round(Math.random()* 93);
let y = Math.round(Math.random()* 90);
no.style.left = x+"%";
no.style.top = y+"%";
achicar();

puntos++
p.innerHTML = puntos;
})


const abrirModal =()=>{
    let modal = document.querySelector(".modal");
    modal.style.display = "flex";
    modal.style.animation = ("aparecer 1s forwards")

}

jugar.addEventListener("click",(e)=>{
    let modal = document.querySelector(".modal");
    puntos=0;
    tiempo = 10;
    Tiempo.innerHTML=tiempo;

    p.innerHTML = puntos
    modal.style.display = "flex";
    modal.style.animation = ("desaparecer 1s forwards");
    no.className = "start";

     setTimeout(() => {
       no.className = "pause";
       if(puntos > puntajeMax){puntajeMax=puntos}
       Puntaje.innerHTML=puntos;
       PuntajeMaximo.innerHTML=puntajeMax;
       modal.style.animation = ("aparecer 1s forwards")
       tiempo=10;
       clearInterval(cronometro);
     },10000 );
    var cronometro = setInterval(() => {
       tiempo--
       Tiempo.innerHTML=tiempo;

     }, 1000);
})

abrirModal();

