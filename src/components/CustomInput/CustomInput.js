import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'



const CustomInput = ({value, setValue, placeholder}) => {
  return (
    <View style = {styles.container}>
      <TextInput 
      value= {value}
      onChangeText={setValue}
      placeholder= {placeholder} 
      style = {styles.input}

      /> 

    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    backgroundColor: 'white',
    width: '80%',
    paddingHorizontal: 30,
    marginBottom: 30,
    marginTop: 60,
   
    // figure out how to underline properly
  
    // textDecorationLine: 'underline',
    borderBottomWidth: 1,
  
    // textDecorationColor: '#e8e8e8',
    borderBottomColor: '#e8e8e8',
    
  
  },
  input: {},
})

export default CustomInput