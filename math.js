function calcularTriangulo(lado1, lado2, base, altura) {
    return {
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}

function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    };
}

function calcularCirculo(diametro, radio) {
    return {
        circunferencia: diametro * Math.PI,
        areaCirculo1: ((diametro / 2) ** 2) * Math.PI,
        areaCirculo2: Math.pow(radio, 2) * Math.PI,
    };
}

function calcularAlturaTriangulo(lado1, base) {
    if (lado1 == base) {
        console.warn('Este no es un triángulo isosceles');
    } else {
        const altura = Math.sqrt( ( lado1 ** 2 ) - ( ( base ** 2 ) / 4 ) );
        return altura;
    }
}

const ladoCuadrado = 5;

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

console.group('Cuadrado');

console.log({
    ladoCuadrado
});
calcularCuadrado(10);

console.groupEnd('Cuadrado');

console.group('Triangulo');

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase
});
calcularTriangulo(1,3,1.2,4);

console.groupEnd('Triangulo');

console.group('Circle');
calcularCirculo(6,3);
console.groupEnd('Circle');