import {Text, View , ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledButton from '../StyleButton'

const CarItem = (props) => {
const {name , tagline , image , taglineCTA}= props.car;

  return (
    <View style={styles.carContainer}>
    <ImageBackground source={image}
    style={styles.image}
    resizeMode='cover'
    />
<View style={styles.titles}>
  <Text style={styles.title}>{name}</Text>
  <Text style={styles.subtitle}>{tagline} &nbsp;
  <Text style={styles.subtitleCTA}>
    {taglineCTA}
  </Text>
  </Text>
  </View>

<View style = {styles.buttonContainer}>
  <StyledButton type ="primary"
   content={"Custom Order"} 
   onPress={()=> {console.warn("custom order was pressed")}}/>

<StyledButton type ="secondary"
   content={"Existing inventory"} 
   onPress={()=> {console.warn("Existing inventory was Pressed")}}/>

</View>
  </View>
  )
}

export default CarItem;
