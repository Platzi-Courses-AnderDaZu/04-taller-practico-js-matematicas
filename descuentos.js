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
            return;
        }
    });

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

btn.addEventListener('click', calcularPrecioConDescuento);