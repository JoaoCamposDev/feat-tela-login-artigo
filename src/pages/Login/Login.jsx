import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Login.css";
import api from '../../services/api';

function Login() {
    const [email, setEmail] = useState('');
    const [pwd, setSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !pwd) {
            setError('Email e senha são obrigatórios');
            return;
        }

        try {
            console.log("Tentando fazer login...");

            const response = await api.post('/user/login', {
                email,
                pwd
            });
            console.log(response); 

            if (response.status === 200) {
                navigate('/crud');
            } else {
                setError('Credenciais inválidas');
            }
        } catch (err) {
            console.error(err);
            setError('Erro ao tentar fazer login');
        }
    };

    return (
        <div className="container-login">
            <div className="container-eco">
                <img 
                    src='/img/img-fazer-login.svg' alt='imagem-login' className='imgum-telalogin' />
                
                <div className="container-login-form">
                    <img src='/img/logo-telalogin.svg' alt='logo' className='logo-telalogin' />
                    <h2>Faça login!</h2>
            
                    {error && <div className="error-message">{error}</div>}

                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            id="input-email"
                            className="cad-input"
                            placeholder="seuemail@ecoguia.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            id="input-senha"
                            className="cad-input-senha"
                            placeholder="Senha"
                            value={pwd}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <button type="submit" className="btn-confirmar">Entrar</button>
                    </form>

                        <Link className='container-login-link' to='/EsqueciSenha'>Esqueci a Senha</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
