export const CONTRATO_USUARIOS_ADDRESS = "0xb73cca0869b8fB35f0fa55c1Ab8435888eb63212"; //Address del Contrato

export const CONTRATO_USUARIOS_ABI = [
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
        name: "cuenta",
        type: "address",
      },
    ],
    name: "GuiaEliminado",
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
      {
        indexed: false,
        internalType: "string",
        name: "nombre",
        type: "string",
      },
    ],
    name: "GuiaRegistrado",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "turista",
        type: "address",
      },
    ],
    name: "TuristaEliminado",
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
      {
        indexed: false,
        internalType: "string",
        name: "nombre",
        type: "string",
      },
    ],
    name: "TuristaRegistrado",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cuenta",
        type: "address",
      },
    ],
    name: "eliminarGuiaTurista",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cuenta",
        type: "address",
      },
    ],
    name: "eliminarTurista",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cuenta",
        type: "address",
      },
      {
        internalType: "string",
        name: "_nombre",
        type: "string",
      },
    ],
    name: "registrarGuiaTurista",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cuenta",
        type: "address",
      },
      {
        internalType: "string",
        name: "_nombre",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_edad",
        type: "uint8",
      },
    ],
    name: "registrarTurista",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "verDuenno",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cuenta",
        type: "address",
      },
    ],
    name: "verGuia",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cuenta",
            type: "address",
          },
          {
            internalType: "string",
            name: "nombreCompleto",
            type: "string",
          },
          {
            internalType: "bool",
            name: "estado",
            type: "bool",
          },
        ],
        internalType: "struct Usuarios.GuiaTuristas",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verGuias",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cuenta",
            type: "address",
          },
          {
            internalType: "string",
            name: "nombreCompleto",
            type: "string",
          },
          {
            internalType: "bool",
            name: "estado",
            type: "bool",
          },
        ],
        internalType: "struct Usuarios.GuiaTuristas[]",
        name: "_resultado",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_cuenta",
        type: "address",
      },
    ],
    name: "verTurista",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cuenta",
            type: "address",
          },
          {
            internalType: "string",
            name: "nombreCompleto",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "edad",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "estado",
            type: "bool",
          },
        ],
        internalType: "struct Usuarios.Turista",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verTuristas",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "cuenta",
            type: "address",
          },
          {
            internalType: "string",
            name: "nombreCompleto",
            type: "string",
          },
          {
            internalType: "uint8",
            name: "edad",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "estado",
            type: "bool",
          },
        ],
        internalType: "struct Usuarios.Turista[]",
        name: "_resultado",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
