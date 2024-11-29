import "./AddArtigos.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";

function AddArtigos() {
    const [noticias, setNoticias] = useState([]);
    const [currentNoticia, setCurrentNoticia] = useState({ title: "",category:"",description: "",reference:"" });
     const[image,setImage] = useState(null)
    const [editingIndex, setEditingIndex] = useState(null);

    const addNoticia = () => {
        if (editingIndex !== null) {
            const updatedNoticias = noticias.map((noticia, index) =>
                index === editingIndex ? currentNoticia : noticia
            );
            setNoticias(updatedNoticias);
            setEditingIndex(null);
        } else {
            setNoticias([...noticias, currentNoticia]);
        }
        setCurrentNoticia({ title: "", description: ""});
    };


    const imagRef = useRef();
    const handlerImage = (e) => {
        if(e.target.files[0]){
            imagRef.current.src =URL.createObjectURL(e.target.files[0])
            imagRef.current.style.display="block"
        }
        else{
            imagRef.current.src = ''
        }
        setImage(e.target.files[0])
    }

    const addNewNoticia = async () => {
            const formData = new FormData();
            formData.append('file', image); 
            formData.append('title', currentNoticia.title);
            formData.append('category', currentNoticia.category);
            formData.append('description', currentNoticia.description);
            formData.append('reference', currentNoticia.reference);
           
        try {
            const response = await api.post('/createArticle', formData, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data' 
            }
        });
            alert(response.status);
        } catch (error) {
            alert("Algo deu errado: " + (error.response.data.msg));
        }
    };

    const editNoticia = (index) => {
        setCurrentNoticia(noticias[index]);
        setEditingIndex(index);
    };

    const deleteNoticia = (index) => {
        const updatedNoticias = noticias.filter((_, i) => i !== index);
        setNoticias(updatedNoticias);
    };

    return (
        <div className="container-addartigos">
            <div className='container-logo'>
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
            <div className='btn-login-addartigos'>
                <Link className="button" to="/Login">ADMIN</Link>
                            

            </div>

            <div className="container-tit">
            <h3><span className='highlight'>Adicionar</span> Artigo </h3>

                <img src='/img/retangulo-hcoleta.svg' alt='retangulo-hcoleta' className='retang-coleta-addartigos'/>
                <p>Contribua para a conscientização ambiental! Utilize esta página para publicar artigos<br></br> e notícias que promovam práticas sustentáveis.</p>
                </div>

            <div className="pai-container-addnoticia">
            

                <div className="container-info-crud">
                    <span>Clique para Inserir uma imagem para o artigo</span>
                    <input  type="file" id="file-input" className="file-input"onChange={handlerImage}
                    />
                    <div className="img-preview"><img  className="imagem"alt="preview" ref={imagRef}></img></div>

                    <button onClick={addNewNoticia}>{editingIndex !== null ? "Atualizar Artigo" : "Adicionar Artigo"}</button>

               
               </div>

            <div className="container-addnoticia">
            <input  className="title-input"
                    type="description" 
                    placeholder="Título" 
                    value={currentNoticia.title} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, title: e.target.value })} 
                />
                 <select id="options" value={currentNoticia.category} onChange={(e) => setCurrentNoticia({...currentNoticia, category: e.target.value})} >
                    <option value="">Selecione a categoria...</option>
                    <option value="Faça você mesmo">Faça você mesmo</option>
                    <option value="Notícia">Notícia</option>
                    <option value="Artigo">Artigo</option>
                </select>
            <input 
                    type="description" 
                    placeholder="Referência" 
                    value={currentNoticia.reference} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, reference: e.target.value })} 
                />
                <textarea 
                    placeholder="Texto da Notícia" 
                    value={currentNoticia.description} 
                    onChange={(e) => setCurrentNoticia({ ...currentNoticia, description: e.target.value })} 
                />
           
           
            </div>
                                          
            </div>

        </div>
    );
}

export default AddArtigos;
