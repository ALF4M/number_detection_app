import React from 'react';
import * as Clipboard from 'expo-clipboard';
import { styles } from './DetailView.styles';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';


const getFormattedDateTime = (timestamp: number) => {
    const today = new Date(timestamp);

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

export default function DetailView() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
    const record = route.params.record;

    const formattedDate = getFormattedDateTime(record.timestamp);

    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(record.recognizedNumber);
        Alert.alert("Éxito", "Número copiado al portapapeles");
    };

    const handleDelete = async () => {
        navigation.goBack()
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.card}>
                    <Text style={styles.label}>Número detectado</Text>
                    <Text style={styles.detectedNumber}>{record.recognizedNumber}</Text>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View>

                <View style={[styles.card, styles.imageCard]}>
                    <Image
                        source={{ uri: record.imageUri }}
                        style={styles.detectedImage}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonPrimary} onPress={copyToClipboard}>
                        <Ionicons name="copy-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
                        <Text style={styles.buttonTextPrimary}>Copiar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonDestructive} onPress={handleDelete}>
                        <Ionicons name="trash-outline" size={20} color="#E53935" style={{ marginRight: 8 }} />
                        <Text style={styles.buttonTextDestructive}>Eliminar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}