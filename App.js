import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context"
import SignInScreen from './src/screens/SignInScreen';


export default function App() {
  return (
   <SafeAreaView styles={styles.root}>
    <SignInScreen/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
