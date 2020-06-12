import React,{useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'

import './style.css'

import LogoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function Profile(){

    //agora eu estou pegando os valores que eu havia 
    //previamente guardado no storage
    const ongName= localStorage.getItem('ongName');
    const ongId= localStorage.getItem('ongId');

    //eu inicio com um array vazio pois eu sei que vou receber um array
    // e tambem tem o fato de que poderia estar vazio, caso nao houvesse incides
    const [incidents, setIncidents]=useState([])

    const history = useHistory();


    /* UseEffect dispara uma função em algum determinado momento, por exemplo,ao ser mostrado em tela 
    2 parametros:
    1º - a funçao a ser exectuado
    2º - quando a funcao vai ser exectirada
        o 2 arg é um array de dependencias e sempre que os dados dele forem mudados,
         ele ira executar a funçao escolhida no 1param.
            Se o array ficar vazio, a funçao vai ser exect. uma só vez, ao iniciar o site
         */
   
    useEffect(()=>{
        //vou colocar a rota do metodo que lista todos os incidents
        api.get('profile', {
            //a linha abaixo é o header, que vai me mostrar os caso daquela ong
            headers:{
                Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data)
        })
    //eu coloquei o ongId ali pois seria legal se essa variavel mudasse, recaregar a pagina
    //porem a variavel nao vai mudar
    },[ongId]);

   async function handleDeleteIncident(id){
       try{
           //para apagar o incident, eu devo passar o id dele no link
            //voce tb deve passar o header, pois o metodo exige
            //(uma ong só apaga os proprios casos)
           await api.delete(`/del_incid/${id}`,{
               headers:{
                   Authorization: ongId,
               }
           });
           //se chegou ate aqui, eu ja removi o incident do meu banco de dados, porem
           //ele nao vai sair da minha tela.
           /* Eu tenho duas alternativas:
                    carrego tudo denovo no useEffect
                    apago a posicaço com o ID dele, no meu vetor de incidents ja carregado (+rapido)
            */

           setIncidents(incidents.filter(incident => incident.id !== id))
           //vou fazer um filtro e caso a var id seja igual o incident.id, esse sera removido.
           //ou seja, so fica o que for diferente do filtro

       }catch{
           alert("Erro ao deletar caso, teste denovo!")
       }
   }

        function handleLogout(){
            //eu limpei o local storage, portanto ele nao loga sozinho mais
            localStorage.clear()

            history.push("/")
            
        }

    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt='Be the Hero'/>
                <span>Bem vinda, {ongName}</span>

                <Link to='/incidents/new' className='button'>
                    Cadastrar novo caso
                </Link>

                <button type='button' onClick={handleLogout}>
                    <FiPower size={18} color='#e02041'/>
                </button>
            </header>

            {/* Agora vou listar os casos por ul li */}
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident=>(
                    //a key serve pra ajudar a saber qual elemtno apagar, modificar, etc
                    //ela deve ser um valor unico
                    <li key={incident.id}>
                        <strong> CASO:</strong>
                        <p>{incident.title}</p>
    
                        <strong>DESCRIÇÃO:</strong>
                        <p>{incident.description}</p>
    
                        <strong>VALOR</strong>
                        {/* o comando abaixo é para formatar o valor em dinhero brasileiro */}
                        <p>{Intl.NumberFormat('pt-BR',{style:'currency', currency :'BRL'}).format(incident.value)}</p>
                        {/* currency===moeda */}

                        {/* se eu colocar a  handleDeleteIncident com os paraemntros no onClick, ele
                        vai passar o retorno da funçao como parametro, e nao vai passar a funçao em si.
                        Por isso, vc deve fazer a chamada com arrow function
                        
                        Nesse caso em específico, caso eu chamasse a funão da maneira errada (acima),
                        todos os incidents estariam deletados (pois eu mandaria um array com todos)
                        */}

                        <button type='button' onClick={()=>(handleDeleteIncident(incident.id))}>
                            <FiTrash2 size={20} color='#a8a8b3' />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
