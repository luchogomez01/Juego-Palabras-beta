let nivelActual = 1;
let vidasActuales = 2;


const palabrasOrdenadas = {
    
    1 : ["AUTO","AGUA", "HOLA"],
    2 : ["MOTOR","LLUVIA", "ABRAN","BURROS"],
    3 : ["TORNADO","BOLIVIA","CHISTES"],
};

console.log(palabrasOrdenadas);

function elegirPalabra (nivel){
    let palabras = palabrasOrdenadas[nivel];
    return palabras[Math.floor(Math.random() * palabras.length)]    
};



function desordenarPalabra (palabra) {  
    let caracteresPalabra = palabra.split("");
    let palabraDesordenada = palabra;
    while (palabraDesordenada === palabra){
        palabraDesordenada = caracteresPalabra.sort (() => Math.random() -0.5 ).join('');      
    } 
    console.log(palabraDesordenada);
    return palabraDesordenada
};


function imprimirPalabra (palabra){
    let palabraDes = document.getElementById("palabraDesordenada");
    palabraDes.innerHTML = palabra;   
};

let mensaje = document.getElementById("mensaje"); 
const boton = document.getElementById("boton");


function imprimirNivel (nivel){
    let textoNivel = document.getElementById("nivel");
    textoNivel.innerHTML = "Nivel: " + nivel;    
};

function compararPalabra (palabraIngresada, palabraElegida) { 
    let validar = false;
    if (palabraIngresada.value == palabraElegida){
    validar = true; 
    }
    else{ 
    validar = false;  
    }
    console.log(validar);
    return validar
};

function avanzarNivel(booleano){   
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "";
    if(booleano === false){
        vidasActuales -= 1;
        mensaje.innerHTML = "incorrecto, intente nuevamente. Le quedan: " + vidasActuales + "vidas";
         if (vidasActuales === 0){
            alert("no tiene mas vidas");
            document.location.reload();
        }
    }    
    if(booleano === true){
        nivelActual +=1;
        vidasActuales = 2;
        if(nivelActual === 4){
            mensaje.innerHTML = "ganaste!!";
        }
        else{ 
            palabraElegida = elegirPalabra(nivelActual);
            imprimirPalabra(desordenarPalabra(palabraElegida));
            imprimirNivel (nivelActual);        
        }
    }
    
    console.log (nivelActual);
}


boton.onclick = () => {
    let palabraIngresada = document.getElementById("palabraIngresada");  
    let booleano = compararPalabra (palabraIngresada, palabraElegida);
    avanzarNivel(booleano);
}
let palabraElegida = elegirPalabra(nivelActual);

function main (){   
    imprimirPalabra(desordenarPalabra(palabraElegida)); 
    imprimirNivel (nivelActual); 
}
main();

















