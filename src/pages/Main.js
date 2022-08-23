import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';
import CoinItem from '../Components/CoinItem/Index';
import cryptocurrencies from '../Assets/data/cryptocurrencies.json'

export default function Main() {

 return (
  <View style={styles.container}>
    <FlatList data={cryptocurrencies} 
    renderItem = {({item}) => <CoinItem marketCoin={item} /> } />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});
