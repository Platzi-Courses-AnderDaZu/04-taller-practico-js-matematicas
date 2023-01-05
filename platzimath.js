const PlatziMath = {

};

PlatziMath.calcularPromedio = function calcularPromedio(array) 
{
    let suma = 0;
    
    array.forEach(element => {
        suma = suma + element;
    });

    const promedio = suma / array.length;

    return promedio
}

PlatziMath.calcularPromedio2 = function calcularPromedio2(array) {
    const sumarElementos = function (acumulado, nuevoValor) {
        return acumulado + nuevoValor;
    }

    return array.reduce(sumarElementos) / array.length;
}

PlatziMath.calcularPromedio3 = function calcularPromedio3(array) {
    return array.reduce( (acumulado, nuevoValor) => acumulado + nuevoValor ) / array.length;
}

PlatziMath.esPar = function esPar(array) {
    return (array.length % 2 == 0) ? true : false;
}

PlatziMath.calcularMediana = function calcularMediana(array) 
{
    const listaEsPar = PlatziMath.esPar(array);
    if (listaEsPar) {
        const posi1 = (array.length / 2) - 1;
        const posi2 = posi1 + 1;
        const newArray = array.sort( (a,b) => a - b );
        // const listaMitades = [array[posi1], array[posi2]];
        const listaMitades = [newArray[posi1], newArray[posi2]];
        return PlatziMath.calcularPromedio3(listaMitades);
    } else {
        // const posi = Math.floor((array.length / 2) + 1);
        const posi = Math.ceil((array.length)/2);
        const newArray = array.sort( (a,b) => a - b );
        const element = newArray[posi];
        return element;
    }
}

PlatziMath.ordenarLista = function ordenarLista(a, b) {
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

PlatziMath.order = function order(array) 
{
    const ordenar = array.sort(ordenarLista);
    // const ordenar = array.sort( (a,b) => a - b );
    return ordenar;
}

PlatziMath.calcularModa = function calcularModa(array) 
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

PlatziMath.calcularModa2 = function calcularModa2(lista) 
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
    console.log(listaCount);
    const listaArray = Object.entries(listaCount);
    console.log(listaArray);
    // return listaCount;  
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const moda = listaOrdenada[0];
    const validarModa = listaOrdenada.filter( (e) => e[1] == moda[1] );
    console.log(validarModa);
    if ( validarModa.length == 1 ) {
        console.log('Moda: '+moda[0]);
        return moda[0];
    } else if( validarModa.length > 1 ) {
        console.log('No hay moda, porque varios elementos se repiten igual número de veces.');
    }
    // return listaOrdenada[0][0];
}

PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) 
{
    function ordenarListaSort(a, b) 
    {
        return b[i] - a[i];    
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

PlatziMath.promedioPonderado = function promedioPonderado(array) 
{
    // array -> [ {note: 5, credit:2}, {note: 4, credit: 3} ]
    // array.length -> cantidad de notas o creditos
    let total = 0;
    let credits = 0;
    const elements = array.forEach( e => {
        total = total + ( e['note'] * e['credit'] );
        credits = credits + e['credit'];
    } );
    const elements2 = array.map( e => { // 10, 12
        return  e['note'] * e['credit'] ;
    } );
    let promedio = total / credits;
    return {promedio, elements2 };
}