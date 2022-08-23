import React from 'react';
import { View, FlatList} from 'react-native';
import CoinItem from '../Components/CoinItem/Index';
import cryptocurrencies from '../Assets/data/cryptocurrencies.json'

export default function Main() {

 return (
  <>
    <FlatList data={cryptocurrencies} 
    renderItem = {({item}) => <CoinItem marketCoin={item} /> } />
  </>
  )
}
