import { View, Text, Image, StyleSheet, useWindowDimensions, Button } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/tandalogo2.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Navigation from '../../navigation/index.js';
import { useNavigation } from '@react-navigation/native'




const SignInScreen = () => {

  const navigation = useNavigation();
  
  const [phoneNumber, setPhoneNumber] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
   };
    
  const onSignUpScreenOnePressed = () => {
      console.warn("onSignUpScreenOnePressed");
      navigation.navigate('SignUpScreen')


    
  };

  // const onNoAccountPressed = () =>{
  //   console.warn("onNoAccountPressed");
  // };


  
  return (

    <>
    <View style={styles.root}>
      <View style={{ display:'flex', justifyContent:'center' }}>
        <View>
        <Image source={Logo}
          style={[styles.tandalogo, { height: height * 0.15 }]}
           />
           
        </View>

        <View >
          <Text style={styles.middleText}>Manage your rotational savings group</Text>
        </View>

      </View>

        <View  style={{ width:'100%', display:'flex', alignItems:'center'}}>
          <Text style={styles.phoneNumberIndication}>Phone Number</Text>
          <CustomInput
          placeholder="Your Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          keyboardType="numeric" />

       <CustomButton
        type="PRIMARY"
          text="Sign In"
          onPress={onSignInPressed} />

        </View>
           

        

        <Text style={styles.bottomText}>Don't have an account?<Text style={styles.bottomTextTertiary} onPress={onSignUpScreenOnePressed} type="TERTIARY">    Sign up</Text></Text>

        {/*<CustomButton
  text= "Don't have an account?  Sign Up"
  onPress= {onSignUpScreenOnePressed}
  type= "TERTIARY"
   // need to change color of "Dont have an account"
  //  need to see about differentiating the reactivity of dont have an account and sign up
   
/>*/}

        {/* <CustomButton
  text= "Don't have an account?"
  onPress= {onNoAccountPressed}
  type= "TERTIARY"
/> */}

      </View></>

  )
}



const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex:1,
    padding : 1,
    display:'flex',
    justifyContent:'space-evenly',
    height:'100%',
    backgroundColor:'white'
  
  },

  middleText: {
    color: 'gray', 
 
  },

  tandalogo : {
    
    // left: -38,
    width: '100%',
    maxWidth: 500,
    maxHeight: 400,
    height:100
    
    // backgroundImage: url(./tandalogo.png),
 
  },
phoneNumberIndication: {
width: '64%',
color: 'black',
// '#363739'
  fontSize: 12,
  //get font
  // fontFamily: "WorkSans-Bold",
  fontWeight: 600,
  paddingBottom:12

},
bottomTextTertiary: {
    color: 'black',
    fontWeight: 'bold',
  },
bottomText: {
  color: 'gray',
},
})
;
export default SignInScreen