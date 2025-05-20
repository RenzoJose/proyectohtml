// creo 2 constantes una para los numeros y otra para el resutado de la pantalla
const resultado = document.querySelector("#pantalla");
const operacion = document.querySelectorAll(".numeros");

// creo un array con forEach(estructura de datos), con la contante que trae los numeros (contante = operacion), para hacer la argumentacion de los datos

operacion.forEach(boton => {
// creo un evento al hacer click en el boton con addEventlistener
    boton.addEventListener("click", () => {
        // console.log(boton.textContent) con esta funcion veo lo que me arroja en la consola ;


    // llamo a la constante creada en el argumento array botonpresionado y comparo la variable del evento click que contetiene el contendio, para con esa constante empezar hacer las argumentaciones
     
        const botonpresionado = boton.textContent;


    // en esta primera argumentacion establesco si la variable boton su id del html es igual a borrar entonces, llamo a la contante resultado y digo que sea igual a "0" para que muestre 0 en la pantalla. y finalizo con un retorno, para que no me tome las funciones de abajo 

        if (boton.id === "borrar"){
            resultado.textContent = "0";
            return;
        }

        // de igual forma establesco si la variable boton su id del html es igual a "clear-all" entonces llamo a la contante resultado y utilizo metodo SLICE para extraer una seccion de la cadena de numeros empezando desde principio (0) y que ese principio le borre una (-1) seccion. y finalizo con un retorno, para que no me tome las funciones de abajo,
        //  de igual forma condiciono si resultado de su cadena de numeros es 1 (propiedad lenght= evalua la longitud de una seccion) entonces coloca un 0

        if (boton.id === "clear-all"){
            if (resultado.textContent.length === 1 || resultado.textContent === "¡ERROR LOCO!" ) {
                resultado.textContent = "0";
            }
            else{
            resultado.textContent = resultado.textContent.slice(0,-1);
            }
            return;
        }
        // argumentamos elboton igual  con la función Eval para evaluar una expresión que da como resultado una cadena de texto o un valor numérico

        if (boton.id === "igual"){
            try{
                resultado.textContent = eval(resultado.textContent);
            }
            catch{
                resultado.textContent = "¡ERROR LOCO!";
            }
            return;
        }

        // si el resultado es igual a 0 entonces reemplazalo por boton presionado 
        if (resultado.textContent === "0" || resultado.textContent === "¡ERROR LOCO!"){
            resultado.textContent = botonpresionado;
        }
        // si no es igual 0 entonces agrega el valor del boton presionado
        else{
           resultado.textContent += botonpresionado;
        }
        
    })
})