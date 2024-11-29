import './telaTrilha.css';
import { Link } from "react-router-dom";

function TelaTrilha() {
    return (
        <div className='container-telatrilha'>
            <div className='container-logo-telatrilha'>
                <Link to="/">
                    <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
                </Link>
            </div>
            <div className='container-navbar'>
                <a href="/">SOBRE</a>
                <a href="/">HORÁRIOS DAS COLETAS</a>
                <a href="/">ARTIGOS</a>
                <a href="/">ECOPONTOS</a>
            </div>
            <div className='btn-login-telatrilha'>
                <Link className="button" to="/Login">ADMIN</Link>
            </div>
            <div className='container-titulo-alt-trilha'>
                <h2><span className='highlight'>Trilha</span> de Objetivos</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta-telatrilha'/>
                <p>Manipule quests e badges!</p>
            </div>
            <div className='container-principal'>
                <div className='container-um-quests'>
                <div className='quest-tit'>
                   <h3>Quests</h3>
                   </div>
                    <div className='inputs-quests-um'>
                        <input type="number" id="input-id" className="input-quest-trilha" placeholder="Nº" />
                        <textarea className='text-input-um' placeholder="Quest" />
                        <input type="number" id="input-id" className="input-quest" placeholder="" />
                        </div>

                        <div className='inputs-quests-dois'>
                        <input type="number" id="input-id" className="input-quest-trilha" placeholder="Nº" />
                        <textarea className='text-input-dois' placeholder="Quest"/>
                        <input type="number" id="input-id" className="input-quest" placeholder="" />
                        </div>
                        
                        <div className='inputs-quests-tres'>
                        <input type="number" id="input-id" className="input-quest-trilha" placeholder="Nº" />
                        <textarea className='text-input-tres' placeholder="Quest"/>
                        <input type="number" id="input-id" className="input-quest" placeholder="" />
                        </div>

                      
                        
                    </div>
                    <div className='container-dois-badge'>
                   <div className='badge-tit'>
                   <h3>Badge</h3>
                   </div>
                  <div className='container-inputs-badge'>
                  <input type="file" accept="image/*" className="input-imagem" />
                    
                    
                    <div className="right-column">
                        <input type="text" placeholder="Digite o título" className="input-texto" />
                        <textarea placeholder="Digite a descrição" className="input-descricao"></textarea>
                  </div>
                    </div>
                </div>

                </div>

                <div className='btn-adicionar-trilha'>
                        <button>Adicionar</button>

                    </div>
               
            </div>

          
       
    );
}

export default TelaTrilha;
