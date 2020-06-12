import React, { useState } from "react";

import "./styles.css";

import api from "../../services/api";

import { Link, useHistory } from "react-router-dom";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import { FiLogIn } from "react-icons/fi";

export default function Logon() {
    const history = useHistory();
    const [id, setId] = useState("");

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post("sessions", { id });

            //console.log(response.data.name);

            //agora que eu fiz o login e deu tudo certo, eu preciso de guardar
            //essas informações no navegador, pra eu poder fazer algumas atiivdades depois
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            //esses valores serao pegados na pagina profile
            
            history.push("/profile");

        } catch (err) {
            alert("Falha no login.");
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />

                    <button type="submit" className="button">
                        Entrar
                    </button>

                    {/* Um esquema interessante pra importar icones voce vai no site
                    feather icons, depois voce escolhe o icone que voce quiser 
                    
                        Pra fazer o acima, voce tem que isnstalar pelo coemnado:
                        npm install react-icons
                    
                        pra poder escolher o icone, voce tem que usar o 
                        import {nome_icone} from 'react-icons/fi'

                        fi= feather icons.
                        o nome do icone vc pega no site
                        ]Voce tem que por FI antes do nome do icone tbm
                    */}

                    <Link className="backLink" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
    );
}
