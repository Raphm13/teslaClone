import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CarsList from './components/carsList';
import Header from './components/header';


const App = () => {
  return (
    <View style={styles.container}>
      <Header/>
    <CarsList/> 
    </View>
  );
}

export default App

const styles = StyleSheet.create({
container:{

},
})