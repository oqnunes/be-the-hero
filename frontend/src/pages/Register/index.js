import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import logoImg from './../../assets/logo.svg';

import './styles.css';

export default function Register(){

  const history = useHistory();
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }
    try{
      const response = await api.post('ongs', data);
      alert(`Seu ID de Acesso: ${response.data.id}`);
      history.push('/')
    } catch(err){
      alert('Erro no cadastro, tente novamente.');
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nome da ONG"
          />

          <input 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="E-mail"
          />

          <input 
            value={whatsapp}
            onChange={e => setWhatsApp(e.target.value)}
            placeholder="WhatsApp"
          />

          <div className="input-group">
            <input 
              placeholder="Cidade" 
              value={city} 
              onChange={e => setCity(e.target.value)}
            
            />

            <input 
              placeholder="UF" 
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{width: 80}}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};