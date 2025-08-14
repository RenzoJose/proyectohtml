// creo 2 constantes una para los numeros y otra para el resutado de la pantalla
const result    = document.querySelector( '#pantalla' );
const operation = document.querySelectorAll( '.numeros' );


// itero sobre los botones presionados
operation.forEach( btns => {

    btns.addEventListener("click", () => {
        
        
        const btnValue   = btns.textContent;  //contiene los items del contextode los botones.
       
        const operatorMath  = ( operator ) => ['*', '/', '+', '-', '%', '.'].includes(operator) // manejo de operadores

        const resetState    = () => ( result.textContent === '0' || result.textContent === '¡ERROR!' );  // reset
          
                 
        // botones  AC / ⬅ / +/- / =
        switch ( btns.id) {
            case 'clear':
                return result.textContent = '0';
            
            case 'clearOne':
             // si tu longitud llega uno o tiene msj erros, coloca 0
                if (result.textContent.length === 1 || resetState()) {
                    result.textContent = '0';
                    }
                else{
                result.textContent = result.textContent.slice(0,-1); // borra una seccion de la cadena, presionado el boton
                }
                return;
            case 'negative':
                if ( resetState() ) return; // simplemente le digo si tienes cero o un error no continues
                
                // si la cadena empieza con negativo entonces elimina 1 negativo
                if (result.textContent.startsWith('-')) {
                    result.textContent = result.textContent.slice(1);
                }else{ // si no agrega uno
                
                result.textContent = `-${result.textContent}`
                }
                return; 
                
            case 'equal':
                try{
                    result.textContent = eval(result.textContent);
                    if (result.textContent === 'Infinity' || result.textContent === '-Infinity' ) throw new Error(`division entre 0`);
                              
                }
                catch (error){
                    result.textContent = '¡ERROR!';
                    console.warn(error.message);
                    
                }
            return;
        

            default:{  (resetState()) ? result.textContent = btnValue : result.textContent += btnValue;

                const subStr      = result.textContent.slice(-2);
                const beforeChart = subStr[0];
                const lastChart   = subStr[1];

                if (operatorMath(lastChart) && operatorMath(beforeChart)) {
                    if ( resetState() ) return;
                   
                    return result.textContent = result.textContent.slice(0, -1)
                        
                }

               
            }
            
           
        }

    })

})



    //     // boton AC
    //     if ( btnCalculation.id === 'clear' ){
    //        return result.textContent = '0';
      
    //     }
    //     //  Boton ⬅ borrar 
    //     if (btnCalculation.id === 'clearOne'){
    //         if (result.textContent.length === 1 || result.textContent === "¡ERROR!" ) { // si tu longitud llega uno o tiene msj erros, coloca 0
    //             result.textContent = '0';
    //         }
    //         else{
    //         result.textContent = result.textContent.slice(0,-1); // borra una seccion de la cadena, presionado el boton
    //         }
    //         return; // termina la ejecucion para que no tome las siguinetes condicones
    //     }
    //     // boton +/- signo negativo
    //     if (btnCalculation.id === 'negative'){

    //         if (result.textContent === '0' || result.textContent === '¡ERROR!' ) {
    //             return; // simplemente le digo si tienes cero o un error no continues
    //         }


    //         // si la cadena empieza con negativo entonces elimina 1 negativo
    //         if (result.textContent.startsWith('-')) {
    //             result.textContent = result.textContent.slice(1);
    //         }else{ // si no agrega uno
               
    //          result.textContent = `-${result.textContent}`
    //         }
    //         return;
    //     }
           
    //     // argumentamos elboton igual  con la función Eval para evaluar una expresión que da como resultado una cadena de texto o un valor numérico
    //     // boton =
    //     if (btnCalculation.id === 'equal'){
    //         // manejo de error funcion Eval
    //         try{
    //             result.textContent = eval(result.textContent);
    //             if (result.textContent === 'Infinity') {
    //                 throw new Error(`division entre 0`);
                                     
    //             }
             
    //         }
    //         catch (error){
    //             result.textContent = '¡ERROR!';
    //             console.warn(error.message);
                
    //         }
    //         return;
    //     }

    //     // si el resultado es igual a cero o al error ---> entonces reemplazalo por boton presionado 
    //     if (resetState()){
    //         result.textContent = btnpressed;
        
    //     // si no es igual 0 entonces agrega el valor del boton presionado
    //     }else{
    //        result.textContent += btnpressed;
    //     }
        
    // })
