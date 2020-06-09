import React from 'react';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'


import './style.css'

import LogoImg from '../../assets/logo.svg'

export default function NewIncident(){

    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={LogoImg} alt="Be The Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>
                   Descreva o caso detalhadamente para encontar um herói para resolver isso
                </p>

                <Link className="backLink" to="/profile">
                    <FiArrowLeft size={16} color="#e02041" />  
                    Voltar para home
                </Link>
            </section>

            <form>
                <input placeholder="Título do caso" />
                <textarea placeholder="Descrição" />
                <input placeholder="Valor em reais" />

             <button className="button" type='submit'>Cadastrar</button>   
            </form>

        </div>
    </div>
    )
}