import { defaultThemes } from "react-data-table-component";
export const title = 'Usuario: Vendedor';
export const subtitle = 'STOCK EL MUNDO DEL COMPUTADOR';

export const columnas = [
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

export const data = [
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
];


export const customStyles = {
    header: {
        style: {
            minHeight: '56px',
        },
    },
    headRow: {
        style: {
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderTopColor: defaultThemes.default.divider.default,
        },
    },
    headCells: {
        style: {

            borderRightStyle: 'solid',
            borderRightWidth: '1px',
            borderRightColor: defaultThemes.default.divider.default,

        },
    },

    cells: {
        style: {
            borderLeftStyle: 'solid',
            borderLeftWidth: '1px',
            borderLeftColor: defaultThemes.default.divider.default,
        },

    },
};