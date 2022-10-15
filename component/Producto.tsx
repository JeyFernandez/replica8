import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome,EvilIcons, FontAwesome5 } from "@expo/vector-icons";

export default function Productos() {
  return (
    <View >
      <ScrollView>
        <View style={styles.produc}>
        <View style={styles.produc1}>
          <View style={styles.containerBall}>
          <Feather name="dribbble" style={{color:'#DC3E7B',fontSize:35,}}/>
          </View>
          <View>
            <Text style={styles.title}>Product Managent</Text>
            <Text style={styles.subtitle}>Dribble Inc.</Text>
          </View>
          <View style={styles.options}>
          <EvilIcons name="chevron-right" color="black" style={styles.icon1}/>
          </View>
        </View>

        <View style={styles.caseButton}>
          <TouchableOpacity style={{borderRadius:8,backgroundColor: "#EEF4FF",padding: 8,}}>
            <Text style={{color:'#2E72FE'}}>Application Sent</Text>
          </TouchableOpacity>
        </View>
        </View>
        
        <View style={styles.produc}>
        <View style={styles.produc1}>
          <View style={styles.containerBall}>
          <FontAwesome5 name="sketch" style={{color:'#FDAB04',fontSize:35,}}/>
          </View>
          <View>
            <Text style={styles.title}>UX Designer & Developer</Text>
            <Text style={styles.subtitle}>Sketch</Text>
          </View>
          <View style={styles.options}>
          <EvilIcons name="chevron-right" size={24} color="black" style={styles.icon1}/>
          </View>
        </View>
        <View style={styles.caseButton}>
          <TouchableOpacity style={{borderRadius:8,backgroundColor: "#E9FBEF",padding: 8,}}>
            <Text style={{color:'#11C079'}}>Application Accepted</Text>
          </TouchableOpacity>
        </View>
        </View>

        
        <View style={styles.produc}>
        <View style={styles.produc1}>
          <View style={styles.containerBall}>
          <FontAwesome5 name="airbnb" style={{color:'#FF385D',fontSize:35,}}/>
          </View>
          <View>
            <Text style={styles.title}>Qulity Assurance</Text>
            <Text style={styles.subtitle}>AirBNB</Text>
          </View>
          <View style={styles.options}>
          <EvilIcons name="chevron-right" color="black" style={styles.icon1}/>
          </View>
        </View>
        <View style={styles.caseButton}>
          <TouchableOpacity style={{borderRadius:8,backgroundColor: '#FEE9E9',padding: 8,}}>
            <Text style={{color:'#F96768'}}>Application Rejected</Text>
          </TouchableOpacity>
        </View>
        </View>

        
        <View style={styles.produc}>
        <View style={styles.produc1}>
          <View style={styles.containerBall}>
          <FontAwesome name="twitter" style={{color:'#1D9BF0',fontSize:35,}}/>
          </View>
          <View>
            <Text style={styles.title}>Software Engineer</Text>
            <Text style={styles.subtitle}>Twitter Inc.</Text>
          </View>
          <View style={styles.options}>
          <EvilIcons name="chevron-right" color="black" style={styles.icon1}/>
          </View>
        </View>
        <View style={styles.caseButton}>
          <TouchableOpacity style={{borderRadius:8,backgroundColor: "#FEF8E3",padding: 8,}}>
            <Text style={{color:'#FCD644'}}>Application Pending</Text>
          </TouchableOpacity>
        </View>
        </View>
        
        
        <View style={styles.produc}>
        <View style={styles.produc1}>
          <View style={styles.containerBall}>
          <FontAwesome name="wechat"  style={{
            color:'white',fontSize:30, backgroundColor:'#0EDB6D', borderRadius:15, padding:6,
            }}/>
          </View>
          <View>
            <Text style={styles.title}>Network Administrator</Text>
            <Text style={styles.subtitle}>WeChat</Text>
          </View>
          <View style={styles.options}>
          <EvilIcons name="chevron-right" color="black" style={styles.icon1}/>
          </View>
        </View>
        <View style={styles.caseButton}>
          <TouchableOpacity style={{borderRadius:8,backgroundColor: "#EDF4FF",padding: 8,}}>
            <Text style={{color:'#2467FD'}}>Application Accepted</Text>
          </TouchableOpacity>
        </View>
        </View>

        
        <View style={styles.produc}>
        <View style={styles.produc1}>
          <View style={styles.containerBall}>
          <FontAwesome name="snapchat-square" style={{color:'#FCD132',fontSize:45,}}/>
          </View>
          <View>
            <Text style={styles.title}>Software Engineer</Text>
            <Text style={styles.subtitle}>Twitter Inc.</Text>
          </View>
          <View style={styles.options}>
          <EvilIcons name="chevron-right" color="black" style={styles.icon1}/>
          </View>
        </View>
        <View style={styles.caseButton}>
          <TouchableOpacity style={{borderRadius:8,backgroundColor: "#FEF8E3",padding: 8,}}>
            <Text style={{color:'#FCD644'}}>Application Accepted</Text>
          </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
    </View>   
  );      
}
const styles = StyleSheet.create({
  produc: {
    borderBottomWidth:1,
    paddingBottom:20,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    borderColor:'#F0F0F0',
  },
  produc1: {
    alignItems:'center',
    marginLeft:15,
    flexDirection:'row',
  },
  containerBall:{
    alignItems: "center",
    borderColor:'#F0F0F0',
    padding:12,
    borderWidth:1,
    borderRadius:18,
    marginRight:20,
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
  },
  title:{
    fontSize:23,
  },
  subtitle:{
  color:'#666666',
  fontSize:15,
  },
  caseButton:{
    marginLeft:100,
    alignItems:'flex-start',
  },
});
