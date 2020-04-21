/**
 *  Archivo de configuracion de el api de yargs
 * para realizar el codigo mas amigable y sostenible.
 */

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}