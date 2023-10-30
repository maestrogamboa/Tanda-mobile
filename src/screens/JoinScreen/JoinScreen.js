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
       <View >
      <Text style = {styles.joinTitle}>Joining an existing Tanda? </Text>
      <Text style = {styles.joinTitle}>Please provide join code</Text>
      </View>

      <CustomInput
        placeholder= "Join Code"
        value={joinCode} 
        setValue={setjoinCode}
      />
      
     {/* <View> */}
      <CustomButton 
        type= "PRIMARY"
        text= "Join" 
        onPress= {onJoinBoxPressed} 
      />
    
    <Text style= {styles.orText}> or </Text> 
      {/* </View>  */}
     
      <CustomButton  style= {styles.createTanda}
        type= "SECONDARY"
        
        text= "Create Tanda" 
        onPress= {onCreateTandaPressed} 
      />
      
    </View>

  )
}



const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    // bottom: 60,
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

  joinTitle: {
    fontWeight: '700',
    fontSize: 15,
    width: '100%',
    
  },

  createTanda: {
    backgroundColor: 'red',
  },

  orText: {
    color: '#c0c0c0',
  fontSize: 14,
  // font-family: "Montserrat",
  lineHeight: 14,
  textAlign: 'center',
  margin: -90,
  bottom: 40,
  },

  

//   middleText: {
//     color: 'gray', 
//     bottom: 65,  
//   },
})
;
export default JoinScreen