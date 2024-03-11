const boton = document.getElementById("boton");

boton.onclick = function compararPalabra (palabra){
    let input = document.getElementById("palabraIngresada");
    let validacion = true;
    
    if (input.value === palabra){
    validacion = true
    }
    else{
    validacion = false
    }
    console.log(validacion);
};