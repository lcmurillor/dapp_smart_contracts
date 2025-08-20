export const CONTRATO_RESENNAS_ADDRESS = "0x1538700Bd22200b9E10891d1501161228f461b97"; //Address del Contrato

export const CONTRATO_RESENNAS_ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idResenna",
				"type": "uint256"
			}
		],
		"name": "eliminarResenna",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nombreLugar",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_turista",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "_puntaje",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "_comentario",
				"type": "string"
			}
		],
		"name": "registrarResenna",
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
			},
			{
				"internalType": "address",
				"name": "_lugaresContrato",
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
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nombreLugar",
				"type": "string"
			}
		],
		"name": "ResennaEliminada",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "nombreLugar",
				"type": "string"
			}
		],
		"name": "ResennaRegistrada",
		"type": "event"
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
				"name": "_nombreLugar",
				"type": "string"
			}
		],
		"name": "obtenerLugar",
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
		"inputs": [
			{
				"internalType": "address",
				"name": "_cuenta",
				"type": "address"
			}
		],
		"name": "obtenerTurista",
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
						"internalType": "uint8",
						"name": "edad",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "estado",
						"type": "bool"
					}
				],
				"internalType": "struct Usuarios.Turista",
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
				"internalType": "uint256",
				"name": "_idResenna",
				"type": "uint256"
			}
		],
		"name": "verResernnaPorID",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "nombreLugar",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "turista",
						"type": "address"
					},
					{
						"internalType": "uint8",
						"name": "puntaje",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "comentario",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "estado",
						"type": "bool"
					}
				],
				"internalType": "struct Resennas.Resenna",
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
				"name": "_nombreLugar",
				"type": "string"
			}
		],
		"name": "verResernnasPorNombreLugar",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "nombreLugar",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "turista",
						"type": "address"
					},
					{
						"internalType": "uint8",
						"name": "puntaje",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "comentario",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "estado",
						"type": "bool"
					}
				],
				"internalType": "struct Resennas.Resenna[]",
				"name": "_resultado",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]