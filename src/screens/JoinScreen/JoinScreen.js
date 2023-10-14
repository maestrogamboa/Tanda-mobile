import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'



const JoinScreen = () => {
  const navigation = useNavigation();

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
        type= "PRIMARY"
        text= "Join" 
        onPress= {onJoinBoxPressed} 
      />

      <Text type = "TERTIARY"> or </Text>

      <CustomButton   
        type= "SECONDARY"
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
    backgroundColor: 'white',
  
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