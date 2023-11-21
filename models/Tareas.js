import {Tarea} from './Tarea.js';
import 'colors';
export class Tareas {
    _listado = {};
    constructor(){
        this._listado = {};
    };
    
    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    };

    // Creacion de tareas.
    crearTerea (desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    };
    cargarTareas(arr){
        arr.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    // Eliminacion de tareas.
    eliminarTarea(id = ''){
        if(this._listado[id]) delete this._listado[id];
    }


    // Listado de tareas.
    listadoCompleto(){
        let s = '';
        this.listadoArr.forEach((tarea, i)=>{
            s += `${((i + 1) + '.').toString().green} ${tarea.desc} :: ${tarea.completadoEn !== null? 'Completada'.green : 'Pendiente'.red} \n`;
        });
        return s;
    }
    listadoCompletoCompletadas(){
        let s = '';
        this.listadoArr.forEach((tarea, i)=>{
            if(tarea.completadoEn) s += `${((i + 1) + '.').toString().green} ${tarea.desc} :: ${'Completada'.green}\n`;
        });
        return s;
    }
    listadoCompletoPendientes(){
        let s = '';
        this.listadoArr.forEach((tarea, i)=>{
            if(!tarea.completadoEn) s += `${((i + 1) + '.').toString().green} ${tarea.desc} :: ${'Pendiente'.red}\n`;
        });
        return s;
    }
    
    // Completar tareas.
    toggle(idsTareasCompletadas = []){
        for(const id in this._listado){
            if(idsTareasCompletadas.includes(id)) this._listado[id].completadoEn= new Date().toISOString;
            else this._listado[id].completadoEn=null;
        }
    }
}