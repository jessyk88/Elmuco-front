import React from 'react';
import usuarioIcon from '../../resources/usuario-icon.PNG'
import './Header.Component.css';

export const HeaderComponent = ({title}) => {

	return (
		<div class="container-top">
			<div class="container-usuario">
				<img class="usuario-icon" width="110" height="90" src={usuarioIcon}></img>
			</div>
			<div class="title-user">{title}</div>
		</div>
	)
};