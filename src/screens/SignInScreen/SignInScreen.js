import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, View, Image, useWindowDimensions} from "react-native"
import Logo from '../../../assets/Logo.png'
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";


export default SignInScreen = () =>{

    const {height} = useWindowDimensions();
    return(
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.4}]}/>

            <CustomInput placeholder="Phone Number" />
            <CustomButton type='PRIMARY' text='Sign In' />
            
            <View style={styles.horizontalContainer}>
                <View style={styles.dividerLine} />
                    <View>
                        <Text style={styles.dividerText}>OR</Text>
                    </View>
                <View style={styles.dividerLine} />
            </View>
            <View style={styles.horizontalContainer}>
                <CustomButton type='CUSTOM' text='Facebook' fgColor='#4765A9' />
                <CustomButton type='CUSTOM' text='Google' fgColor='#DD4D44' />

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems:"center",
        width:'100%',
        padding:20
    },
    logo:{
        width:'100%',
        maxWidth:600
    },
    horizontalContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    dividerLine:{
        flex:1,
        height:1,
        backgroundColor: '#F0F0F0'
    },
    dividerText:{
        width: 50,
        textAlign: 'center',
        color:'#C0C0C0'
    }
});