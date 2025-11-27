import React from 'react';
import { View, Text } from 'react-native';
import styles from './HomeScreen.styles';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola desde Main</Text>
    </View>
  );
}
