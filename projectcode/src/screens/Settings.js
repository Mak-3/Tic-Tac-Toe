import React from "react";
import { View,SafeAreaView,StyleSheet,Text,ScrollView} from "react-native";
import Header from "../../components/header";
import {CustomButton,CustomButtonwithIcon} from "../../components/button";
import { useRoute,useNavigation } from '@react-navigation/native';
import SideSelection from "../../components/sideSelection";
import GridSelection from "../../components/gridSelection";

const Settings=()=>{
    const navigation = useNavigation();
    const route = useRoute();
    var usericon = route.params.usericon;
    var username = route.params.username;
    var userside  ="X";
    var usergrid  ="3 x 3";
    const handleSideValue = (side) => {
      userside=side
    }
    const handleGridValue = (Grid) => {
      usergrid = Grid
    }
    function navigateToGame() {
        navigation.navigate("Game",{"username":username,"usericon":usericon,"userside":userside,"usergrid":usergrid});
    }
    function navigateToProfile() {
        navigation.goBack();
    }
    return(
        <View style={styles.container}>
        <View>
            <View style={styles.headerpos}>
                <Header/>
            </View>
            <View style={styles.settings}>
              <Text style={styles.heading1}>GAME SETTINGS</Text>
              <View style={styles.options}>
                <Text style={styles.heading2}>Select side</Text>
                <View style={styles.rowoption}>
                  <SideSelection onPressSide={handleSideValue}/>
                </View>
              </View>
              <View style={styles.options}>
                <Text style={styles.heading2}>Select grid size</Text>
                <View style={styles.rowoption} horizontal={true}>
                  <GridSelection onPressGrid={handleGridValue}/>
                </View>
              </View>
            </View>
            <View style={styles.buttonpos}>
                <View style={{flex:0.5}}>
                    <CustomButtonwithIcon name="Previous" onPress= {()=>navigateToProfile()}/>
                </View>
                <View style={{flex:0.5,alignItems:"flex-end"}}> 
                    <CustomButton name="Start Playing" onPress= {()=>navigateToGame()}/>
                </View>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerpos:{
        alignItems:"center",
        marginVertical:30
    },
    container: {
        padding:10,
        backgroundColor: '#010B1A',
        alignItems: 'center',
        flex:1,
    },
    heading1:{
      color:"#BFDAFF",
      fontSize:14
    },
    heading2:{
      color:"#77B1FF",
      fontSize:14
    },
    options:{
      marginVertical:10
    },
    rowoption:{
      display:"flex",
      flexDirection:"row",
      marginTop:10
    },
    settings:{
      backgroundColor:"#010B1A",
      borderColor:"#304D74",
      borderWidth:1,
      borderRadius:8,
      width:350,
      height:330,
      padding:15,
      marginTop:50,
      justifyContent:"center",
    },
    buttonpos:{
      position:"absolute",
      bottom:-220,
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      flex:1,
    }
})

export default Settings