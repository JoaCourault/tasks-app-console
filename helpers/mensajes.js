import 'colors';
export const mostrarMenu = async () =>{
    return new Promise(res=>{
        console.log('========================='.green);
        console.log('  Seleccione una opcion'.green);
        console.log('========================='.green);
        console.log(`${'1.'.green} Crear tarea.`);
        console.log(`${'2.'.green} Listar tareas.`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes.`);
        console.log(`${'5.'.green} Borrar tarea.`);
        console.log(`${'6.'.green} Salir.`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ', (opt)=>{
            res(opt);
            readline.close();
        });
    })
};
export const pausa = () => {
    return new Promise(res=>{
        const readline = require('readline').createInterface({
            input:process.stdin,
            output: process.stdout
        });
        readline.question(`\nPresione ${'ENTER'.green} para continuar.\n`, (opt)=>{
            res(opt);
            readline.close();
        })
    })
}
