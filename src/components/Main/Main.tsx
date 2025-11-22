import React from 'react';
import { View, Text } from 'react-native';
import styles from './Main.styles';

export default function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola desde Main</Text>
    </View>
  );
}
