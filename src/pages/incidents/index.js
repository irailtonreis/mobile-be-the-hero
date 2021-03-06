import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import logoImg from '../../assets/logo.png';

import api from '../../services/api';

export default function Detail(){
  const [incidents, setIncidents] = useState([]);


  const navigation = useNavigation();

  function navigationToDetail(){
    navigation.navigate('Detail');
  }

  async function loadIncidents(){
    const response = await api.get('incidents');

    setIncidents(response.data);

  }
  useEffect(()=>{
    loadIncidents();
  }, [])
  return(
    <View  style={styles.container}>
       <View  style={styles.header}>
         <Image source={logoImg}/>
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}> 0 casos</Text>
          </Text>
        </View>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>Ecolha um dos caso abaixo e salve o dia.</Text>

        <FlatList 
          style={styles.incidentList}
          data={incidents}
          keyExtractor={incident => String(incident.id)}
          showsVerticalScrollIndicator={false} 
          renderItem={({item: incident})=>(
            <View style={styles.incident}>

            <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>{incident.value}</Text>

          <TouchableOpacity
          style={styles.detailsButton}
          onPress={navigationToDetail}
          >

          <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
          <Feather name="arrow-right" size={16} color="#E02041" />
          </TouchableOpacity>
          </View>

          )}
        />
      </View>
  )
}