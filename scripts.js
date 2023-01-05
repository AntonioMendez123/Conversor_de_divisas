


const dollar = document.getElementById('dollar');


var Euro=document.getElementById("Euro");
var Yen=document.getElementById("Yen");
var Libra=document.getElementById("Libra");
const form=document.getElementById("form");
const errorMessage=document.getElementById("errorMessage");

function comprobarform(event){

 if (dollar != " "){
    var valoreuro= 0.95;
    var valoryen= 133.10;
    var valorlibra=0.84;
    var eurosvalor= parseFloat(dollar.value) * valoreuro;
    var yenvalor= parseFloat(dollar.value) * valoryen;
    var libravalor= parseFloat(dollar.value) * valorlibra;
    Euro.value = Math.round(eurosvalor) + " €";
    event.preventDefault();

    Yen.value= Math.round(yenvalor) + " ¥";
    event.preventDefault();

    Libra.value= Math.round(libravalor) + " £";
    event.preventDefault();

 }
 


   
}


form.addEventListener("submit",comprobarform)