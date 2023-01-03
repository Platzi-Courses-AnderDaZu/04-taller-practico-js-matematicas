function calcularPromedio(array) 
{
    let suma = 0;
    
    array.forEach(element => {
        suma = suma + element;
    });

    const promedio = suma / array.length;

    return promedio
}

function calcularPromedio2(array) {
    const sumarElementos = function (acumulado, nuevoValor) {
        return acumulado + nuevoValor;
    }

    return array.reduce(sumarElementos) / array.length;
}

function calcularPromedio3(array) {
    return array.reduce( (acumulado, nuevoValor) => acumulado + nuevoValor ) / array.length;
}

function esPar(array) {
    return (array.length % 2 == 0) ? true : false;
}

function calcularMediana(array) 
{
    const listaEsPar = esPar(array);
    if (listaEsPar) {
        const posi1 = (array.length / 2) - 1;
        const posi2 = posi1 + 1;
        const newArray = array.sort( (a,b) => a - b );
        // const listaMitades = [array[posi1], array[posi2]];
        const listaMitades = [newArray[posi1], newArray[posi2]];
        return calcularPromedio3(listaMitades);
    } else {
        // const posi = Math.floor((array.length / 2) + 1);
        const posi = Math.ceil((array.length)/2);
        const newArray = array.sort( (a,b) => a - b );
        const element = newArray[posi];
        return element;
    }
}

function order(array) {

    const ordenar = array.sort( (a,b) => a - b );
    return ordenar;
}