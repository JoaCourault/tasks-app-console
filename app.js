import { guardarDB, leerDB } from "./helpers/crearArchivo.js";
import { confirmar, inquirerMenu, leerInput, listadoTareasBorrar, mostrarListadoCheckList, pausa } from "./helpers/inquirer.js";
import { Tareas } from "./models/Tareas.js";
// import { mostrarMenu, pausa } from "./helper/mensajes.js";

console.clear();

const main = async() =>{
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if(tareasDB) tareas.cargarTareas(tareasDB)

    let opt = '';
    while(opt !== '0'){
        opt = await inquirerMenu(); console.log('\n');
        // Crear tarea
        if(opt === '1'){
            const desc = await leerInput('Introduzca una descripcion para la tarea: ')
            tareas.crearTerea(desc);
        }
        // Listar tareas.
        else if(opt === '2') console.log(tareas.listadoCompleto());
        // Listar tareas completadas.
        else if(opt === '3') console.log(tareas.listadoCompletoCompletadas());
        // Listar tareas pendientes.
        else if(opt === '4') console.log(tareas.listadoCompletoPendientes());
        // Completar tarea(s).
        else if(opt === '5'){
            const ids = await mostrarListadoCheckList(tareas.listadoArr);
            tareas.toggle(ids);
        }
        // Eliminar tarea.
        else if(opt === '6'){
            const borrar = await listadoTareasBorrar(tareas.listadoArr);
            if(borrar!=='0') await confirmar(`Desea eliminar la tarea: ${tareas._listado[borrar].desc}`)? tareas.eliminarTarea(borrar) : console.log('Tarea no eliminada!');
            else console.log('Operacion cancelada!');
        }
        // Salir.
        else if(opt === '0'){
            await confirmar('Desea cerrar el programa') ? console.log('Hasta luego!') : console.log('Ok!');
        }

        guardarDB(JSON.stringify(tareas.listadoArr));
        await pausa();
    }
}

main();