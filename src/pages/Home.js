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

import {
  CONTRATO_RESERVAS_ABI,
  CONTRATO_RESERVAS_ADDRESS,
} from "../contracts/Reservas";

import {
  CONTRATO_EXONERACIONES_ABI,
  CONTRATO_EXONERACIONES_ADDRESS,
} from "../contracts/Exoneraciones";

import {
  CONTRATO_RESENNAS_ABI,
  CONTRATO_RESENNAS_ADDRESS,
} from "../contracts/Resennas";

function Home() {
  const [account, setAccount] = useState(null);
  const [contratoUsuarios, setContratoUsuarios] = useState(null);
  const [contratoLugares, setContratoLugares] = useState(null);
  const [contratoReservas, setContratoReservas] = useState(null);
  const [contratoExoneraciones, setContratoExoneraciones] = useState(null);
  const [contratoResennas, setContratoResennas] = useState(null);

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
  const [fecha, setFecha] = useState("");

  const [reserva, setReserva] = useState({});
  const [reservas, setReservas] = useState([]);
  const [id, setId] = useState(0);
  const [monto, setMonto] = useState("");
  const [cuentas, setCuentas] = useState("");

  const [exoneracion, setExoneracion] = useState({});
  const [exoneraciones, setExoneraciones] = useState([]);
  const [mensajeLega, setMensajeLegal] = useState("");

  const [puntaje, setPuntaje] = useState(0);
  const [comentario, setComentario] = useState("");

  const [resenna, setResenna] = useState({});
  const [resennas, setResennas] = useState([]);
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
      const contratoReserva = new ethers.Contract(
        CONTRATO_RESERVAS_ADDRESS,
        CONTRATO_RESERVAS_ABI,
        signer
      );
      const contratoExoneraciones = new ethers.Contract(
        CONTRATO_EXONERACIONES_ADDRESS,
        CONTRATO_EXONERACIONES_ABI,
        signer
      );

      const contratoResennas = new ethers.Contract(
        CONTRATO_RESENNAS_ADDRESS,
        CONTRATO_RESENNAS_ABI,
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
      setContratoReservas(contratoReserva);
      setContratoExoneraciones(contratoExoneraciones);
      setContratoResennas(contratoResennas);
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

  //Funciones del contrato de registros
  const registrarReserva = async () => {
    try {
      const fh = new Date(fecha);
      const timestamp = Math.floor(fh.getTime() / 1000); // Convertir fecha a timestamp
      const tx = await contratoReservas.registrarReservas(
        nombreLugar,
        cuenta,
        timestamp
      );
      await tx.wait();
      setCuenta("");
      setNombreLugar("");
      setFecha("");
      alert("Reserva registrado");
    } catch (error) {
      console.error("Error al registrar la reserva:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verReservaciones = async () => {
    try {
      const resultado = await contratoReservas.verReservas();
      setReservas(resultado);
    } catch (error) {
      console.error("Error al ver Reservaciones:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verReserva = async () => {
    try {
      const resultado = await contratoReservas.verReserva(id);
      setReserva(resultado);
      setId(0);
    } catch (error) {
      console.error("Error al Buscar Lugares:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const asignarTuristas = async () => {
    try {
      const tx = await contratoReservas.asignarTuristas(id, {
        value: ethers.parseEther(monto), // aquí va el equivalente a msg.value
      });
      setId(0);
      setMonto("");
      await tx.wait();
      alert("Turista ingresado en la reserva");
    } catch (error) {
      console.error("Error al registrar el turista:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const eliminarReserva = async () => {
    try {
      const tx = await contratoReservas.eliminarReserva(id);
      await tx.wait();
      setId(0);
      alert("Reservación eliminado");
    } catch (error) {
      console.error("Error al eliminar la reserva:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  //Funciones del contrato de exoneraciones
  const verMensajeExoneraciones = async () => {
    try {
      const resultado = await contratoExoneraciones.verMensajeExoneraciones();
      setMensajeLegal(resultado);
    } catch (error) {
      console.error("Error al ver Mensaje Exoneracion:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const registrarExoneracion = async () => {
    try {
      const cuentasProcesadas = cuentas.split(",").map((c) => c.trim());
      console.log("Cuentas de turistas:", cuentasProcesadas);

      const tx = await contratoExoneraciones.registrarExoneracion(
        id,
        cuentasProcesadas
      );
      await tx.wait();
      setId(0);
      setCuenta("");
      setCuentas("");
      alert("Turistas exonerados");
    } catch (error) {
      console.error("Error al registrar la exoneracion:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verExoneracion = async () => {
    try {
      const resultado = await contratoExoneraciones.verExoneracion(id);
      setExoneracion(resultado);
    } catch (error) {
      console.error("Error al ver Exoneracion:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verExoneraciones = async () => {
    try {
      const resultado = await contratoExoneraciones.verExoneraciones();
      setExoneraciones(resultado);
    } catch (error) {
      console.error("Error al ver Exoneraciones:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  //Funciones del contrato de resennas
  const registrarResenna = async () => {
    try {
      const tx = await contratoResennas.registrarResenna(
        nombreLugar,
        cuenta,
        puntaje,
        comentario
      );
      await tx.wait();
      setNombreLugar("");
      setCuenta("");
      setPuntaje(0);
      setComentario("");
      alert("Reseña registrado");
    } catch (error) {
      console.error("Error al registrar la Reseña:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verResernnaPorID = async () => {
    try {
      const resultado = await contratoResennas.verResernnaPorID(id);
      setResenna(resultado);
    } catch (error) {
      console.error("Error al ver Reseña por Número:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

  const verResernnasPorNombreLugar = async () => {
    try {
      const resultado = await contratoResennas.verResernnasPorNombreLugar(
        nombreLugar
      );
      setResennas(resultado);
    } catch (error) {
      console.error("Error al ver Reseña por nombre de lugar:", error);
      alert("Error: " + (error.reason || error.message));
    }
  };

    const eliminarResenna = async () => {
    try {
      const tx = await contratoResennas.eliminarResenna(id);
      await tx.wait();
      setId(0);
      alert("Reseña eliminado");
    } catch (error) {
      console.error("Error al eliminar la Reseña:", error);
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
            placeholder="Precio en Wei"
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
            placeholder="Cuenta del guía de turistas"
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
      <div>
        <h2>Administración de Reservas</h2>
        <button className="boton-naranja" onClick={registrarReserva}>
          Registrar Reserva
        </button>

        <input
          placeholder="Nombre del Lugar"
          onChange={(e) => setNombreLugar(e.target.value)}
        />
        <input
          placeholder="Cuenta del guía de turistas"
          style={{ width: "300px" }}
          onChange={(e) => setCuenta(e.target.value)}
        />

        {/* <textarea
          placeholder="Ingrese un arreglo con las cuentas de los  turistas"
          style={{ width: "500px", height: "150px", margin: "15px 0" }}
          onChange={(e) => setCuenta(e.target.value)}
        /> */}
        <div>
          <input
            placeholder="Dia de la reservación"
            type="datetime-local"
            style={{ margin: "10px 0" }}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <h3>Buscar Reserva por Número de reserva:</h3>
        <button className="boton-azul" onClick={verReserva}>
          Buscar Reserva
        </button>
        <input
          placeholder="Número de Reserva"
          type="number"
          onChange={(e) => setId(e.target.value)}
        />
        <p>
          Número de reservación: {reserva.id}, Lugar de la reserva:{" "}
          {reserva.nombreLugar}, Total Cobrado en Wit: {reserva.totalCobrado},
          Cupos disponibles: {reserva.cuposDisponibles}, Cuenta del Guía:{" "}
          {reserva.guiaTuristas}, Fecha de la reserva:{" "}
          {new Date(Number(reserva.fecha) * 1000).toLocaleString()}, Estado:{" "}
          {reserva.estado ? " Activa" : " Inactiva"}
        </p>

        <h3>Lista de Reservaciones:</h3>
        <button className="boton-azul" onClick={verReservaciones}>
          Ver Reservaciones
        </button>
        <ul>
          {reservas.map((r, i) => (
            <li key={i}>
              Número de reservación: {r.id}, Lugar de la reserva:{" "}
              {r.nombreLugar}, Total Cobrado en Wit: {r.totalCobrado}, Cupos
              disponibles: {r.cuposDisponibles}, Cuenta del Guía:{" "}
              {r.guiaTuristas}, Fecha de la reserva:{" "}
              {new Date(Number(r.fecha) * 1000).toLocaleString()}, Estado:{" "}
              {r.estado ? " Activa" : " Inactiva"}
            </li>
          ))}
        </ul>
        <h3>Asignar turista al reservación:</h3>
        <p>
          En MetaMask tiene que estar con la cuenta del turista para realizar el
          pago
        </p>
        <button className="boton-verde" onClick={asignarTuristas}>
          Pagar Reservación
        </button>
        <input
          placeholder="Número de Reserva"
          type="number"
          style={{ width: "70px" }}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          placeholder="Pagar en ETH"
          type="number"
          style={{ width: "100px" }}
          onChange={(e) => setMonto(e.target.value)}
        />
        <h3>Eliminar Reservación:</h3>
        <button className="boton-rojo" onClick={eliminarReserva}>
          Eliminar Reservación
        </button>
        <input
          placeholder="Cuenta"
          type="number"
          style={{ width: "70px" }}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <hr style={{ margin: "30px 0" }} />

      <div>
        <h2>Administración de Exoneración de responsabilidades</h2>
        <button className="boton-azul" onClick={verMensajeExoneraciones}>
          Ver Mensaje de Exoneración de Responsabilidades
        </button>
        <p>{mensajeLega}</p>
        <button className="boton-naranja" onClick={registrarExoneracion}>
          Registrar Exoneración
        </button>

        <input
          placeholder="Número de Reservación"
          type="number"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          placeholder="Cuenta del guía de turistas"
          style={{ width: "300px" }}
          onChange={(e) => setCuenta(e.target.value)}
        />

        <textarea
          placeholder="Ingrese un arreglo con las cuentas de los  turistas"
          style={{ width: "500px", height: "150px", margin: "15px 0" }}
          onChange={(e) => setCuentas(e.target.value)}
        />
        <h3>Buscar Exoneración por número:</h3>
        <button className="boton-azul" onClick={verExoneracion}>
          Buscar Exoneración
        </button>
        <input
          placeholder="Número de Reserva"
          type="number"
          style={{ width: "70px" }}
          onChange={(e) => setId(e.target.value)}
        />
        <p>
          Número de Exoneracion: {exoneracion.id}, Número de reservación:{" "}
          {exoneracion.idReseva}, Cuentas de Turistas exonerados:{" "}
          {exoneracion.turistasExonerados
            ? exoneracion.turistasExonerados.join(", ")
            : ""}
        </p>
        <h3>Registro de exoneraciones:</h3>
        <button className="boton-azul" onClick={verExoneraciones}>
          Ver Exoneraciones
        </button>
        <ul>
          {exoneraciones.map((e, i) => (
            <li key={i}>
              Número de Exoneracion: {e.id}, Número de reservación: {e.idReseva}
              , Cuentas de Turistas exonerados:{" "}
              {e.turistasExonerados ? e.turistasExonerados.join(", ") : ""}
            </li>
          ))}
        </ul>
      </div>

      <hr style={{ margin: "30px 0" }} />
      <div>
        <h2>Administración de reseñas</h2>
        <button className="boton-naranja" onClick={registrarResenna}>
          Registrar Reseña
        </button>

        <input
          placeholder="Nombre del Lugar"
          onChange={(e) => setNombreLugar(e.target.value)}
        />

        <input
          placeholder="Cuenta del turstia"
          style={{ width: "300px" }}
          onChange={(e) => setCuenta(e.target.value)}
        />

        <input
          placeholder="Puntaje"
          type="number"
          style={{ width: "70px" }}
          onChange={(e) => setPuntaje(e.target.value)}
        />
        <textarea
          placeholder="Ingrese un un comentario"
          style={{ width: "500px", height: "100px", margin: "15px 0" }}
          onChange={(e) => setComentario(e.target.value)}
        />

        <h3>Buscar Reseña por número de reseña:</h3>
        <button className="boton-azul" onClick={verResernnaPorID}>
          Buscar Reseña
        </button>
        <input
          placeholder="Número de Reseña"
          type="number"
          style={{ width: "70px" }}
          onChange={(e) => setId(e.target.value)}
        />
        <p>
          Número de Reseña: {resenna.id}, Nombre del lugar visitado:{" "}
          {resenna.nombreLugar}, Cuentas de Turistas:{" "}
          {resenna.turista}, Puntaje: {resenna.puntaje}, Comentario:{" "}
          {resenna.comentario}
        </p>

         <h3>Buscar Reseña por Nombre de Lugar:</h3>
        <button className="boton-azul" onClick={verResernnasPorNombreLugar}>
          Buscar Reseña
        </button>
        <input
          placeholder="Nombre del lugar"
          onChange={(e) => setNombreLugar(e.target.value)}
        />
         <ul>
          {resennas.map((r, i) => (
            <li key={i}>
              Número de Reseña: {r.id}, Nombre del lugar visitado:{" "}
          {r.nombreLugar}, Cuentas de Turistas:{" "}
          {r.turista}, Puntaje: {r.puntaje}, Comentario:{" "}
          {r.comentario}
            </li>
          ))}
        </ul>
         <h3>Eliminar Reseñas:</h3>
        <button className="boton-rojo" onClick={eliminarResenna}>
          Eliminar Reseña
        </button>
        <input
          placeholder="Numero de Reseña"
          type="number"
          style={{ width: "70px" }}
          onChange={(e) => setId(e.target.value)}
        />
      </div>

      

      <hr style={{ margin: "30px 0" }} />
    </div>
  );
}

export default Home;
