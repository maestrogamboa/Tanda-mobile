import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'



const SignUpScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  

  const onSignUpBoxPressed = () => {
        console.warn("onSignUpBoxPressed");
        navigation.navigate('JoinScreen');
    
  };

  const onBackToSignInPressed = () => {
    console.warn("onBackToSignInPressed")
    navigation.navigate('SignInScreen')
  }


  return (
  
    <View style = {styles.root}>
       
      <View>
        <Text style = {styles.title}>Create an account</Text>
      </View>

      <CustomInput
        placeholder= "First Name"
        value={firstName} 
        setValue={setFirstName}
        />
        <CustomInput
        placeholder= "Last Name"
        value={lastName} 
        setValue={setLastName}
        />
      
      <CustomInput
        placeholder= "Phone Number"
        value={phoneNumber} 
        setValue={setPhoneNumber}
        keyboardType = "numeric"
        // figure out how to add Phone number

        />
      <CustomButton 
        type= "PRIMARY"
        text= "Sign Up" 
        onPress= {onSignUpBoxPressed} 
      />

      <CustomButton   
        type= "SECONDARY"
        text= "Back to Sign In" 
        onPress= {onBackToSignInPressed}
      />
        
    </View>

  )
}



const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding : 1,
    display:'flex',
    justifyContent:'space-evenly',
    height:'100%',
    backgroundColor:'white'
  
  }, 
  title: {
    color: '#030303',
    fontSize: 18,
    // font-family: "Montserrat",
    fontWeight: 700,
    lineHeight: 300,
    textAlign: 'center',

  },

})
;
export default SignUpScreen