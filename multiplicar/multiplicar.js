/**
 * Require
 */

const fs = require('fs');

//Importamos la libreria de color para cambiar los colores en la terminal de node
const colors = require('colors');


let multiplicar = (base) => {

    let data = '';
    for (let i = 1; i <= 10; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }

    return data;
}
let multiplicarLimite = (base, limite) => {
    let data = '';
    console.log('=================='.red);

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;

    }

    return data;
}

let listarTabla = (base, limite = 10) => {
    console.log('=================='.red);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*1}`.green);

    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolver, reject) => {
        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        fs.writeFile(`docs-tablas/tabla-${base}.txt`, multiplicarLimite(base, limite), (err) => {
            if (err)
                reject(err)
            else
                resolver(`Tabla-${base}.txt`);

        });


    });
}

module.exports = {
    crearArchivo,
    listarTabla
}