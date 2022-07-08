import add from '../resources/add.png';
import edit from '../resources/edit.png';
import remove from '../resources/delete.png';
import './Crud.Component.css'
import { useState } from 'react';

export const actions = {
    add: 'add',
    edit: 'edit',
    delete: 'delete',
    none: null
}

export const CrudComponent = ({methodToCall}) => {


  
    return(
        <div className={'crud-container'}>
        <button title='Agregar' onClick={() => methodToCall(actions.add) }><img src={add} width="40" height="40"></img> </button>
        <button title='Editar' onClick={() => methodToCall(actions.edit) }><img src={edit} width="40" height="40"></img> </button>
        <button title='Eliminar' onClick={() => methodToCall(actions.delete) }><img src={remove} width="40" height="40"></img> </button>
        </div>
    )
}