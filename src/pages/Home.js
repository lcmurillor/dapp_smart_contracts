import { useState, useEffect } from "react";
import { ethers } from "ethers";
import {
  CONTRATO_USUARIOS_ABI,
  CONTRATO_USUARIOS_ADDRESS,
} from "../contracts/Usuarios";

import {
  CONTRATO_LUGARES_ABI,
  CONTRATO_LUGARES_ADDRESS,
} from "../contracts/Lugares";

function Home() {
  const [account, setAccount] = useState(null);
  const [contratoUsuarios, setContratoUsuarios] = useState(null);
  const [contratoLugares, setContratoLugares] = useState(null);

  const [cuenta, setCuenta] = useState("");
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState(0);

  const [guias, setGuias] = useState([]);
  const [guia, setGuia] = useState({});
  const [turistas, setTuristas] = useState([]);
  const [turista, setTurista] = useState({});

  const [lugares, setLugares] = useState([]);
  const [lugar, setLugar] = useState({});

  const [nombreLugar, setNombreLugar] = useState("");
  const [precio, setPrecio] = useState(0);
  const [cupos, setCupos] = useState(0);

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
      const contratoLugares = new ethers.Contract(
        CONTRATO_LUGARES_ADDRESS,
        CONTRATO_LUGARES_ABI,
        signer
      );
      const account = await signer.getAddress();
      const network = await provider.getNetwork();

      console.log("Cuenta conectada:", account);
      console.log("Red conectada:", network);
      console.log("Contrato en:", CONTRATO_USUARIOS_ADDRESS);

      setAccount(account);
      setContratoUsuarios(contratoUsuarios);
      setContratoLugares(contratoLugares);
    };
    init();
  }, []);

  //Funciones del contrato de usuarios
  const registrarGuia = async () => {
    try {
      const tx = await contratoUsuarios.registrarGuiaTurista(cuenta, nombre);
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
      const tx = await contratoUsuarios.registrarTurista(cuenta, nombre, edad);
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
      const resultado = await contratoUsuarios.verGuias();
      setGuias(resultado);
    } catch (error) {
      console.error("Error al ver Guias de turistas:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verGuia = async () => {
    try {
      const resultado = await contratoUsuarios.verGuia(cuenta);
      setGuia(resultado);
      setCuenta("");
    } catch (error) {
      console.error("Error al Buscar Guia de turistas:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verTuristas = async () => {
    try {
      const resultado = await contratoUsuarios.verTuristas();
      setTuristas(resultado);
    } catch (error) {
      console.error("Error al ver Turistas:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verTurista = async () => {
    try {
      const resultado = await contratoUsuarios.verTurista(cuenta);
      setTurista(resultado);
      setCuenta("");
    } catch (error) {
      console.error("Error al Buscar Turista:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const eliminarGuiaTurista = async () => {
    try {
      const tx = await contratoUsuarios.eliminarGuiaTurista(cuenta);
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
      const tx = await contratoUsuarios.eliminarTurista(cuenta);
      await tx.wait();
      setCuenta("");
      alert("Turista eliminado");
    } catch (error) {
      console.error("Error al eliminar el turistas:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  //Funciones del contrato de lugares
  const registrarLugar = async () => {
    try {
      const tx = await contratoLugares.registrarLugar(
        nombre,
        precio,
        cupos,
        cuenta
      );
      await tx.wait();
      alert("Lugar registrado");
      setNombre("");
      setPrecio(0);
      setCupos(0);
      setCuenta("");
    } catch (error) {
      console.error("Error al registrar el Lugar:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verLugares = async () => {
    try {
      const resultado = await contratoLugares.verLugares();
      setLugares(resultado);
    } catch (error) {
      console.error("Error al ver Lugares:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verLugar = async () => {
    try {
      const resultado = await contratoLugares.verLugar(nombreLugar);
      setLugar(resultado);
      setNombreLugar("");
    } catch (error) {
      console.error("Error al Buscar Lugares:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const eliminarLugar = async () => {
    try {
      const tx = await contratoLugares.eliminarLugar(nombreLugar);
      await tx.wait();
      setNombreLugar("");
      alert("Lugar eliminado");
    } catch (error) {
      console.error("Error al eliminar el Lugar:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  return (
    <div className="container">
      <h3>Cuenta del dueño: {account}</h3>
      <div>
        <h2>Administración de Guias Turisticos</h2>
        <button className="boton-naranja" onClick={registrarGuia}>
          Registrar Guía de Turistas
        </button>

        <input
          placeholder="Cuenta"
          style={{ width: "300px" }}
          onChange={(e) => setCuenta(e.target.value)}
        />
        <input
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />

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
      </div>
      <hr style={{ margin: "30px 0" }} />
      <div>
        <h2>Administración de Turistas</h2>
        <button className="boton-naranja" onClick={registrarTuristas}>
          Registrar Turistas
        </button>
        <input
          placeholder="Cuenta"
          style={{ width: "300px" }}
          onChange={(e) => setCuenta(e.target.value)}
        />
        <input
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          placeholder="Edad"
          type="number"
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
              Nombre: {t.nombreCompleto}, Cuenta: {t.cuenta}, Edad: {t.edad}{" "}
              años
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
      </div>

      <hr style={{ margin: "30px 0" }} />
      <div>
        <h2>Administración de Lugares Turisticos</h2>
        <div>
          <button className="boton-naranja" onClick={registrarLugar}>
            Registrar Lugar
          </button>
          <input
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            placeholder="Precio"
            type="number"
            onChange={(e) => setPrecio(e.target.value)}
          />
          <input
            placeholder="Cupos"
            type="number"
            style={{ width: "70px" }}
            onChange={(e) => setCupos(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Cuenta"
            style={{ width: "300px", marginLeft: "0px", marginTop: "10px" }}
            onChange={(e) => setCuenta(e.target.value)}
          />
        </div>
        <h3>Buscar Lugar por nombre:</h3>
        <button className="boton-azul" onClick={verLugar}>
          Buscar Lugar
        </button>
        <input
          placeholder="Nombre del Lugar"
          style={{ width: "300px" }}
          onChange={(e) => setNombreLugar(e.target.value)}
        />
        <p>
          Nombre: {lugar.nombre}, Precio en Wit: {lugar.precio}, Cupos:{" "}
          {lugar.cupos}, Cuenta del Guía: {lugar.guiaTuristas}
        </p>
        <h3>Lista de Lugares:</h3>
        <button className="boton-azul" onClick={verLugares}>
          Ver Lugares
        </button>
        <ul>
          {lugares.map((l, i) => (
            <li key={i}>
              Nombre: {l.nombre}, Precio en Wit: {l.precio}, Cupos: {l.cupos},
              Cuenta del Guía: {l.guiaTuristas}
            </li>
          ))}
        </ul>
        <h3>Eliminar Lugar por nombre:</h3>
        <button className="boton-rojo" onClick={eliminarLugar}>
          Eliminar Lugar
        </button>
        <input
          placeholder="Cuenta"
          style={{ width: "300px" }}
          onChange={(e) => setNombreLugar(e.target.value)}
        />
      </div>

      <hr style={{ margin: "30px 0" }} />
    </div>
  );
}

export default Home;
