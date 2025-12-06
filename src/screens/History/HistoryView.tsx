import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, FlatList, Pressable, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importamos los iconos
import { styles, palette } from './HistoryView.styles';
// import { listHistory, HistoryItem } from '../../storage/history'; // Comentado temporalmente

// Definimos la interfaz aquí para los datos de prueba
export interface HistoryItem {
  id: string;
  uri?: string;
  createdAt: number;
  label?: string;
  prediction?: string;
}

type Props = {
  onBack?: () => void;
  onOpen?: (item: HistoryItem) => void;
};

// DATOS DE PRUEBA PARA REPLICAR LA IMAGEN
const MOCK_ITEMS: HistoryItem[] = [
  { id: '95076', createdAt: new Date('2025-11-15T10:00:00').getTime(), label: '95076' },
  { id: '42587', createdAt: new Date('2025-11-15T09:30:00').getTime(), label: '42587' },
  { id: '91234', createdAt: new Date('2025-11-14T16:20:00').getTime(), label: '91234' },
  { id: '76543', createdAt: new Date('2025-11-13T14:15:00').getTime(), label: '76543' },
];

function formatDate(ts: number) {
  const d = new Date(ts);
  // Formato: "15 nov 2025"
  return d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' });
}

function displayLabel(it: HistoryItem) {
  const anyLabel = it.label ?? it.prediction;
  if (anyLabel !== undefined && anyLabel !== null && String(anyLabel).trim() !== '') {
    return String(anyLabel);
  }
  return it.id.slice(-5);
}

export default function HistoryView({ onBack, onOpen }: Props) {
  // --- LÓGICA DE DATOS REALES (COMENTADA PARA USAR MOCK DATA) ---
  /*
  const [items, setItems] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await listHistory();
      setItems(data);
    } catch (e) { console.error(e); }
    setLoading(false);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);
  */
  // -----------------------------------------------------------

  // Usamos los datos de prueba directamente
  const items = MOCK_ITEMS;
  const loading = false;
  const refresh = () => {}; // Función vacía por ahora

  const renderItem = ({ item }: { item: HistoryItem }) => (
    <Pressable style={styles.item} onPress={() => onOpen?.(item)}>
      <View style={styles.thumbBox}>
        {item.uri ? (
          <Image source={{ uri: item.uri }} style={styles.thumb} resizeMode="cover" />
        ) : (
          // Usamos un icono de Ionicons en lugar del emoji
          <Ionicons name="image-outline" size={24} color={palette.thumbIcon} />
        )}
      </View>

      <View style={styles.meta}>
        <Text style={styles.idText}>{displayLabel(item)}</Text>
        <Text style={styles.date}>{formatDate(item.createdAt)}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color={palette.chevron} />
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.screen}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backBtn} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color={palette.text} />
        </Pressable>
        <Text style={styles.title}>Historial</Text>
      </View>

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