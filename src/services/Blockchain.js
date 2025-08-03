import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../contracts/ContratoSubasta";


export const connectContract = async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
    return { contract, signer };
  } else {
    throw new Error("MetaMask no detectado");
  }
};
