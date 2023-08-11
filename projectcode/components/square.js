import React from "react";
import { Text,View,SafeAreaView,StyleSheet, Pressable } from "react-native";

const Square1=({styleName,onPress,value,usersideval})=>{
    const selectedStyle1 = styles[styleName] || {};
    var userside = usersideval;
    return(
        <Pressable style={[styles.square1,selectedStyle1]} onPress={onPress}>
            <Text style={userside==value?styles.textStyle1:styles.textStyle12}>{value}</Text>
        </Pressable>
    )
}

const Square2=({styleName,onPress,value,usersideval})=>{
    const selectedStyle2 = styles[styleName] || {};
    var userside = usersideval;
    return(
        <Pressable style={[styles.square2,selectedStyle2]} onPress={onPress}>
            <Text style={userside==value?styles.textStyle2:styles.textStyle22}>{value}</Text>
        </Pressable>
    )
}

const Square3=({styleName,onPress,value,usersideval})=>{
    const selectedStyle3 = styles[styleName] || {};
    var userside = usersideval;
    return(
        <Pressable style={[styles.square3,selectedStyle3]} onPress={onPress}>
            <Text style={userside==value?styles.textStyle3:styles.textStyle32}>{value}</Text>
        </Pressable>
    )
}

const Square4=({styleName,onPress,value,usersideval})=>{
    const selectedStyle4 = styles[styleName] || {};
    var userside = usersideval;
    return(
        <Pressable style={[styles.square4,selectedStyle4]} onPress={onPress}>
            <Text style={userside==value?styles.textStyle4:styles.textStyle42}>{value}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    square1:{
        width:120,
        height:120,
    },
    square2:{
        width:90,
        height:80,
    },
    square3:{
        width:70,
        height:70,
    },
    square4:{
        width:60,
        height:60,
    },
    BottomRightBorder:{
        borderBottomColor:"#354458",
        borderRightWidth:6,
        borderBottomWidth:6,
        borderRightColor:"#354458",
    },
    BottomBorder:{
        borderBottomColor:"#354458",
        borderBottomWidth:6
    },
    RightBorder:{
        borderRightWidth:6,
        borderRightColor:"#354458",
    },
    textStyle1:{
        color:"#C4A8FF",
        fontSize:72,
        textAlign:"center",
    },
    textStyle12:{
        color:"#FFD9AD",
        fontSize:72,
        textAlign:"center",
    },
    textStyle2:{
        color:"#C4A8FF",
        fontSize:48,
        textAlign:"center",
    },
    textStyle22:{
        color:"#FFD9AD",
        fontSize:48,
        textAlign:"center",
    },
    textStyle3:{
        color:"#C4A8FF",
        fontSize:36,
        textAlign:"center",
    },
    textStyle32:{
        color:"#FFD9AD",
        fontSize:36,
        textAlign:"center",
    },
    textStyle4:{
        color:"#C4A8FF",
        fontSize:32,
        textAlign:"center",
    },
    textStyle42:{
        color:"#FFD9AD",
        fontSize:32,
        textAlign:"center",
    },
})
export {Square1,Square2,Square3,Square4}