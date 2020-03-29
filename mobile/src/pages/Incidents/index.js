import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';

import api from './../../services/api';
import styles from './styles';

export default function Incidents(){
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [countIncidents, setCountIncidents] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident){
    navigation.navigate('Detail', { incident });
  }

  async function loadIncidents(){

    if(loading){
      return;
    }

    if(countIncidents > 0 && incidents.length === countIncidents){
      return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
      params: { page }
    });
    
    setIncidents([... incidents, ...response.data]);
    setCountIncidents(response.headers['x-total-count']);

    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>Total de <Text style={styles.headerTextBold}>{countIncidents} casos.</Text></Text>
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia sendo um heroi.
      </Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({item: incident}) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>
  
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>
  
            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(incident.value)}
            </Text>
  
            <TouchableOpacity 
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
