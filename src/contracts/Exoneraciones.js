export const CONTRATO_EXONERACIONES_ADDRESS = "0x878893D214DbC4346f2AB6b86a7D4586103f21e0"; //Address del Contrato

export const CONTRATO_EXONERACIONES_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_usuariosContrato",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_reservasContrato",
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
				"internalType": "uint256",
				"name": "idReseva",
				"type": "uint256"
			}
		],
		"name": "ExoneracionRegistrada",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_idReserva",
				"type": "uint256"
			},
			{
				"internalType": "address[]",
				"name": "_turistas",
				"type": "address[]"
			}
		],
		"name": "registrarExoneracion",
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
				"internalType": "uint256",
				"name": "_idReserva",
				"type": "uint256"
			}
		],
		"name": "obtenerReservas",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "nombreLugar",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "totalCobrado",
						"type": "uint256"
					},
					{
						"internalType": "uint8",
						"name": "cuposDisponibles",
						"type": "uint8"
					},
					{
						"internalType": "address",
						"name": "guiaTuristas",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "fecha",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "estado",
						"type": "bool"
					}
				],
				"internalType": "struct Reservas.Reserva",
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
				"name": "_idExoneracion",
				"type": "uint256"
			}
		],
		"name": "verExoneracion",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "idReseva",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "turistasExonerados",
						"type": "address[]"
					}
				],
				"internalType": "struct Exoneraciones.Exoneracion",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "verExoneraciones",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "idReseva",
						"type": "uint256"
					},
					{
						"internalType": "address[]",
						"name": "turistasExonerados",
						"type": "address[]"
					}
				],
				"internalType": "struct Exoneraciones.Exoneracion[]",
				"name": "_resultado",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "verMensajeExoneraciones",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]