
let cadena = 'kdkf+dkfkñ4+';

const lastChart  = cadena.slice(-1);    // traete el ultimo caracter 

const operatorMath  = ( operator ) => ['*', '/', '+', '-'].includes(operator);

console.log(operatorMath(lastChart));
const subcadena = cadena.slice(-2);
console.log( subcadena[1]);


const eliminaUno = subcadena.slice(-1);



// console.log(subcadena === lastChart.repeat(2));


// if (operatorMath(lastChart)) {

//     if (subcadena === lastChart.repeat(2)) {
//         console.log(cadena.slice(-1));
         
        
//     }
    
// }

// console.log(cadena);

