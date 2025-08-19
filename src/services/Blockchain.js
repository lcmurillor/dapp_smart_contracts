import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS_USUARIOS } from "../contracts/Usuarios";


export const conexionContratoUsuarios = async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contratoUsuarios = new ethers.Contract(CONTRACT_ADDRESS_USUARIOS, CONTRACT_ABI, signer);
    return { contratoUsuarios, signer };
  } else {
    throw new Error("MetaMask no detectado");
  }
};
