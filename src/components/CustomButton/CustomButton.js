import { View, Text , StyleSheet, Pressable} from 'react-native'
import React from 'react'

const CustomButton = ({ onPress,  text, type= "PRIMARY"}) => {
  return (
    <Pressable onPress = {onPress} style = {[styles.container, styles[`container_${type}`]]}>
      <Text style = {[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create ({
  container: {
    // width affects sign up button
    // width: '87%',
    height: 46,
    padding: 13,
    marginVertical:10,
    // border: 0,
    borderWidth: 0,
    borderRadius: 12,
    alignItems: 'center',
  },

  container_PRIMARY: {
    backgroundColor: '#4cd964',
    width: '70%',
    bottom: 90,
  },

  container_TERTIARY: {
      color: '#030303',
      fontSize: 12,
      // add font
      fontFamily: "Montserrat",
      fontWeight: 500,
      lineHeight: 14,
      textAlign: 'center',
      marginTop: 60,
  },

  

  text: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    // get font to work
  //    fontFamily: "Work Sans",
    lineHeight: 20,
  
  //    outline: none, 
  }
,

text_TERTIARY: {
  color: '#030303',
},

text_PRIMARY : {
  
}
})



export default CustomButton