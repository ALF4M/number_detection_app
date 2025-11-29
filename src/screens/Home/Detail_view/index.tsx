// src/screens/Home/Detail_view/index.tsx (CÓDIGO MODIFICADO)

import React from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { styles } from './styles'; 

// IMAGEN HARDCODEADA
const LocalDetectedImage = require('../../../../assets/test-image.png'); 

const getFormattedDateTime = () => {
  const today = new Date();
  
  const options: Intl.DateTimeFormatOptions = { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric',
    hour: '2-digit',   
    minute: '2-digit', 
    hour12: false      
  };
  
  return today.toLocaleDateString(undefined, options);
};

interface DetailViewProps {
  navigation?: any; 
}

const DetailView: React.FC<DetailViewProps> = ({ navigation }) => {
  const data = {
    number: "10", 
    date: getFormattedDateTime(),
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(data.number);
    Alert.alert("Éxito", "Número copiado al portapapeles");
  };

  const handleDelete = () => {
    console.log("Simulación de eliminación iniciada. Redirigiendo a Home.");
    if (navigation) {
      navigation.navigate('Home'); 
    } else {
      Alert.alert("Simulación", "Redirigiendo a Home View (Simulación)");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detalle</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.label}>Número detectado</Text>
          <Text style={styles.detectedNumber}>{data.number}</Text>
          {/* ⬅️ Muestra la fecha y hora actualizadas */}
          <Text style={styles.date}>{data.date}</Text> 
        </View>

        <View style={[styles.card, styles.imageCard]}>
          <Image 
            source={LocalDetectedImage} 
            style={styles.detectedImage} 
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonPrimary} onPress={copyToClipboard}>
            <Ionicons name="share-social-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.buttonTextPrimary}>Compartir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonDestructive} onPress={handleDelete}>
            <Ionicons name="trash-outline" size={20} color="#E53935" style={{ marginRight: 8 }} />
            <Text style={styles.buttonTextDestructive}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailView;