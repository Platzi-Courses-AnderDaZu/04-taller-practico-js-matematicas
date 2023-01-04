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

function ordenarLista(a, b) {
    // mayor a menor
    // console.log({
    //     a,
    //     b
    // });
    // if ( a > b ) {
    //     return 1;
    // } else if( a == b ) {
    //     return 0;
    // } else if ( a < b ) {
    //     return -1;
    // }
    return a - b;
}

function order(array) 
{
    const ordenar = array.sort(ordenarLista);
    // const ordenar = array.sort( (a,b) => a - b );
    return ordenar;
}

function calcularModa(array) 
{
    let moda = {
        valor: 0,
        cantidad: 0
    };
    array.forEach(element => {
        const sele = array.filter( (e) => e == element );
        if ( moda.cantidad < sele.length ) {
            moda.cantidad = sele.length;
            moda.valor = element;

        }
        // console.log(sele);
        // console.log(moda);
    });    
    return moda;
}

function calcularModa2(lista) 
{
    const listaCount = {};
    for (let i = 0; i < lista.length; i++) 
    {    
        const element = lista[i];

        if ( listaCount[element] ) 
        {
            listaCount[element] += 1;    
        } else {
            listaCount[element] = 1;    
        }
        // listaCount[element] = lista.filter( (e) => e == element ); 
    }  
    return listaCount;  
}