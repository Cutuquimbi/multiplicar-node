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
    .command('Listar', 'Imprime en cosola', opts)
    .command('crear', 'Crea un txt con la tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}