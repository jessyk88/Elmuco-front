import React from 'react';
import './Login.Component.css';
import logo from '../../resources/Logo.PNG';
import { useNavigate  } from "react-router-dom";

export const LoginComponent = () => {
	const navigate = useNavigate();
	return (
		<>
			<div class="contenedor1">
				<div class="logo">
					<img width="150" height="80" src={logo}></img>
				</div>
				<div class="input_container">
					<input class="input" placeholder="Usuario" id="input1"></input>
					<input class="input" placeholder="Contraseña" type="password" id="input2"></input>
					<button class="login_button" onClick={() => navigate('/catalogo')}>
						Ingresar
					</button>
				</div>
				<div class="container_contraseña">
					<div class="title">Olvide mi Contraseña</div>
				</div>
				<button class="register_button">
					Registrarse
				</button>
			</div>
		</>
	)
};


