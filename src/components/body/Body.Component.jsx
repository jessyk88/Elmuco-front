import React from 'react';
import './Body.Component.css';
import logo from '../../resources/Logo.PNG';
import { HeaderComponent } from '../header/Header.Component';
import { NavigationComponent } from '../navigation/Navigation.Component';
import DataTable from 'react-data-table-component';
import { customStyles } from './body.utils';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BodyComponent = ({title, subtitle, columns, data}) => {
	


	return (
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
						columns={columns}
						data={data}
						customStyles={customStyles}
						selectableRows 
						selectableRowsSingle
						pagination
					/>
				</div>
			</div>
		</>
	)
};


