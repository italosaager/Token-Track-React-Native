import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Details from './src/pages/Details';
import Main from './src/pages/Main';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Details />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});