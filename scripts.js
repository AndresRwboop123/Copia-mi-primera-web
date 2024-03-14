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











});