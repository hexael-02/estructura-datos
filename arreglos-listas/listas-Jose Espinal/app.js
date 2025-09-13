  const resultado = document.getElementById("txtresultado");
 function mensaje(texto){
    console.log(texto);
    alert (texto);
    const resultado = document.getElementById("txtresultado");
    resultado.textContent = texto
}

function agregar(palabra){
    resultado.textContent = palabra
    
}


function borrar(palabra){


}

function modificar(palabra){


}

function mostrar(palabra){


}

const btnagregar = document.getElementById("btnagregar");

const btnborrar = document.getElementById("btnborrar");

const btnmodificar = document.getElementById("btnmodificar");

const btnmostrar = document.getElementById("btnmostrar");

btnagregar.addeventlistener("click", agregar ("klk"));

btnborrar.addeventlistener("click", agregar ("klk"));

btnmodificar.addeventlistener("click", agregar ("klk"));

btnmostrar.addeventlistener("click", agregar ("klk"));