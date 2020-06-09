import React from 'react';

import './styles.css'

import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

import {FiLogIn} from 'react-icons/fi'

export default function Logon(){

    return (
        <div className="logon-container">
            <section className="form">
                    <img src={logoImg} alt="Logo"/>
                    <form>
                        <h1>Faça seu Logon</h1>
                        <input placeholder="Sua ID"/>
                        <button type='submit' className='button'>Entrar</button>
                    
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
                        <FiLogIn size={16} color='#e02041'/>
                        <a href="/register">Não tenho cadastro</a>
                    
                   
                    </form>
            </section>
            <img src={heroesImg} alt="Heroes"></img>
        </div>
        
    )
}