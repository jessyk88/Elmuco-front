import React from 'react';
import './Usuario.Component.css';
import logo from '../../resources/Logo.PNG';
import { HeaderComponent } from '../header/Header.Component';
import { NavigationComponent } from '../navigation/Navigation.Component';
import { BodyComponent } from '../body/Body.Component';


const title = 'Usuario: Vendedor';
const subtitle = 'STOCK EL MUNDO DEL COMPUTADOR';

const columnas = [
	{
		name: 'ID',
		selector: 'id',
		sortable: true
	},
	{
		name: 'Imagen',
		selector: 'image',
		sortable: true
	},
	{
		name: 'Descripción',
		selector: 'description',
		sortable: true
	},
	{
		name: 'Estado de Stock',
		selector: 'state',
		sortable: true
	},
	{
		name: 'Cantidad',
		selector: 'amount',
		sortable: true
	}
];

const data = [
	{
		id: '1328',
		image: 'Image1',
		description: 'MOUSE GENIUS KM 160 ALAMBRICO USB',
		state: 'Disponible',
		amount: '299'
	},
	{
		image: 'Image2',
		description: 'MOUSE LOGITECH MK 120 ALAMBRICO USB',
		id: '1329',
		state: 'Agotado',
		amount: '299'
	},
	{
		image: 'Image3',
		description: 'MOUSE LOGITECH G Mk 270 INALAMBRICO',
		id: '1330',
		state: 'Disponible',
		amount: '299'
	},
	{
		image: 'Image4',
		description: 'MOUSE LOGITECH Mk 235 USB',
		id: '1331',
		state: 'Disponible',
		amount: '299'
	},
]
export const UsuarioComponent = () => {
	return (
		<>
			<BodyComponent
				title={title}
				subtitle={subtitle}
				columns={columnas}
				data={data}
			/>
		</>
	)
};


