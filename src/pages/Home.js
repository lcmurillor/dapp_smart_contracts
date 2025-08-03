import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../contracts/ContratoSubasta";

function Home() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [articulo, setArticulo] = useState("");
  const [montoBase, setMontoBase] = useState("");
  const [duracion, setDuracion] = useState("");
  const [oferta, setOferta] = useState("");
  const [subasta, setSubasta] = useState({});
  const [mejor, setMejor] = useState({});
  const [subastaActiva, setSubastaActiva] = useState(false);
  const [subastaFinalizada, setSubastaFinalizada] = useState(false);

  useEffect(() => {
    const init = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contrato = new ethers.Contract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
        signer
      );
      const acc = await signer.getAddress();
      setAccount(acc);
      setContract(contrato);
    };
    init();
  }, []);

  const registrarse = async () => {
    console.log("Llamando contrato:", contract.address, "Desde:", account);
    const tx = await contract.registrarseComoOferente();
    await tx.wait();
    alert("Registrado como oferente.");
  };

  const crearSubasta = async () => {
    const tx = await contract.crearSubasta(articulo, montoBase, duracion);
    await tx.wait();
    alert("Subasta creada.");
  };

  const ofertar = async () => {
    const tx = await contract.ofertar({ value: oferta });
    await tx.wait();
    alert("Oferta realizada.");
  };

  const finalizarSubasta = async () => {
    const tx = await contract.finalizarSubasta();
    await tx.wait();
    alert("Subasta finalizada.");
  };

  const cargarDatos = async () => {
    const info = await contract.subasta();
    const mejor = await contract.verOfertaActual();
    const activa = await contract.subastaActiva();
    const finalizada = await contract.subastaFinalizada();

    setSubasta({
      articulo: info.articulo,
      montoBase: info.montoBase.toString(),
      tiempoLimite: info.tiempoLimite.toString(),
    });

    setMejor({
      ofertante: mejor[0],
      monto: mejor[1].toString(),
    });

    setSubastaActiva(activa);
    setSubastaFinalizada(finalizada);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Subasta dApp</h1>
      <p>Cuenta: {account}</p>

      <hr />

      <h2>Registrarse</h2>
      <button onClick={registrarse}>Registrarse como oferente</button>

      <hr />

      <h2>Crear Subasta</h2>
      <input
        placeholder="Artículo"
        onChange={(e) => setArticulo(e.target.value)}
      />
      <input
        type="number"
        placeholder="Monto base (wei)"
        onChange={(e) => setMontoBase(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duración (segundos)"
        onChange={(e) => setDuracion(e.target.value)}
      />
      <button onClick={crearSubasta}>Crear subasta</button>

      <hr />

      <h2>Ofertar</h2>
      <input
        type="number"
        placeholder="Monto (wei)"
        onChange={(e) => setOferta(e.target.value)}
      />
      <button onClick={ofertar}>Ofertar</button>

      <hr />

      <h2>Finalizar</h2>
      <button onClick={finalizarSubasta}>Finalizar subasta</button>

      <hr />

      <h2>Estado de la subasta</h2>
      <button onClick={cargarDatos}>Actualizar</button>
      <p>
        <strong>Artículo:</strong> {subasta.articulo}
      </p>
      <p>
        <strong>Monto base:</strong> {subasta.montoBase}
      </p>
      <p>
        <strong>Tiempo límite:</strong> {subasta.tiempoLimite}
      </p>
      <p>
        <strong>¿Activa?:</strong> {subastaActiva ? "Sí" : "No"}
      </p>
      <p>
        <strong>¿Finalizada?:</strong> {subastaFinalizada ? "Sí" : "No"}
      </p>
      <p>
        <strong>Mejor oferta:</strong> {mejor.monto} wei de {mejor.ofertante}
      </p>
    </div>
  );
}

export default Home;
