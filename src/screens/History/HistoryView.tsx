import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { styles, palette } from './HistoryView.styles';
import { useNavigation } from '@react-navigation/native';
import { useScanHistory } from '../../hooks/useScanHistory';
import { RootStackParamList, ScanRecord } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, Image, FlatList, Pressable } from 'react-native';

function formatDate(ts: number) {
  const d = new Date(ts);
  // Formato: "15 nov 2025"
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function HistoryView() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const items = useScanHistory();

  const renderItem = ({ item }: { item: ScanRecord }) => (
    <Pressable style={styles.item} onPress={() => navigation.navigate('Detail', { record: item })}>
      <View style={styles.thumbBox}>
        {item.imageUri ? (
          <Image source={{ uri: item.imageUri }} style={styles.thumb} resizeMode="cover" />
        ) : (
          <Ionicons name="image-outline" size={24} color={palette.thumbIcon} />
        )}
      </View>

      <View style={styles.meta}>
        <Text style={styles.idText}>{item.recognizedNumber}</Text>
        <Text style={styles.date}>{formatDate(item.timestamp)}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color={palette.chevron} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.screen}>
      {/* List */}
      <FlatList
        contentContainerStyle={styles.list}
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}
