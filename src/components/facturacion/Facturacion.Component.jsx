import React from 'react';
import logo from '../../resources/Logo.PNG';
import { HeaderComponent } from '../header/Header.Component';
import NavigationComponent from '../navigation/Navigation.Component';
import {
	title,
	subtitle,
	columnas,
	data,
} from './Facturacion.utils';
import { customStyles } from '../utils/utils';
import DataTable from 'react-data-table-component';
import './Facturacion.Component.css';

export const FacturacionComponent = () => {
	return (
		<>
			<>
				<HeaderComponent title={title} />
				<NavigationComponent />
				<div class="contenedor2">
					<div class="logo-container2">
						<img class="logo2" width="80" height="50" src={logo}></img>
					</div>
					<form className='container-data'>
						<div class="form-group row">
							<label for="numberBill" class="col-sm-2 col-form-label">Número factura: </label>
							<div class="col-sm-10">
								<input type="text" readonly class="form-control-plaintext" id="numberBill" value="1223423345-LSKDFJG" />
							</div>
						</div>
						<div class="form-group row">
							<label for="dateBill" class="col-sm-2 col-form-label">Fecha de Emisión: </label>
							<div class="col-sm-10">
								<input type="text" readonly class="form-control-plaintext" id="dateBill" value="29/10/2021" />
							</div>
						</div>
						<div class="form-group row">
							<label for="dateBill" class="col-sm-2 col-form-label">Nombre Completo: </label>
							<div class="col-sm-10">
								<input type="text" readonly class="form-control-plaintext" id="dateBill" value="Luis Hernado Suarez" />
							</div>
						</div>
					</form>


					<div class="table-container">
						<div class="logoshopping-container">
							<button class="add-products">
								Agregar+Producto
							</button>
						</div>
						<div class="finish-container">
							<button class="finish-invoice">
								Terminar Factura
							</button>
						</div>
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

