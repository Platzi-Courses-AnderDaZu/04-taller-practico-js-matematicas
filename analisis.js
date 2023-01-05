console.log(salarios);

// Análisis personal para Juanita
function buscarPersona(namePerson) {
    // const person = salarios.find( e => {
    //     return e.name == namePerson;
    // } );
    // return person;
    return salarios.find( e => e.name == namePerson );
}

function medianaPersona(nombrePersona) {
    const trabajos = buscarPersona(nombrePersona).trabajos;
    // const ordenarTrabajos = PlatziMath.ordenarListaBidimensional(trabajos, 2);
    const salarios = trabajos.map( e => {
        return e.salario;
    }); 
    const mediana = PlatziMath.calcularMediana(salarios);
    console.log({
        trabajos,
        // ordenarTrabajos,
        salarios,
        mediana
    });
}


// console.log(persona);
