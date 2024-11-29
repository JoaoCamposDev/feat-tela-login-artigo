import { Link } from 'react-router-dom';
import "./TelaMateriais.css";
import api from '../../services/api'
import { useEffect, useState } from 'react';

function TelaMateriais(){


    
    const [xpUm, setXpUm] = useState('')
    const [xpDois, setXpDois] = useState('')
    const [xpTres, setXpTres] = useState('')
    const [xpQuatro, setXpQuatro] = useState('')
    const [xpCinco, setXpCinco] = useState('')
    const [materialUm, setMaterialUm] = useState('')
    const [materialDois, setMaterialDois] = useState('')
    const [materialTres, setMaterialTres] = useState('')
    const [materialQuatro, setMaterialQuatro] = useState('')
    const [materialCinco, setMaterialCinco] = useState('')
const updateXpMateriais = async () =>{
    try{
    const arrayXp = [xpUm,xpDois,xpTres,xpQuatro,xpCinco]
    const arrayMateriais = [materialUm,materialDois,materialTres,materialQuatro,materialCinco]
    for( let i = 0 ; i<= 4 ;i++){
        let id = i + 1
        let type = arrayMateriais[i]
        let xp_material = arrayXp[i]
        if( type =="" || xp_material ==""){
            alert("É necessário digitar o nome do material e seu xp correspondente")
            return
        }
    let update = await api.put("/updateMaterial",{
        id,
        type,
        xp_material
    })
    console.log("Adicionado com sucesso")
        }
    alert("Modificações realizadas com sucesso!")
    }catch(error){
        console.error(error)
    }   

}

    const [materiais,setMateriais] = useState([]);
    const getMateriais = async () =>{
        try{
        if(materiais == ''){
        const response = await api.get('/materiais')
        setMateriais(response.data.materiais)
        setMaterialUm(response.data.materiais[0].title_material)
        setMaterialDois(response.data.materiais[1].title_material)
        setMaterialTres(response.data.materiais[2].title_material)
        setMaterialQuatro(response.data.materiais[3].title_material)
        setMaterialCinco(response.data.materiais[4].title_material)
        setXpUm(response.data.materiais[0].XP_material)
        setXpDois(response.data.materiais[1].XP_material)
        setXpTres(response.data.materiais[2].XP_material)
        setXpQuatro(response.data.materiais[3].XP_material)
        setXpCinco(response.data.materiais[4].XP_material)
        }
      }catch(error){
        alert("erro ao buscar os dados", error.response.msg)
        console.error(error)
     }
    }

    useEffect(() =>{
        getMateriais()
    },[])
    return(
        <div className='container-telamaterial'>
        <div className='container-logo-telmaterial'>
            <Link to="/">
                <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
            </Link>
        </div>
        <div className='container-navbar'>
            <Link to="/">SOBRE</Link>
            <Link to="/">HORÁRIOS DAS COLETAS</Link>
            <Link to="/">ARTIGOS</Link>
            <Link to="/">ECOPONTOS</Link>
        </div>
        <div className='btn-login'>
            <Link className="button" to="/Login">ADMIN</Link>
        </div>
        <div className='container-titulo-alt'>
                <h2><span className='highlight'>Materiais</span>Recicláveis</h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='ret-coleta-telmaterial'/>
                <p>Adicione e exclua máteriais recicláveis!</p>
                </div>
            {materiais[0] ?
            <div className='pai-container-telamateriais'>



                <button className='botao-add' onClick={() => updateXpMateriais()}>OK </button>

                <div className='container-alterar-material-um'>
                <div className='container-material-um'>
                <h1>{xpUm}</h1>
                <input type="text" value={materialUm} onChange={(e) => setMaterialUm(e.target.value)}/>
                <button className='btn-um'onClick={() => setXpUm(xpUm + 5)}>+</button>
                <button className='btn-dois'onClick={() => setXpUm(xpUm - 5)}>-</button>

                </div>
                <div className='container-material-dois'>
                    <h1>{xpDois}</h1>
                    <input type="text" value={materialDois} onChange={(e) => setMaterialDois(e.target.value)}/>
                    <button className='btn-um' onClick={() => setXpDois(xpDois + 5)}>+</button>
                    <button className='btn-dois' onClick={() => setXpDois(xpDois - 5)}>-</button>
                </div>
                <div className='container-alterar-material-dois'>
                <div className='container-material-tres'>
                <h1>{xpTres}</h1>
                <input type="text" value={materialTres} onChange={(e) => setMaterialTres(e.target.value)}/>
                <button className='btn-um' onClick={() => setXpTres(xpTres + 5)}>+</button>
                    <button className='btn-dois' onClick={() => setXpTres(xpTres - 5)}>-</button>
                </div>
                <div className='container-material-quatro'>
                <h1>{xpQuatro}</h1>
                <input type="text" value={materialQuatro} onChange={(e) => setMaterialQuatro(e.target.value)}/>
                <button className='btn-um' onClick={() => setXpQuatro(xpQuatro + 5)}>+</button>
                    <button className='btn-dois' onClick={() => setXpQuatro(xpQuatro - 5)}>-</button>
                </div>
                <div className='container-material-cinco'>
                <h1>{xpCinco}</h1>
                <input type="text" value={materialCinco} onChange={(e) => setMaterialCinco(e.target.value)}/>
                <button className='btn-um' onClick={() => setXpCinco(xpCinco + 5)}>+</button>
                    <button className='btn-dois'onClick={() => setXpCinco(xpCinco - 5)}>-</button>
                </div>
                </div>

            </div>
           
            </div>
            : <div className='loading'>
            <h1>carregando...</h1>
            </div>
            }
    </div>

    );
}

export default TelaMateriais;