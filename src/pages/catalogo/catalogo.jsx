import './catalogo.css';
import {Link} from "react-router-dom";

function catalogo(){
    return(
    <div className='container-catalogo'>
    <div className='container-logo'>
        <Link to="/">
        <img className='img-logo-pag-artigo' src='/img/logo-pag-artigo.svg' alt='logo' />
        </Link>
    </div>
    <div className='container-navbar'>
    
        <a href="/">SOBRE</a>
        <a href="/">HORÁRIOS DAS COLETAS</a>
        <a href="/HorarioColeta">ARTIGOS</a>
        <a href="/">ECOPONTOS</a>
    </div>
    <div className='btn-login'>
    <Link className="button" to="/Login">ADMIN</Link>
    </div>
    
    <div className='container-titulo'>
        <h2>POR QUE ÁRVORES SÃO TÃO<br></br> IMPORTANTES PARA O PLANETA?</h2>
        
    <div className='container-descricoes'>
        <p>São Paulo, 21 de agosto de 2024</p>
        <h5>via chatGPT</h5>
    </div>
    </div>
    <div className='container-not'>
    <img className='img-not-art' src='/img/imagem-noticia-art.svg' alt='img' />
        <p>As árvores são essenciais para o equilíbrio ambiental e a saúde global do planeta. Elas produzem oxigênio através da fotossíntese, absorvendo  dióxido de carbono (CO₂) e ajudando a combater as mudanças climáticas. <span className='highlight'>Uma única árvore pode gerar oxigênio suficiente para uma família de quatro pessoas por um ano.
    </span> 
        <br></br> 
    <br></br>  Além disso, as árvores desempenham um papel crucial na conservação da água. Suas raízes agem como uma esponja natural, absorvendo água e reduzindo o escoamento superficial, o que previne enchentes e mantém o ciclo da água. <span className='highlight'>Elas também filtram poluentes do ar, melhorando a qualidade do ar e contribuindo para a saúde respiratória em áreas urbanas.</span>
        <br></br> 
        <br></br> 
        As árvores oferecem habitat para diversas espécies, sustentando ecossistemas ricos e promovendo a biodiversidade. <span className='highlight'>Elas ajudam a manter o solo estável e a prevenir a erosão, essencial para a agricultura sustentável.</span><br></br> 
        <br></br> 
        Além dos benefícios ambientais, o contato com áreas arborizadas reduz o estresse e melhora o bem-estar, oferecendo um ambiente mais saudável e agradável. <span className='highlight'>Preservar e plantar árvores é vital para a sustentabilidade e para um futuro mais equilibrado e saudável para todos.</span></p>
    </div>
    <div className='container-outras-not'>
        <h3>Outras notícias</h3>
        <img className='img-outras-not' src='/img/linha-outras-not.svg' alt='img' />
    </div>
    <div className='pai-outras-noticias'>
         <div className='container-not-um'>
            <img src='/img/img-pag-catalogo.svg' alt='img-noticia' className='img-not-dois'/>
            <h5>A importancia  da <br></br> reciclagem.</h5>          
            <button className='btn-not-um' type='button'>LEIA MAIS</button>        
        </div>

        <div className='container-not-um'>
            <img src='/img/img-pag-catalogo.svg' alt='img-noticia' className='img-not-dois'/>
            <h5>A importancia  da <br></br> reciclagem.</h5>          
            <button className='btn-not-um' type='button'>LEIA MAIS</button>        
        </div>

        <div className='container-not-um'>
            <img src='/img/img-pag-catalogo.svg' alt='img-noticia' className='img-not-dois'/>
            <h5>A importancia  da <br></br> reciclagem.</h5>          
            <button className='btn-not-um' type='button'>LEIA MAIS</button>        
        </div>
        </div>

        <div className='container-footer'>
            <div className='cont-footer'>
            <img src="/img/logo-v2.svg" alt="logo" className='logo-verdois' />  
        <p>Seu guia para um futuro <br></br>mais verde.</p> 
        <a id='btn-voltar-fot' href="#top" className='botao-voltar'>
            <img className='img-voltar-cat' src='/img/btn-voltar.svg' alt='Voltar ao topo' />
        </a>
         </div>
       
        
        <div id='cont-footer-btn' className='container-footer-btn'>
        <a href="/horariocoleta">ARTIGOS</a>
        <a href="/funcionalidades">SOBRE</a>
        </div>

        <div id='cont-linha' className='container-linha'>
        <img src="/img/line-footer.svg" alt="linha" className='linha-footer'/>
        <p>Copyright © 2024 | ECOGUIA | by ECO12BIOTEC</p>
        </div>

                      
        </div>

    </div>
    
    )
}

export default catalogo;