import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';

import styles from './styles';

import logoImg from '../../assets/logo.png';



export default function Incidents(){
  const navigation = useNavigation();

  const message = 'Olá APAD, estou entrando em contato pois gostaria de ajudar no caso "Cadelhinha atropelada" o valor de R$120,00'

  function naviationBack(){
    navigation.goBack();
  }

  function sendMail(){
    MailComposer.composeAsync({
      subject: 'Herói do caso cadelhinha atropelada',
      recipients: ['irailton.oliveira91@gmail.com'],
      body: message,
    })

  }
  function sendWhatsap(){
    Linking.openURL(`whatsapp://send/phone=5511963753664?text=${message}`);

  }
  return(
    <View  style={styles.container}>
      <View  style={styles.header}>
         <Image source={logoImg}/>
         

         <TouchableOpacity onPress={naviationBack}>
          <Feather name="arrow-left" size={28} color="#E82041" />
         </TouchableOpacity>
        </View>

        <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0}] }>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelhinha atropeleda</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsap}>
            <Text style={styles.actionText}>Whatsap</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
        </View>
    </View>

  )
}
