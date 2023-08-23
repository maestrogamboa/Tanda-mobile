import React from 'react'
import { Text, StyleSheet, View, TextInput} from 'react-native'

const CustomInput = ({value, setValue, placeholder, type}) => {

    return (
      <View style={[styles.container,  styles[`container_${type}`]]}>
        <TextInput
         style={styles.input}
         value={value}
         onChangeText={setValue} 
         placeholder={placeholder}
         />
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: '90%',
        borderColor: '#222222',
        borderWidth: 1,
        borderRadius:10,

        paddingHorizontal: 10,
        paddingVertical:20,
        marginTop:10,
        maxWidth:500,
    },
    container_SECONDARY:{
      backgroundColor:'#F0F0F0'
    },
    input:{

    }
})

export default CustomInput;

