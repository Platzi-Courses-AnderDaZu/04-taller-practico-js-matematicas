function calcularTriangulo(lado1, lado2, base, altura) {
    console.log({
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    });
}

function calcularCuadrado(lado) {
    console.log({
        perimetro: lado * 4,
        area: lado * lado,
    });
}

const ladoCuadrado = 5;
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

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