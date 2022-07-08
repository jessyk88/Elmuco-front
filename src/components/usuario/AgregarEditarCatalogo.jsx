import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const catalogoModel = {
	nombreProducto: "",
  precio: null,
  cantidad: null
};

export const AgregarEditarData = ({addMethod, cancelMethod, infoObject}) => {

	const [catalog, setCatalog] = useState(infoObject || catalogoModel);
	debugger;

	return (
		<>
			<Form>
				<Form.Group className="mb-3" controlId="nombreProducto">
					<Form.Label>Nombre producto</Form.Label>
					<Form.Control type="text" placeholder="nombre producto"  defaultValue={catalog.nombreProducto}
					onKeyUp={(event) => setCatalog({...catalog, nombreProducto: event.target.value})}/>
				</Form.Group>

				<Form.Group className="mb-1" controlId="precio">
					<Form.Label>Precio</Form.Label>
					<Form.Control type="number" placeholder="precio del producto" defaultValue={catalog.precio} 
					onKeyUp={(event) => setCatalog({...catalog, precio: event.target.value})}/>
				</Form.Group>
				<Form.Group className="mb-1" controlId="cantidad">
					<Form.Label>Cantidad</Form.Label>
					<Form.Control type="number" placeholder="Cantidad de productos" defaultValue={catalog.cantidad} 
						onKeyUp={(event) => setCatalog({...catalog, cantidad: event.target.value})}/>
				</Form.Group>
				<br></br>
				<Form.Group className='mb-2'>
					<Button variant="primary" type="submit" onClick={()=> addMethod(catalog)}>
						Submit
					</Button>
					<Button variant="danger" type="submit" onClick={()=> cancelMethod()}>
						Cancel
					</Button>
				</Form.Group>
			</Form>
		</>
	)
} 