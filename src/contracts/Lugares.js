export const CONTRATO_LUGARES_ADDRESS = "0x9Ea4Cf5480910306385f146697Ba2af4A6b17ada"; //Address del Contrato

export const CONTRATO_LUGARES_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nombre",
				"type": "string"
			}
		],
		"name": "eliminarLugar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_usuariosContrato",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			}
		],
		"name": "LugarEliminado",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "nombre",
				"type": "string"
			}
		],
		"name": "LugarRegistrado",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nombre",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_precio",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_cupos",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "_guiaTuristas",
				"type": "address"
			}
		],
		"name": "registrarLugar",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "obtenerDuenno",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_cuenta",
				"type": "address"
			}
		],
		"name": "obtenerGuia",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "cuenta",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "nombreCompleto",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "estado",
						"type": "bool"
					}
				],
				"internalType": "struct Usuarios.GuiaTuristas",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nombre",
				"type": "string"
			}
		],
		"name": "verLugar",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "nombre",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "precio",
						"type": "uint256"
					},
					{
						"internalType": "uint8",
						"name": "cupos",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "guiaTuristas",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "estado",
						"type": "bool"
					}
				],
				"internalType": "struct Lugares.Lugar",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "verLugares",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "nombre",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "precio",
						"type": "uint256"
					},
					{
						"internalType": "uint8",
						"name": "cupos",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "guiaTuristas",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "estado",
						"type": "bool"
					}
				],
				"internalType": "struct Lugares.Lugar[]",
				"name": "_resultado",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]