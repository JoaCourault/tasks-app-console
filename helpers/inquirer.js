
import inquirer from 'inquirer';
import 'colors';

export const listadoTareasBorrar = async (tareas = []) =>{
    const choices = [];
    choices.unshift({
        value:'0',
        name:`${'0. '.green} ${'CANCELAR'}.`
    })
    tareas.forEach((tarea, i)=>{

        const idx = `${i + 1}.`.green;

        choices.push({
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        })
    });
    const {id} = await inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]);
    return id;
}
export const mostrarListadoCheckList = async (tareas = []) =>{
    const choices = [];
    tareas.forEach((tarea, i)=>{
        const idx = `${i + 1}.`.green;
        choices.push({
            value: tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: ((tarea.completadoEn!==null) ? true : false)
        })
    });
    const {ids} = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'ids',
            message: 'selecciones',
            choices
        }
    ]);
    return ids;
}

export const confirmar = async (message) => {
    const {res} = await inquirer.prompt([
        {
            type:'confirm',
            name:'res',
            message: message
        }
    ]);
    return res;
}


const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea.`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas.`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes.`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s).`
            },
            {
                value: '6',
                name: `${'6.'.green} Borrar tarea.`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir.`
            }
        ]
    }
];
export const pausa = async () =>{
    const {enter} = await inquirer.prompt([
        {
            type:'input',
            name: 'enter',
            message:`Presione ${'ENTER'.green} para continuar.`
        }
    ]);
    return enter;
}

export const inquirerMenu = async () => {
    console.clear();
    console.log('========================='.green);
    console.log('  Seleccione una opción'.white);
    console.log('========================='.green);
    const {opcion} = await inquirer.prompt(preguntas);
    return opcion;
};
export const leerInput = async (message = '???') =>{
    const {msj} = await inquirer.prompt([
        {
            type:'input',
            name:'msj',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Por favor ingrese un valor.'
                }
                return true;
            }
        }
    ])
    return msj;
}