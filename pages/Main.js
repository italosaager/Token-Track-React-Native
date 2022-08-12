import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import  useWebSocket  from 'react-use-websocket';
import { Feather} from '@expo/vector-icons';
import { Input, Text } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
 

export default function Main() {

  const [data, setData] = useState({});
  const [text, setText] = useState('BTCUSDT');
  const [symbol, setSymbol] = useState('btcusdt');

  const { lastJsonMessage } = useWebSocket(`wss://stream.binance.com:9443/ws/${symbol}@ticker`,{
    onMessage: () => {
      if(lastJsonMessage){
        setData(lastJsonMessage);
      }
    },
    onError: (event) => alert(event),
    shouldReconnect: () => true,
    reconnectInterval: 3000,
  })

  const searchButton = <Feather.Button 
  name='search'
  size={24}
  color='#fff'
  backgroundColor='transparent'
  onPress={() => setSymbol(text.toLowerCase())}
  />

  const token = <Feather 
  name='dollar-sign'
  size={24}
  color='#fff'
  backgroundColor='transparent'
  />

 return (

   <View style={styles.container}>
 
    <Text h1 style={styles.titulo}>Token Track</Text>
    <Input 
    style={styles.input}
    autoCapitalize='characters'
    leftIcon={token}
    rightIcon={searchButton} 
    value={text}
    onChangeText={setText}
    /> 


      
    <View style={styles.tokens}>
    <Text style={styles.texto}> Preço Atual: {data.c}</Text>
    <Text style={styles.texto}> Variação: {data.P}%</Text>
    <Text style={styles.texto}> Volume: {data.v}</Text>
    </View>


   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    opacity: 0.9,
    alignItems: 'center',
  },
  texto:{
    fontSize: 20,
    color: '#fff'
  },
  tokens:{
    textAlign: 'left'
  },
  titulo:{
    color: "#fff",
    marginTop: 40,
    marginBottom: 20,
  },
  input:{
    fontSize: 20,
    color: '#fff',
  }
});
