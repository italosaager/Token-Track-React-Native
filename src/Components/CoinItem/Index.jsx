import React from 'react';
import { View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';

const CoinItem = ({marketCoin}) => {
const {name, current_price, market_cap_rank, price_change_percentage_24h, symbol, market_cap, image} = marketCoin;

const normalizeMarketCap = (marketCap) => {
  if (marketCap > 1e12) {
    return `${(marketCap / 1e12).toFixed(3)} T`;
  }
  if (marketCap > 1e9) {
    return `${(marketCap / 1e9).toFixed(3)} B`;
  }
  if (marketCap > 1e6) {
    return `${(marketCap / 1e6).toFixed(3)} M`;
  }
  if (marketCap > 1e3) {
    return `${(marketCap / 1e3).toFixed(3)} K`;
  }
  return marketCap;
};

const caretColor = price_change_percentage_24h < 0 ? '#ea3943' : '#16c784';
const caretDirection = price_change_percentage_24h < 0 ? 'caretdown' : 'caretup';

 return (
    <View style={styles.coinContainer}>
    <Image source={{uri: image}} style={styles.cryptoIcon} />
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>{market_cap_rank}</Text>
              </View>
            <Text style={styles.text}>{symbol.toUpperCase()}</Text>
            <AntDesign name={caretDirection} size={12} color={caretColor} style={{alignSelf: 'center', marginRight: 5}} />
            <Text style={{color: caretColor}}>{price_change_percentage_24h.toFixed(2)}%</Text>
          </View>
        </View> 

        <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
            <Text style={styles.title}>{current_price}</Text>
            <Text style={{color: '#fff'}}>MCap {normalizeMarketCap(market_cap)}</Text>
          </View>
        </View>

  )
}


export default CoinItem;