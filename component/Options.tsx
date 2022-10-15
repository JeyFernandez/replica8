import { StyleSheet, Text, View,ScrollView } from 'react-native';
import  Productos  from './Producto';
 function Options() {
  return (
   <View>
     <View style={styles.op}>
        <View style={styles.texts}>
            <Text style={styles.text}>General</Text>
            <Text style={styles.text1}>Applications</Text>
        </View>
    </View>
    <ScrollView>
    <Productos/>    
    </ScrollView>
    
   </View>
  );
}

const styles = StyleSheet.create({
op:{
    alignItems:'center',
},
texts:{
    flexDirection:'row',
},
text:{
    color:'#A4A4A4',
    paddingTop:20,
    margin:1,
    paddingLeft:60,
    paddingRight:60,
    fontSize:23,
    borderBottomWidth:2,
    borderBottomColor:'#A4A4A4',
},
text1:{
    color:'#1D66FD',
    paddingTop:20,
    paddingLeft:40,
    paddingRight:40,
    fontSize:23,
    borderBottomWidth:3,
    borderBottomColor:'#1D66FD',
},
});
export default Options