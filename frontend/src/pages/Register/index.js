import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from '../../services/api'

import "./style.css";

import logoImg from "../../assets/logo.svg";

export default function Resgister() {
    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [whatsapp,setWhatsapp]=useState('');
    const [city,setCity]=useState('');
    const [uf,setUf]=useState('');

    const history = useHistory();

    //funcao que faz o cadastro do ususario
    async function handleRegister(e){
        /* O parametro e é automatico do vscode e a linha abaixo
        faz com que a pagina NAO recarregue ao se enviar o formulário */
        e.preventDefault();

         const data={ 
            name,
            email,
            whatsapp,
            city,
            uf
        } 

        try{
        //agora eu vou enviar uma resposta la pro meu metodo.
        //Os dois devem ter o mesmo link.

        const response = await api.post('cad_ongs',data);
        //o primeiro campo do api é o link que vem após aquele padrao (localhost)
        //é ele que vai te falar o link da rota post da tabela ongs.
        //nesse caso, é: http://localhost:3333/cad_ongs
        //data é a variavel qeu vou mandar, que por padrao vai em json

        //A variavel response vai me falar se deu tudo certo.
        //eu preciso de esperar tudo acabar até eu receber o valor dela (await)

        alert(`Seu ID de acesso:${response.data.id}`)
        //esse bloco esta dentro de um try catch, pois talvez dê errado
        history.push("/")
        } catch(err){
            alert(`Erro no cadastro, tente denovo`)
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entra na plataforma e ajude pessoas a
                        encontrarem os casos da sua ONG.
                    </p>

                    <Link className="backLink" to="/">
                        <FiArrowLeft size={16} color="#e02041" />
                        Já tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>

                    <input placeholder="Nome da ONG" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />

                    <input type="email" placeholder=" E-mail" 
                     value={email} 
                     onChange={(e)=>{setEmail(e.target.value)}}
                    />

                    <input placeholder="Whatsapp"
                    value={whatsapp}
                    onChange={(e)=>{setWhatsapp(e.target.value)}} 
                    />

                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={city}
                        onChange={e=>{setCity(e.target.value)}}
                        />
                        <input placeholder="UF" style={{ width: 80 }} 
                        value={uf}
                        onChange={e=>setUf(e.target.value)}/>
                    </div>

                    
                 <button className="button" type='submit'>Cadastrar</button>   
                </form>

            </div>
        </div>
    );
}
