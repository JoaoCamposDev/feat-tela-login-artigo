import { useEffect, useState } from "react";
import { useRef } from "react";
import "./PagEditIcon.css";
import { Link } from "react-router-dom";
import api from "../../services/api";


function PagEditIcon() {

const [avatar,setAvatar] = useState('')
const [id, setId] = useState('')
    useState(() => {
    async function img() {
    const imag = localStorage.getItem('avatar')
    setAvatar(imag);
    setId(localStorage.getItem('id'))
       }
       img()
    },[])

    const imagRef = useRef();
    const[file,setFile] = useState(null) 

    const handlerImage = (e) => {
        if(e.target.files[0]){
            imagRef.current.src =URL.createObjectURL(e.target.files[0])
            imagRef.current.style.display="block"
        }
        else{
            imagRef.current.src = ''
        }
        setFile(e.target.files[0])
    }



    const editAvatar = async () =>{
    const formData = new FormData();
    formData.append('file',file); 
    formData.append('ID_avatar',id);
        try{
        const response = await api.put('/updateAvatar', formData,{
            headers:{
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
            }
         }
      )
      alert(response.data.msg)
      
      window.location = '/telaAltIcons'
    }catch(error){
        alert(error.response.data.msg)
        console.error(error)
    } 
} 
    
    return (
        <div className='container-editicon'>
            <div className='container-logo-editicon'>
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
            <div className='btn-login-edicon'>
                <Link className="button" to="/Login">ADMIN</Link>

            </div>
            <div className='container-titulo-editicon'>
                <h2><span className='highlight'>Editar </span> Icon </h2>
                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-editicon'/>
                <p>Edite seu icon aqui.</p>
                 </div>
            <div className="pai-container-edicao">
                
                <div className="circle-container">
                    <img src={avatar} alt='icon' className='circle-icon' />
                </div>
                
                <div className="input-container">
                <div className="file-input-container">
            <input type="file" id="file-input" className="file-input"onChange={handlerImage} />
           
            <label htmlFor="file-input" className="file-label">Procurar arquivo</label>
            <div className="btn-confirmar-action">
                        <button className="confirm-button" onClick={ () => editAvatar()}>Confirmar</button>
                    </div>
           
                
                </div>

       
       
                <div className="drop-area">
                <img  className="imagem"alt="preview" ref={imagRef}></img>
                </div>

              
       
    </div>
</div>
     
        </div>
    );
}

export default PagEditIcon;
 