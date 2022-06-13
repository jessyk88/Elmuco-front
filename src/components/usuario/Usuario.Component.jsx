import React from 'react';
import logo from '../../resources/Logo.PNG';
import { HeaderComponent } from '../header/Header.Component';
import NavigationComponent from '../navigation/Navigation.Component';
import {
	title,
	subtitle,
	columnas,
	data,
} from './Usuario.utils';
import { customStyles } from '../utils/utils';
import DataTable from 'react-data-table-component';
import './Usuario.Component.css';

export const UsuarioComponent = () => {
	return (
		<>
			<>
				<HeaderComponent title={title} />
				<NavigationComponent />
				<div class="contenedor2">
					<div class="logo-container">
						<img class="logo" width="80" height="50" src={logo}></img>
					</div>
					<div>
						<h1 class="title2">{subtitle}</h1>
					</div>

					<div class="table-container">
						<DataTable
							columns={columnas}
							data={data}
							customStyles={customStyles}
							selectableRows
							selectableRowsSingle
							pagination
						/>
					</div>
				</div>
			</>
		</>
	)
};

