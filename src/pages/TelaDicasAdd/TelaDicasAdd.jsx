import { useState } from "react";
import "./TelasDicasAdd.css";
import { Link } from 'react-router-dom';
import api from "../../services/api";
function TelasDicasAdd(){
 
    const [tip,setTip] = useState('');
 
   const addTip = async () =>{
    try{
    const response = await api.post('/createTips',{
        description_tip:tip
    })
    alert("Dica adicionada com sucesso!")
    setTip("")
    window.location = '/TelaDicas'
} catch(error){
    alert("Erro ao adicionar a dica", error.response)
    console.error(error);
}
   }
    return (
        <div className='container-teladicasadd'>
        <div className='container-logo-teladicasadd'>
            <Link to="/">
                <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
            </Link>
        </div>
        <div className='container-navbar'>
            <Link to="/Funcionalidades">SOBRE</Link>
            <Link to="/">HORÁRIOS DAS COLETAS</Link>
            <Link to="/">ARTIGOS</Link>
            <Link to="/">ECOPONTOS</Link>
        </div>
        <div className='btn-login'>
            <Link className="button" to="/Login">ADMIN</Link>
        </div>
        <div className='container-titulo-alt'>
                <h2><span className='highlight'>Dicas</span>Diárias</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta-teladicasadd'/>
                <p>Adicione a dica aqui!</p>
            </div>
            <div className="pai-container-adddicas">
            <div className='container-adddicas'>
                    <textarea
                        className='textarea-dicas'
                        placeholder='Adicione sua dica aqui...'
                        rows='4'
                        cols='50'
                        onChange={(e) => setTip(e.target.value)}
                    ></textarea>
                    <button className='btn-add'onClick={addTip}>Adicionar Dica</button>
                </div>
 
 
            </div>
        </div>
 
    );
 
}
 
export default TelasDicasAdd;