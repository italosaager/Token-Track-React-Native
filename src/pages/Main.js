import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Main() {

 return (
  <View style={styles.container}>
    <View style={styles.cryptoContainer}>
    <Image source={{uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'}} style={styles.cryptoIcon} />

        <View>
          <Text style={styles.title}>Bitcoin</Text>
          <View style={styles.coinData}>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>BTC</Text>
            <AntDesign name='caretup' size={16} color='green' style={{alignSelf: 'center'}} />
            <Text style={styles.text}>%</Text>
          </View>
        </View> 

        <View style={styles.coinData2}>
            <Text style={styles.title}>123000</Text>
            <Text style={styles.text}>Mcap btc</Text>
          </View>
        </View>


  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  title:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text:{
    color: '#fff',
    marginRight: 5,
  },
  cryptoIcon:{
    height: 35,
    width: 35,
    marginRight: 10,
    alignSelf: 'center',
  },
  cryptoContainer:{
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#282828',
    padding: 15,
  },
  coinData:{
    flexDirection: 'row',
  },
  coinData2:{
    marginLeft: 'auto',
  }

});
