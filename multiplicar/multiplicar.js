const fs = require('fs');
var colors = require('colors/safe');

let listarTabla = (base, limite = 10) => {
    console.log('==========='.green);
    console.log(`taba de multiplicar ${base}`.green);
    console.log('==========='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${i} * ${base} = ${base * i}`);

        // data += (`${i} * ${base} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            // console.log(`${i} * ${base} = ${base * i}`);
            data += (`${i} * ${base} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    })
};

module.exports = { crearArchivo, listarTabla };