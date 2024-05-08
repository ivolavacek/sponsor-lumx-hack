import './ContractPage.css'
import ModeContext from '../switchButton/ModeContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { useState } from "react";
import { ethers } from "ethers";
import contractABI  from "./ABI.json";
import "./ContractPage.css";

const contractAddress = "0x5fea12a995BBA34CB5Dd300A67B785cCf94a68B9";

function Contract() {
    const { language } = useContext(ModeContext);

    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [loading, setLoading] = useState("");

    const sendMembers = async (evt) => {
        evt.preventDefault();
        try {
          if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
              contractAddress,
              contractABI,
              signer,
            );
            
            // Atualiza o array de nomes antes de enviar a transação
            const namesArray = [name1, name2];
            const numbersArray = [number1, number2];
            console.log(namesArray);
            console.log(numbersArray);
    
            setLoading("Enviando, aguarde um momento...");
            console.log("Enviando")
    
            //Chamando a função no contrato e passando seus argumentos
            const sendTxn = await contract.addMembers(namesArray, numbersArray);
    
            await sendTxn.wait();
            setLoading("Enviado");
            console.log("Enviado")
           
        } 
        } catch (error) {
          setLoading("Ops, ocorreu algum erro !!")
      }
    }

    return (
        <div className="container-contract">
          <div className="sub-container">
          <div class="modal">
          <form onSubmit={sendMembers} className="form">
            <h1 className="text-contract">Envie o nome, wallet, e a porcentagem que cada um irá receber</h1>
           <div className="inputs">
            <input type="text" placeholder='Nome' className="input" />
            <input value={name1} onChange={(e) => { setName1(e.target.value); console.log('Name 1:', name1); }} type="text" placeholder="Wallet" className="input"/>
            <input value={number1} onChange={(e) => setNumber1(parseInt(e.target.value))} type="number" placeholder="Porcentagem"  className="input"/>
           </div>
    
           <div className="inputs">
            <input type="text" placeholder="Nome" className="input" />
            <input value={name2} onChange={(e) => { setName2(e.target.value); console.log('Name 2:', name2); }} type="text" placeholder="Wallet" className="input"/>
            <input value={number2} onChange={(e) => setNumber2(parseInt(e.target.value))} type="number" placeholder="Porcentagem" className="input"/>
           </div>
    
            <button type="submit" className="button-confirm">Confirmar</button>
            <span className="loading">{loading}</span>
          </form>
        </div>
        </div>
        </div>
      )
}

export default Contract;