console.log(salarios);

// Análisis personal para Juanita
function buscarPersona(namePerson) {
    // const person = salarios.find( e => {
    //     return e.name == namePerson;
    // } );
    // return person;
    return salarios.find(e => e.name == namePerson);
}

function medianaPersona(nombrePersona) {
    const trabajos = buscarPersona(nombrePersona).trabajos;
    // const ordenarTrabajos = PlatziMath.ordenarListaBidimensional(trabajos, 2);
    const salarios = trabajos.map(e => {
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

function proyeccionPorPersona(nombrePersona) {
    const trabajos = buscarPersona(nombrePersona).trabajos;
    let ultimoSalario = 0;
    let porcentajesCrecimiento = [];

    for (let i = 1; i < trabajos.length; i++) {
        const crecimiento = trabajos[i].salario - trabajos[i - 1].salario;
        // const porcentajeCrecimiento = ((crecimiento / trabajos[i-1].salario) * 100).toFixed(2);
        // const porcentajeCrecimiento = (crecimiento / trabajos[i-1].salario).toFixed(2);
        const porcentajeCrecimiento = (crecimiento / trabajos[i - 1].salario);
        porcentajesCrecimiento.push(porcentajeCrecimiento);

        // para encontrar ultimo salario
        // if ( i == (trabajos.length - 1) ) { 
        //     ultimoSalario = trabajos[i].salario;
        // }
    }

    const mediaCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    ultimoSalario = trabajos[trabajos.length - 1].salario; // para encontrar ultimo salario
    // const proyecconSalario = ultimoSalario + ( ( ultimoSalario * mediaCrecimiento ) / 100 );
    const proyecconSalario = ultimoSalario + (ultimoSalario * mediaCrecimiento);

    // console.log({trabajos, porcentajesCrecimiento, mediaCrecimiento, ultimoSalario, proyecconSalario});
    return proyecconSalario;
}

// Análisis empresarial
const empresas = {};

salarios.forEach(persona => {
    for (trabajo of persona.trabajos) {
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }
        if (!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
});

function calcularMedianaEmpresa(nameEmpresa, year) {
    if ( empresas[nameEmpresa] && empresas[nameEmpresa][year].length > 0 ) {
        const salarios = empresas[nameEmpresa][year];
        const mediana = PlatziMath.calcularMediana(salarios);
        return mediana
    } else if( !empresas[nameEmpresa] ) {
        console.warn('Empresa no existe');
    } else if ( !empresas[nameEmpresa][year] ) {
        console.warn('No existe año para empresa '+empresas[nameEmpresa]);
    }
}

function medianaEmpresaYear(name, year) {
    if ( !empresas[name] ) {
        console.warn('Empresa no existe');
    } else if( !empresas[name][year] ) {
        console.warn('La empresa no dio salarios ese año');
    } else {
        return PlatziMath.calcularMediana(empresas[name][year]);
    }

}
console.log({empresas});