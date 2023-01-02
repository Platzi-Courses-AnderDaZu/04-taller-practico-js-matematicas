// function calcularDescuento() {
//     const des = parseInt(descuento.value);
//     const pre = parseInt(precio.value);
//     const tot = ( pre * ( 100 - des ) ) / 100;
    
//     valor.innerText = tot;

//     console.log({
//         des,
//         pre,
//         tot
//     });
// }

// const precio = document.querySelector('.precio');
// const descuento = document.querySelector('.descuento');
// const calcular = document.querySelector('.calcular');
// const cont = document.querySelector('.container');
// const valor = document.querySelector('.valor');

// calcular.addEventListener('click', calcularDescuento);

function calcularPrecioConDescuento() {
    // precio * (100-D) / 100
    const price = Number(inputPrice.value);
    const discount = parseInt(inputDiscount.value);
    let discount2 = 0;
    const cupon = inputCupon.value;

    // if ( !price || !discount ) {
    if ( !price || !cupon ) {
        result.innerText = 'Por favor llena el formulario correctamente';
        return;
    }

    Object.keys(cupones).forEach(element => {
        if (element == cupon) {
            discount2 = Number(cupones[element]);
            // return;
        }
    });

    if ( cuponesObj[cupon] ) {
        discount2 = Number(cuponesObj[cupon]);
        // return;
    } 
    // else {
    //     result.innerText = 'Por favor ingresa un cupón valido';    
    //     return;
    // }

    function buscarCupon(cuponElement) {
        return cuponElement.name == cupon;
        // console.log({
        //     cupon,
        //     cuponElement
        // });
    }
    function buscarCupon2(cuponElement) {
        return cuponElement.name == cupon;
    }

    const cuponArray = cuponesList.filter(buscarCupon);
    const cuponArray2 = cuponesList2.find(buscarCupon2);

    if ( cuponArray.length > 0 ) {
        discount2 = cuponArray[0].descuento;
    }

    if ( cuponArray2 ) {
        discount2 = cuponArray2.descuento;
    }

    if ( discount > 100 ) {
        result.innerText = 'Por favor ingresa un descuento valido';
        return;
    }

    if ( discount2 == 0 ) {
        result.innerText = 'Por favor ingresa un cupón valido';    
        return;
    }

    // const newPrice = ( price * (100 - discount) ) / 100; 
    const newPrice2 = ( price * (100 - discount2) ) / 100; 

    // result.innerText = 'El nuevo precio con descuento es: $' + newPrice;
    result.innerText = 'El nuevo precio con descuento es: $' + newPrice2;
}

const btn = document.querySelector('#calcular');
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const result = document.querySelector('#result');
const inputCupon = document.querySelector('#cupon');

const cupones = {
    uno: 10,
    dos: 20,
    tres: 30
}

const cuponesObj = {
    'Ander': 10,
    'navidavi': 15,
    'black': 20
}

const cuponesList = [
    {
        name: 'Ander2',
        descuento: 10
    },
    {
        name: 'merca',
        descuento: 20
    }
];

cuponesList.push({
    name: 'hoy',
    descuento: 25
});

const cuponesList2 = [
    {
        name: 'menor',
        descuento: 5
    },
    {
        name: 'mayor',
        descuento: 8
    }
];

btn.addEventListener('click', calcularPrecioConDescuento);