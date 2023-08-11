import React from "react";
import { View,SafeAreaView,StyleSheet,Text, Pressable } from "react-native";
import Icon from "react-native-fa-icons";

const CustomButton = ({name,onPress}) =>{
    return (
        <View>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.textheading}>{name}</Text>
            </Pressable> 
        </View>
    )
}

const CustomButtonwithIcon = ({name,onPress}) =>{
    return (
        <View>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.textheading}>{name}</Text>
            </Pressable> 
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor:"#77B1FF",
        borderWidth:2,
        borderColor:"#77B1FF",
        borderRadius:8,
        width:120,
        height:40,
        color:"#010B1A",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
    },
    textheading:{
        fontSize:14,
    }
})

export {CustomButton,CustomButtonwithIcon}