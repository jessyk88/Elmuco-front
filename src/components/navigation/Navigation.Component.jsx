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
	existence: true,
	other: false
}

const NavigationComponent = () => {

	const navigate = useNavigate();

	const [nav, setNavBar] = useState(initialState);

	const setSelected = (objectToModify, pageToRender) => {
		const object = setAllObjectsFalse(nav);
		const newNav ={...object, [objectToModify]: true };
		//navigate(pageToRender);
		setNavBar(newNav);
	}


	return (
		<div class="container-navigation">
			<button class={`stock-button ${isSelected(nav.bill)}`} onClick={() => setSelected('bill','/faturacion')}>
				Facturación
			</button>
			<button class={`stock-button ${isSelected(nav.existence)}`} onClick={() => setSelected('existence','/usuario')}>
				Ver existencias
			</button>
			<button disabled class={`stock-button ${isSelected(nav.other)}`} onClick={() => setSelected('/other')}>
				Otro
			</button>
		</div>
	)
};

export default memo(NavigationComponent);