//requireds

const argv = require('./config/yargs').argv;
// var colors = require('colors');
const colors = require('colors/safe');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];



// console.log('hello'.green); // outputs green text
// console.log('i like cake and pies'.underline.red) // outputs red underlined text
// console.log('inverse the color'.inverse); // inverses the color
// console.log('OMG Rainbows!'.rainbow); // rainbow
// console.log('Run the trap'.trap); // Drops the bass

// console.log(`El comando 0 es : ${comando}`);
// console.log(`El limite es: ${argv.limite}`);
// console.log(`La base  es: ${argv.base}`);

switch (comando) {

    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite).then((archivo) => {
            console.log(`archivo creado: ${ archivo.green }`);
        }).catch((err) => {
            console.log(err);
        });
        break;
    default:
        console.log('Comando no reconocido');
        break;
}