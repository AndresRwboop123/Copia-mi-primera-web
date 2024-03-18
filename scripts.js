/*alert("Hola este es mi Javascript");*/

document.addEventListener("DOMContentLoaded", function(event) {
/*let contenidoTitulo="Nombre";




let titulo=document.querySelector(".jota");  */

/*let titulo=document.getElementsByClassName(".fa-solid fa-truck-monster");*/

/*titulo.innerHTML=contenidoTitulo;*/

/* me ayudo esto https://es.quora.com/Por-qu%C3%A9-la-sentencia-document-querySelector-h1-me-devuelve-null-En-mi-documento-HTML-hay-elementos-h1-y-lo-mismo-me-pasa-con-cualquier-otro-elemento-clase-o-id-Qu%C3%A9-estoy-haciendo-mal-o-me-falta-alg%C3%BAn*/



 /*console.log(titulo);*/

 /*
let textoTitulo= titulo.innerText;
console.log(textoTitulo);
*/

/*
if(textoTitulo=="Nombre"){
    titulo.innerHTML="  Mi Web"}
    else{
        console.log("no se cumple")
    } 
 */   
/////* FUNCIONES *////



let parrafo =document.querySelector(".parrafo2");
console.log(parrafo);

let nombress="Alfredo";
let ciudad="IIca";
let gusto="moto";

function cambiarTexto(nombress ,ciudad,gusto) {
  
    let contenido = `Me llamo ${nombress} nací en ${ciudad}  y vivo en Ate.  Me gusta los ${gusto} y salir a pasear en días de sol.   Me encantaría comentarte los diferente tipos de autos para poder ayudarte en tu seleccion de compra.Cualquier duda que tengas ,estoy aqui para ayudarte . No lo dudes en este blog estoy para ayudarte.`;
    return contenido;
}


parrafo.innerText=cambiarTexto(nombress,ciudad,gusto);













const nav =document.querySelector(".nav");

window.addEventListener("scroll",function(){
    nav.classList.toggle("active",window.scrollY>0)
})
































































window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame

onload = function (){
  setTimeout(init,0)
}

init = function(){
  canvas = document.querySelector('canvas')
  ctx = canvas.getContext('2d')

  onresize = function(){
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
  }
  onresize()

  mouse = {x:canvas.width/2,y:canvas.height/2,out:false}

  canvas.onmouseout = function(){
    mouse.out = true
  }

  canvas.onmousemove = function(e){
    var rect = canvas.getBoundingClientRect()
    mouse = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      out: false
    }
  }

  gravityStrength = 10
  particles = []
  spawnTimer = 0
  spawnInterval = 10
  type = 0
  requestAnimationFrame(startLoop)
}

newParticle = function(){
  type = type?0:1
  particles.push({
    x:mouse.x,
    y:mouse.y,
    xv:type?18*Math.random()-9:24*Math.random()-12,
    yv:type?18*Math.random()-9:24*Math.random()-12,
    c:type?'rgb(240,'+((100*Math.random())|0)+','+((650*Math.random())|0)+')':'rgb(240, 240, 240)',
    s:type?5+10*Math.random():1,
    a:1
  })
}

startLoop = function(newTime){
  time = newTime
  requestAnimationFrame(loop)
}

loop = function(newTime){
  draw()
  calculate(newTime)
  requestAnimationFrame(loop)
}

draw = function(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  for(var i=0;i<particles.length;i++){
    var p = particles[i]
    ctx.globalAlpha = p.a
    ctx.fillStyle = p.c
    ctx.beginPath()
    ctx.arc(p.x,p.y,p.s,0,2*Math.PI)
    ctx.fill()
  }
}

calculate = function(newTime){
  var dt = newTime-time
  time = newTime

  if(!mouse.out){
    spawnTimer += (dt<100)?dt:100
    for(;spawnTimer>0;spawnTimer-=spawnInterval){
      newParticle()
    }
  }

  particleOverflow = particles.length-700
  if(particleOverflow>0){
    particles.splice(0,particleOverflow)
  }

  for(var i=0;i<particles.length;i++){
    var p = particles[i]
    if(!mouse.out){
      x = mouse.x-p.x
      y = mouse.y-p.y
      a = x*x+y*y
      a = a>100?gravityStrength/a:gravityStrength/100
      p.xv = (p.xv+a*x)*0.99
      p.yv = (p.yv+a*y)*0.99
    }
    p.x += p.xv
    p.y += p.yv
    p.a *= 0.99
  }
}







});




















































