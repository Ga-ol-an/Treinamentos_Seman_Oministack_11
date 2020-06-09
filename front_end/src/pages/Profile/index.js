import React from 'react';
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import './style.css'

import LogoImg from '../../assets/logo.svg'

export default function Profile(){




    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt='Be the Hero'/>
                <span>Bem vinda, APAD</span>

                <Link to='/incidents/new' className='button'>
                    Cadastrar novo caso
                </Link>

                <button type='button'>
                    <FiPower size={18} color='#e02041'/>
                </button>
            </header>

            {/* Agora vou listar os casos por ul li */}
            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong> CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00 </p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong> CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00 </p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>

                <li>
                    <strong> CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR</strong>
                    <p>R$ 120,00 </p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3' />
                    </button>
                </li>
            </ul>


        </div>


    );
}