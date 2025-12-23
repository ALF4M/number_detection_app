import React from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { styles } from './HistoryView.styles';
import { ScanRecord } from '../../types';

const MOCK_ITEMS: ScanRecord[] = [
  {
    id: '95076',
    date: '2025-11-15',
    title: 'Escaneo #95076',
    duration: '10s',
    calories: 0,
    status: 'completed'
  },
  {
    id: '42587',
    date: '2025-11-15',
    title: 'Escaneo #42587',
    duration: '12s',
    calories: 0,
    status: 'completed'
  }
];

export default function HistoryView() {
  // Usamos 'any' temporalmente para facilitar la navegación sin tipado estricto del Stack
  const navigation = useNavigation<any>();
  const items = MOCK_ITEMS;

  const renderItem = ({ item }: { item: ScanRecord }) => (
    <Pressable
      style={styles.item}
      // AQUI ESTÁ EL CAMBIO: Navegamos a 'Detail' pasando el item
      onPress={() => navigation.navigate('Detail', { item })}
    >
      <View style={styles.thumbBox}>
         <Ionicons name="image-outline" size={24} color="#94A3B8" />
      </View>

      <View style={styles.meta}>
        <Text style={styles.idText}>{item.title || item.id}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#CBD5E1" />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.screen} edges={['right', 'left', 'bottom']}>
      <FlatList
        contentContainerStyle={styles.list}
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}