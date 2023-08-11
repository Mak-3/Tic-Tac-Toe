import React from "react";
import { View,SafeAreaView,StyleSheet,Text,Pressable} from "react-native";
import { useState } from "react";

const Selectsquare = (props) =>{
    const selectedStyle = styles[props.styleName] || {};
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        setIsPressed(!isPressed);
      };
    return(
        <Pressable onPress={handlePress} style={isPressed ? styles.selectedsquare : styles.square}>
            <Text style={isPressed ? [styles.selectedtext,selectedStyle]: [styles.textcolor,selectedStyle]} onPress={handlePress}>{props.value}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    square:{
        width:78,
        height:81,
        borderColor:"#25374E",
        borderWidth:1,
        borderRadius:8,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        marginRight:25
    },
    textcolor:{
        color:"#BFDAFF"
    },
    heading:{
        fontSize:34
    },
    other:{
        fontSize:16
    },
    selectedsquare:{
        borderColor:"#77B1FF",
        borderWidth:2,
        width:78,
        height:81,
        borderRadius:8,
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        marginRight:25
    },
    selectedtext:{
        color:"#77B1FF"
    }
})
export default Selectsquare;