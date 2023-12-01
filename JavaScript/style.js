
var abrirMenu
var fecharMenu
var btnVolta=document.getElementById("btnVoltar")
var btnAvancar= document.getElementById("btnAvancar")
var moldura=document.getElementById("moldura")
var indice=0
var temporizador

const caminho= "./img"
const prefix= "/im"
const extensao= ".png"


function abrirMenu(){

    document.getElementById('menu1').style.width='250px'
}

function fecharMenu(){
    
    document.getElementById('menu1').style.width='0px'

}

 function automatico(){
  temporizador= setInterval(Avancar, 2000)

 }

 var lista=[

    {im:1},
    {im:2},
    {im:3},
    ]
 
 btnAvancar.onclick= Avancar
 btnVoltar.onclick= Voltar
 window.onload= inicio

  function inicio(){

    btnAvancar.onclick = Avancar
    Atualizar()
    automatico()
  }
 
 function Voltar(){
   if(indice > 0){

       indice--
   }
   else{

    indice=lista.length-1
   }
   
   Atualizar()
   clearInterval(temporizador)
   automatico()
 }

  function Avancar(){

    clearInterval(temporizador)

    if(indice < lista.length-1){

        indice++
    }
    else{

        indice=0
    }
     Atualizar()
     clearInterval(temporizador)
     automatico()
 }

 function Atualizar(){

  if(indice <lista.length){

  moldura.src= caminho+prefix+lista[indice].im+extensao

  }
  else{

   alert ("O indice esta com numero maior que o ideal!")
  }
 }
