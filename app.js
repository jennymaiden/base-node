//Importamos el archivo multiplicar.js
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//Importamos la libreria de color para cambiar los colores en la terminal de node
const colors = require('colors');

const argv = require('./config/yargs').argv;

// console.log(argv.base);
/**Donde estan los comandos independientes */
let comando = argv._[0];
console.log(`Los comandos son ${argv._}`);

switch (comando) {
    case 'listar':
        console.log('Listar');
        console.log(`La base es: ${argv.base} / el limite es: ${argv.limite}`);
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        console.log(`La base es: ${argv.base} / el limite es: ${argv.limite}`);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo  creado:`, colors.green(` ${archivo}`)))
            .catch(e => console.log(`Error: ${e}`));
        break;
    default:
        console.log('No hay comando');
}

// let argv2 = process.argv;
// console.log(argv2);

// let parametro = argv[2];
// // console.log(parametro);

// let base = parametro.split('=')[1];
// console.log(base);