import React from 'react';
import styles from './HomeScreen.styles';
import * as ImagePicker from 'expo-image-picker';
import { RootStackParamList } from '../../types';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StorageService } from '../../services/StorageService';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen() {
	const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ['images'],
			quality: 1,
			allowsEditing: true

		});

		if (!result.canceled && result.assets && result.assets.length > 0) {
			console.log(result.assets[0].uri);
			await StorageService.saveScanRecord(result.assets[0].uri);
			navigation.navigate('History');
		}
	};

	const openCamera = async () => {
		const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

		if (permissionResult.granted === false) {
			Alert.alert("Permiso requerido", "No se tiene permiso para usar la cámara.");
			return;
		}

		const result = await ImagePicker.launchCameraAsync({
			mediaTypes: ['images'],
			quality: 1,
			allowsEditing: true
		});

		if (!result.canceled && result.assets && result.assets.length > 0) {
			console.log(result.assets[0].uri);
			await StorageService.saveScanRecord(result.assets[0].uri);
			navigation.navigate('History');
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Text style={styles.logoText}>123</Text>
			</View>

			<Text style={styles.title}>Reconocer Números</Text>
			<Text style={styles.subtitle}>Captura o importa una imagen para detectar números</Text>

			<TouchableOpacity
				style={[styles.button, styles.buttonCamera]}
				onPress={openCamera}
				activeOpacity={0.8}
			>
				<Ionicons name="camera-outline" size={24} color="#fff" />
				<Text style={[styles.buttonText, styles.buttonTextCamera]}>Reconocer con cámara</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.button, styles.buttonGallery]}
				onPress={pickImage}
				activeOpacity={0.8}
			>
				<Ionicons name="image-outline" size={24} color="#374151" />
				<Text style={[styles.buttonText, styles.buttonTextGallery]}>Importar desde galería</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.history}
				activeOpacity={0.6}
				onPress={() => navigation.navigate('History')}
			>
				<Ionicons name="time-outline" size={20} color="#6B7280" />
				<Text style={styles.historyText}>Ver historial</Text>
			</TouchableOpacity>
		</View>
	);
}
