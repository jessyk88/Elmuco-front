import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navigation.Component.css'


const setAllObjectsFalse = (object) => {
	let newObject = object;
	let names = Object.keys(object); // names = ["nombre", "color", "macho", "edad"]
	for (let i = 0; i < names.length; i++) {
		let name = names[i];
		newObject = { ...newObject, [name]: false };
	}
	return newObject;
}

const isSelected = (isSelected) => isSelected ? 'enabled' : 'disabled';

const initialState = {
	bill: false,
	existence: false,
	other: false
}

const NavigationComponent = ({pageActive}) => {

	const navigate = useNavigate();
	const nav ={...initialState, [pageActive]: true };

	const setSelected = (objectToModify, pageToRender) => {
		navigate(pageToRender);
	}


	return (
		<div class="container-navigation">
			<button class={`stock-button ${isSelected(nav.bill)}`} onClick={() => setSelected('bill','/faturacion')}>
				Facturación
			</button>
			<button class={`stock-button ${isSelected(nav.existence)}`} onClick={() => setSelected('existence','/catalogo')}>
				Ver existencias
			</button>
	
		</div>
	)
};

export default memo(NavigationComponent);