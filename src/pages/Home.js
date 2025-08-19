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
  const [guia, setGuia] = useState({});
  const [turistas, setTuristas] = useState([]);
  const [turista, setTurista] = useState({});
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
      setCuenta("");
      setNombre("");
      alert("Guía registrado");
    } catch (error) {
      console.error("Error al registrar guía:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const registrarTuristas = async () => {
    try {
      const tx = await contract.registrarTurista(cuenta, nombre, edad);
      await tx.wait();
      alert("Turista registrado");
      setCuenta("");
      setNombre("");
      setEdad(0);
    } catch (error) {
      console.error("Error al registrar Turista:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verGuias = async () => {
    try {
      const resultado = await contract.verGuias();
      setGuias(resultado);
    } catch (error) {
      console.error("Error al ver Guias de turistas:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verGuia = async () => {
    try {
      const resultado = await contract.verGuia(cuenta);
      setGuia(resultado);
      setCuenta("");
    } catch (error) {
      console.error("Error al Buscar Guia de turistas:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verTuristas = async () => {
    try {
      const resultado = await contract.verTuristas();
      setTuristas(resultado);
    } catch (error) {
      console.error("Error al ver Turistas:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verTurista = async () => {
    try {
      const resultado = await contract.verTurista(cuenta);
      setTurista(resultado);
      setCuenta("");
    } catch (error) {
      console.error("Error al Buscar Turista:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const eliminarGuiaTurista = async () => {
    try {
      const tx = await contract.eliminarGuiaTurista(cuenta);
      await tx.wait();
      setCuenta("");
      alert("Guía eliminado");
    } catch (error) {
      console.error("Error al eliminar el Guia de turistas:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

    const eliminarTurista = async () => {
    try {
      const tx = await contract.eliminarTurista(cuenta);
      await tx.wait();
      setCuenta("");
      alert("Turista eliminado");
    } catch (error) {
      console.error("Error al eliminar el turistas:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  return (
    <div className="container">
      <h3>Cuenta del dueño: {account}</h3>
      <h2>Administración de Guias Turisticos</h2>
      <button className="boton-naranja" onClick={registrarGuia}>
        Registrar Guía de Turistas
      </button>

      <input
        placeholder="Cuenta"
        style={{ width: "300px" }}
        onChange={(e) => setCuenta(e.target.value)}
      />
      <input placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />

      <h3>Buscar Guías de Turistas por cuenta:</h3>
      <button className="boton-azul" onClick={verGuia}>
        Buscar Guía de Turistas
      </button>
      <input
        placeholder="Cuenta"
        style={{ width: "300px" }}
        onChange={(e) => setCuenta(e.target.value)}
      />
      <p>
        Nombre: {guia.nombreCompleto}, Cuenta: {guia.cuenta}
      </p>

      <h3>Lista de Guías de Turistas:</h3>
      <button className="boton-azul" onClick={verGuias}>
        Ver Guía de Turistas
      </button>
      <ul>
        {guias.map((g, i) => (
          <li key={i}>
            Nombre: {g.nombreCompleto}, Cuenta: {g.cuenta}
          </li>
        ))}
      </ul>

      <h3>Eliminar Guías de Turistas por cuenta:</h3>
      <button className="boton-rojo" onClick={eliminarGuiaTurista}>
        Eliminar Guía de Turistas
      </button>
      <input
        placeholder="Cuenta"
        style={{ width: "300px" }}
        onChange={(e) => setCuenta(e.target.value)}
      />

      <hr style={{ margin: "30px 0" }} />
      <h2>Administración de Turistas</h2>

      <button className="boton-naranja" onClick={registrarTuristas}>
        Registrar Turistas
      </button>

      <input
        placeholder="Cuenta"
        style={{ width: "300px" }}
        onChange={(e) => setCuenta(e.target.value)}
      />
      <input placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />

      <input
        placeholder="Edad"
        style={{ width: "70px" }}
        onChange={(e) => setEdad(e.target.value)}
      />

      <h3>Buscar Turista por cuenta:</h3>
      <button className="boton-azul" onClick={verTurista}>
        Buscar Turista
      </button>
      <input
        placeholder="Cuenta"
        style={{ width: "300px" }}
        onChange={(e) => setCuenta(e.target.value)}
      />
      <p>
        Nombre: {turista.nombreCompleto}, Cuenta: {turista.cuenta}, Edad:{" "}
        {turista.edad} años
      </p>

      <h3>Lista Turistas:</h3>
      <button className="boton-azul" onClick={verTuristas}>
        Ver Turistas
      </button>
      <ul>
        {turistas.map((t, i) => (
          <li key={i}>
            Nombre: {t.nombreCompleto}, Cuenta: {t.cuenta}, Edad: {t.edad} años
          </li>
        ))}
      </ul>
       <h3>Eliminar Turistas por cuenta:</h3>
      <button className="boton-rojo" onClick={eliminarTurista}>
        Eliminar Turista
      </button>
      <input
        placeholder="Cuenta"
        style={{ width: "300px" }}
        onChange={(e) => setCuenta(e.target.value)}
      />
            <hr style={{ margin: "30px 0" }} />
    </div>
  );
}

export default Home;
