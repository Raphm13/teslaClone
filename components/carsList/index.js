import { StyleSheet, Text, View , FlatList , Dimensions} from 'react-native'
import React from 'react'
import cars from './cars'
import CarItem from '../CarItem'
import styles from './styles'

const CarsList = () => {
  return (
    <View>
     <FlatList
    data={cars}
    renderItem={({item}) => <CarItem car={item} />}
    showsVerticalScrollIndicator={false}
    snapToAlignment={'start'}
    decelerationRate={'fast'}
    snapToInterval={Dimensions.get('window').height}
     />
    </View>
  )
}

export default CarsList;
