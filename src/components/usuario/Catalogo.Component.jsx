import React from 'react';
import logo from '../../resources/Logo.PNG';
import { HeaderComponent } from '../header/Header.Component';
import NavigationComponent from '../navigation/Navigation.Component';
import {
	title,
	subtitle,
	columnas,
	data,
} from './Catalogo.utils';
import { customStyles } from '../utils/utils';
import DataTable from 'react-data-table-component';
import { navNamesLabels } from '../navigation/Navigation.utils';
import './Catalogo.Component.css';
import { useEffect } from 'react';
import { addCatalogoService, deleteCatalogoService, getCatalogoService } from '../../services/catalogo.service';
import { useState } from 'react';
import { actions, CrudComponent } from '../../utilscomponents/Crud.Component';
import { AgregarEditarData } from './AgregarEditarCatalogo';

export const CatalogoComponent = () => {

	const [catalogo, setCatalogo] = useState(null);
	const [selected,setSelected] = useState();
	const [actionSelected, setActionSelected] = useState(actions.none); 

	useEffect(() => {
		getCatalogoService().then((res) => {
			setCatalogo(res.data)
		});
	},[])
	//Acciones para el componente crud
	const setActionCrud = (action) => {

		setActionSelected(action);

		//Delete
		if(action === actions.delete){

			if(selected === undefined ){
				alert('Se debe seleccionar un producto para eliminar')
			} else {
				debugger
				deleteCatalogoService(selected.idProducto).then(res => {
				  window.location.reload(false); 
				});  
			}
		}
	};
 
	//Para Agregar Editar componente
	const setCancel = () => {
		setActionSelected(actions.none);
	}

	const createProduct = (productObject) =>{
		addCatalogoService(productObject);
	}

	return (
		<>
			<>
				<HeaderComponent title={title} />
				<NavigationComponent pageActive={navNamesLabels.existence}/>
				<div class="contenedor2">
					<div class="logo-container">
						<img class="logo" width="80" height="50" src={logo}></img>
					</div>
					<div>
						<h1 class="title2">{subtitle}</h1>
					</div>
					<div class="table-container">
						{
							actionSelected === actions.none || actionSelected === actions.delete ?
							<>
								<CrudComponent methodToCall={setActionCrud}/>
									{catalogo !== null ?
									
									<DataTable
										columns={columnas}
										data={catalogo}
										customStyles={customStyles}
										selectableRows
										selectableRowsSingle
										onSelectedRowsChange={(state) => setSelected(state.selectedRows[0])}
										pagination
									/>:<h1>Cargando...</h1>
									}
							</>
							: <AgregarEditarData 
									cancelMethod={setCancel} 
									addMethod={createProduct} 
									infoObject={selected}/>
						}
					</div>
				</div>
			</>
		</>
	)
};

