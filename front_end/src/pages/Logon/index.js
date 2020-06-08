import React from 'react';

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon(){

    return (
        <div className="logon-container">
            <section className="form">
                    <img src={logoImg} alt="Logo"/>
                    <form>
                        <h1>Faça seu Logon</h1>
                        <input placeholder="Sua ID"/>
                        <button type='submit'>Entrar</button>
                    
                        <a href="/register">Não tenho cadastro</a>

                    </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
        
    )
}