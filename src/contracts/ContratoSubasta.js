// src/contracts/SimpleStorage.js

export const CONTRACT_ADDRESS = "0x3fc81cb5281Bd407f13f093741E7536f89CBc697";

export const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ofertante",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "monto",
        type: "uint256",
      },
    ],
    name: "NuevaOferta",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "cuenta",
        type: "address",
      },
    ],
    name: "OferenteRegistrado",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "articulo",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "montoBase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "duracionSegundos",
        type: "uint256",
      },
    ],
    name: "SubastaCreada",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ganador",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "montoFinal",
        type: "uint256",
      },
    ],
    name: "SubastaFinalizada",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_articulo",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_montoBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duracionSegundos",
        type: "uint256",
      },
    ],
    name: "crearSubasta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizarSubasta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mejorOferta",
    outputs: [
      {
        internalType: "address",
        name: "ofertante",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "monto",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "oferentesRegistrados",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ofertar",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ofertas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registrarseComoOferente",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "subasta",
    outputs: [
      {
        internalType: "address",
        name: "administrador",
        type: "address",
      },
      {
        internalType: "string",
        name: "articulo",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "montoBase",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tiempoLimite",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "subastaActiva",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "subastaFinalizada",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verOfertaActual",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
