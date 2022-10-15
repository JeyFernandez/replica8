import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import  Nav  from "./component/Nav";
import  Options  from "./component/Options";

export default function App() {
  return (
    <View style={styles.container}>
      <Nav/>
      <Options/>
      <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
