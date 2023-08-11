import React from "react";
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

const Header = () =>{
    return(
        <View>
          <Text style={styles.heading}>Welcome to</Text>
          <Text style={styles.heading2}>Tic-Tac-Toe</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading:{
      color:'#FFFFAD',
      fontSize:34,
      marginVertical:5,
      marginTop:0,
      fontFamily:"SignPainter-HouseScript",
      textAlign:"center"
    },
    heading2:{
      color:'#77B1FF',
      fontSize:34,
      fontFamily:"SofiaPro-Light",
    },
  });
export default Header