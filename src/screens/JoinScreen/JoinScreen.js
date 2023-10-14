import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';



const JoinScreen = () => {
  const [joinCode, setjoinCode] = useState('');

  
  const onJoinBoxPressed = () => {
        console.warn("onJoinBoxPressed");
    
  };

  const onCreateTandaPressed = () => {
    console.warn("onCreateTandaPressed")
  }


  
  return (
  
    <View style = {styles.root}>
       <View>
      <Text style = {styles.joinTitle}>Joining an existing Tanda? Please provide join code</Text>
      </View>

      <CustomInput
        placeholder= "Join Code"
        value={joinCode} 
        setValue={setjoinCode}
      />
        
      <CustomButton 
        text= "Join" 
        onPress= {onJoinBoxPressed} 
      />

      <Text > or </Text>

      <CustomButton   
        style= {styles.backToSignIn}
        text= "Create Tanda" 
        onPress= {onCreateTandaPressed} 
      />
        
    </View>

  )
}



const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    bottom: 60,
    padding : 1,
    display:'flex',
    justifyContent:'space-evenly',
    height:'100%',
  
  }, 
  title: {
    color: '#030303',
    fontSize: 18,
    // font-family: "Montserrat",
    fontWeight: 700,
    lineHeight: 23,
    textAlign: 'center',

  },
  

//   middleText: {
//     color: 'gray', 
//     bottom: 65,  
//   },
})
;
export default JoinScreen