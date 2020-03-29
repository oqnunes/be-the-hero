import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from './../../services/api';

import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Profile(){
  const history = useHistory();

  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    }).then(response => {
      setIncidents(response.data);
    });
  }, [ongId]);

  const handleIncidentDelete = async (id) => {
    try{
      await api.delete(`incidents/${id}/delete`, {
        headers: {
          Authorization: ongId
        }
      });
      setIncidents(incidents.filter(incident => incident.id !== id));
      alert('Deletar id ' + id);
    }catch(err){
      alert('Erro ao apagar Incidente.');
    };
  };

  const handleLogOut = () => {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Logo" />
        <span>Bem-vinda, {ongName}</span>

        <Link className="button" to="profile/incident/new">
          Cadastrar novo Caso
        </Link>
        <button type="button" onClick={handleLogOut}>
          <FiPower size={18} color="#E02041" />
        </button>

      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {
          incidents.map(incident => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>
                {incident.title}
              </p>
              <strong>Descrição:</strong>
              <p>
                {incident.description}
              </p>
              <strong>VALOR:</strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(incident.value)}
              </p>
              <button onClick={() => handleIncidentDelete(incident.id)}>
                <FiTrash2 size={20} color="#a8a8b3" />
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};