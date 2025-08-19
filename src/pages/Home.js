import { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  CONTRATO_USUARIOS_ABI,
  CONTRATO_USUARIOS_ADDRESS,
} from "../contracts/Usuarios";

function Home() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  const [cuenta, setCuenta] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);

  const [guias, setGuias] = useState([]);
  const [turistas, setTuristas] = useState([]);

  //Cunado inica el proyecto, se crea el contrato y se obtiene la cuenta del usuario.
  useEffect(() => {
    const init = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contratoUsuarios = new ethers.Contract(
        CONTRATO_USUARIOS_ADDRESS,
        CONTRATO_USUARIOS_ABI,
        signer
      );
      const account = await signer.getAddress();
      const network = await provider.getNetwork();

      console.log("Cuenta conectada:", account);
      console.log("Red conectada:", network);
      console.log("Contrato en:", CONTRATO_USUARIOS_ADDRESS);

      setAccount(account);
      setContract(contratoUsuarios);
    };
    init();
  }, []);

  //Funciones
  const registrarGuia = async () => {
    try {
      const tx = await contract.registrarGuiaTurista(cuenta, nombre);
      await tx.wait();
      alert("Guía registrado");
    } catch (error) {
      console.error("Error al registrar guía:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const cargarGuias = async () => {
      try {
      const resultado = await contract.verGuias();
    setGuias(resultado);
    } catch (error) {
      console.error("Error al registrar guía:", error);
      alert("Error: " + (error.reason || error.message));
    }
    
  };

  return (
    <div className="container">
      <h2>Cuenta del dueño: {account}</h2>
      <button className="boton-naranja" onClick={registrarGuia}>
        Registrar Guía de Turistas
      </button>

      <input
        placeholder="Cuenta"
        style={{ width: "400px" }}
        onChange={(e) => setCuenta(e.target.value)}
      />
      <input placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />

      <h3>Lista de Guías de Turistas:</h3>
      <button className="boton-azul" onClick={cargarGuias}>
        Ver Guía de Turistas
      </button>
      <ul>
        {guias.map((g, i) => (
          <li key={i}>
            {g.nombreCompleto} - {g.cuenta}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
