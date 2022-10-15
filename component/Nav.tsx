
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AntDesign,Ionicons } from '@expo/vector-icons';

function Nav() {
  return (
    <View>
      <View style={styles.nav}>
        <AntDesign name="arrowleft" style={styles.icon} />
          <Text style={styles.text}>Notification</Text>
          <View style={styles.options}>
            <Ionicons name="ellipsis-horizontal-circle" style={styles.icon1}/>
          </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
nav:{
  paddingTop:50,
  flexDirection:'row',
  fontSize:40,
},
icon:{
  marginLeft:12,
  fontSize:30,
  padding:2,
},
options:{
  flex: 1, backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'center',
},
icon1:{
  alignSelf:'flex-end',
  textAlign: 'right',
  fontSize:30,
  marginRight:14,
},
text:{
  marginLeft:20,
  fontSize:30,
  padding:0,
},
});
export default Nav
