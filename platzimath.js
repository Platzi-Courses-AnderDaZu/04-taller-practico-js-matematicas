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