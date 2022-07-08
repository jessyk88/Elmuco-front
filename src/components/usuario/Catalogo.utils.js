import { defaultThemes } from "react-data-table-component";
export const title = 'Usuario: Vendedor';
export const subtitle = 'STOCK EL MUNDO DEL COMPUTADOR';

export const columnas = [
	{
		name: 'ID',
		selector: 'idProducto',
		sortable: true
	},
	{
		name: 'Descripción',
		selector: 'nombreProducto',
		sortable: true
	},
	{
		name: 'Precio',
		selector: 'precio',
		sortable: true
	},
	{
		name: 'Cantidad',
		selector: 'cantidad',
		sortable: true
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