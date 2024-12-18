import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CadastroService from "../service/Registro"; 

import './cadastro.css';

function Cadastro() {
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        nome: "",
        matricula: "",
        senha: "",
        testeSenha: "",
        email: "",
        telefone: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.senha !== formData.testeSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        const novoUsuario = {
            nome: formData.nome,
            matricula: Number(formData.matricula),
            senha: formData.senha,
            email: formData.email,
            telefone: formData.telefone
        };

        try {
            await CadastroService.registrar(novoUsuario);
            alert("Cadastro realizado com sucesso!");
            navigate("/login"); // Redireciona para a página de login
        } catch (error) {
            alert("Erro ao cadastrar usuário. Tente novamente.");
        }
    };

    return (
        <>
            <section className='container Cadastro-main'>
                <h1>Bem-Vindo ao</h1>
                <h1>Mundo das Palavras</h1>
                <div className='container-sm '>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className="col-md-4 col-sm-6 mb-3">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="nome" value={formData.nome} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3">
                                <label htmlFor="matricula" className="form-label">Matrícula</label>
                                <input type="number" className="form-control" id="matricula" value={formData.matricula} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3">
                                <label htmlFor="telefone" className="form-label">Telefone</label>
                                <input type="text" className="form-control" id="telefone" value={formData.telefone} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3">
                                <label htmlFor="senha" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="senha" value={formData.senha} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4 col-sm-6 mb-3">
                                <label htmlFor="testeSenha" className="form-label">Confirmar Senha</label>
                                <input type="password" className="form-control" id="testeSenha" value={formData.testeSenha} onChange={handleChange} required />
                            </div>
                            <div className="col-md-4"></div>
                            <button type="submit" className="col-md-3 btn btn-primary btn-lg">Cadastrar</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Cadastro;
