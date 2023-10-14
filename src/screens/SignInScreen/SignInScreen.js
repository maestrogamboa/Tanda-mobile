import { View, Text, Image, StyleSheet, useWindowDimensions, Button } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/tandalogo.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import Navigation from '../../navigation/index.js';



const SignInScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
   };
    
  const onSignUpScreenOnePressed = () => {
      console.warn("onSignUpScreenOnePressed");


    
  };

  // const onNoAccountPressed = () =>{
  //   console.warn("onNoAccountPressed");
  // };


  
  return (

    <><View>
    </View><View style={styles.root}>
        <Image source={Logo}
          style={[styles.tandalogo, { height: height * 0.45 }]}
          resizeMode="contain" />


        <View>
          <Text style={styles.middleText}>Manage your rotational savings group</Text>
        </View>


        <Text style={styles.phoneNumberIndication}>Phone Number</Text>
        <CustomInput
          placeholder="Your Phone Number"
          value={phoneNumber}
          setValue={setPhoneNumber}
          keyboardType="numeric" />

        <CustomButton
          text="Sign In"
          onPress={onSignInPressed} />

        <Text style={styles.bottomText}>Don't have an account?<Text style={styles.bottomTextTertiary} onPress={onSignUpScreenOnePressed} type="TERTIARY">  Sign up</Text></Text>

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
    bottom: 60,
    padding : 1,
    display:'flex',
    justifyContent:'space-evenly',
    height:'100%',
  
  },

  middleText: {
    color: 'gray', 
    bottom: 65,  
  },

  tandalogo : {
    top: 35,
    // left: -38,
    width: '120%',
    maxWidth: 500,
    maxHeight: 400,
    borderRadius: 8,
    
    // backgroundImage: url(./tandalogo.png),
 
  },
phoneNumberIndication: {
top: 18,
// '74'
width: '64%',
color: 'black',
// '#363739'
  fontSize: 11,
  //get font
  // fontFamily: "WorkSans-Bold",
  fontWeight: 600,
  lineHeight: 17,
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