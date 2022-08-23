import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import Coin from '../../Assets/data/crypto.json';
import styles from './styles';

const  CoinDetail = () => {
const { image: {small}, symbol, market_data: {market_cap_rank} } = Coin;

 return (
   <View style={styles.container}>
    <Ionicons name='chevron-back-sharp' size={30} color='#fff' />
    <View style={styles.tickerContainer}>
    <Image source={{uri: small}} style={{width: 25, height: 25}} />
    <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
    <View style={styles.rankContainer}>
    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>#{market_cap_rank}</Text>          
    </View>
    </View>


    <EvilIcons name='user' size={30} color='#fff' />
   </View>
  );
}

export default CoinDetail;
