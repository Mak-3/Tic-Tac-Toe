import React from "react";
import { View,SafeAreaView,StyleSheet,Text } from "react-native";
import Board1 from "../../components/board1";
import Board2 from "../../components/board2";
import Board3 from "../../components/board3";
import Board4 from "../../components/board4";
import { useRoute } from "@react-navigation/native";

const Game = () =>{
    const route = useRoute();
    var usericon = route.params.usericon;
    var username = route.params.username;
    var userside = route.params.userside;
    var usergrid = route.params.usergrid;
    return(
        <View style={styles.container}>
            {usergrid==="3 x 3"?<Board1 usericonvalue={usericon} usernamevalue={username} usergridvalue={usergrid} usersidevalue={userside}/>
            :usergrid==="4 x 4"?<Board2 usericonvalue={usericon} usernamevalue={username} usergridvalue={usergrid} usersidevalue={userside}/>
            :usergrid==="5 x 5"?<Board3 usericonvalue={usericon} usernamevalue={username} usergridvalue={usergrid} usersidevalue={userside}/>
            :<Board4 usericonvalue={usericon} usernamevalue={username} usergridvalue={usergrid} usersidevalue={userside}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#010B1A",
      alignItems:"center",
      justifyContent:"center"
    },
})

export default Game