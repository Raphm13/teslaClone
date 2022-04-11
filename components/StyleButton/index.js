import { StyleSheet, Pressable, Text,View } from 'react-native'
import React from 'react'
import styles from './style';

const StyledButton = (props) => {
    const type=props.type;
    const content = props.content;
    const onPress = props.onPress;


    const backgroundColor = type ==='primary' ? '#171A20CC' : '#ffffffA6';
    const textColor = type ==='primary' ? '#ffffffA6' : '171A20CC';

  return (
    <View style={styles.container}>
     <Pressable style={[styles.button , {backgroundColor:backgroundColor}]}
    onPress={() => {
   onPress()
    }}>

<Text style={[styles.text , {color:textColor}]}>{content}</Text>
     </Pressable>
    </View>
  )
}

export default StyledButton;
