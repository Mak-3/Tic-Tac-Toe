import React from "react";
import { View,SafeAreaView,Text,StyleSheet,TextInput,Image,ScrollView,Pressable} from "react-native";
import Header from "../../components/header";
import {CustomButton,CustomButtonwithIcon} from "../../components/button";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";
import ProfileIcons from "../../components/profileIcons";

const Profile=()=>{
    const navigation = useNavigation();
    const [isPressed, setIsPressed] = useState(false);
    const [value, onChangeText] = React.useState('John Doe');
    const handlePress = () => {
        setIsPressed(!isPressed);
      };
    var usericon = require("../../assets/1.png")
    const handlePictureValue = (icon) => {
        usericon=icon
      }
    function navigateToSettings() {
        navigation.navigate("Settings",{"username":value,"usericon":usericon});
    }
    return(
        
        <View style={styles.container}>
            <View style={styles.headerpos}>
                <Header/>
            </View>
            <View style={styles.profileCard}>
                <Text style={styles.heading1}>PLAYER 1 PROFILE</Text>
                <Text style={styles.heading2}>Name</Text>
                <TextInput
                    style={[styles.heading1,styles.input]}
                    placeholder="John Doe"
                    placeholderTextColor="#BFDAFF"
                    onChangeText={text => onChangeText(text)} 
                />
                <Text style={styles.heading2}>Choose your Avatar</Text>
                <View style={styles.iconslist} horizontal={true}>
                    <View>
                        <ProfileIcons onPressIcon={handlePictureValue}/>
                    </View>
                </View>
            </View>
            <View style={styles.buttonpos}>
                <CustomButton name="Next" onPress= {()=>navigateToSettings()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerpos:{
      position:"absolute",
      top:50
    },
    profileCard:{
        borderWidth:1,
        borderColor:"#77B1FF",
        borderRadius:8,
        width:350,
        height:290,
        textAlign:"center",
        padding:20,
    },
    usericon:{
        width:72,
        height:72,
        borderRadius:36,
        marginRight:10,
        padding:2
    },
    icons:{
        width:64,
        height:64,
    },
    selectedicon:{
        borderWidth:2,
        borderColor:"#FFFFAD",
    },
    container: {
        padding:10,
        backgroundColor: '#010B1A',
        alignItems: 'center',
        flex:1,
        justifyContent:"center"
    },
    heading1:{
        fontSize:14,
        color:"#BFDAFF",
        marginVertical:8
    },
    heading2:{
        fontSize:14,
        color:"#77B1FF",
        marginVertical:8
    },
    input:{
        backgroundColor:"#142848",
        borderRadius:8,
        width:300,
        height:40,
        opacity:0.8,
        padding:10
    },
    buttonpos:{
        position:"absolute",
        bottom:50,
        right:10
    }
})

export default Profile