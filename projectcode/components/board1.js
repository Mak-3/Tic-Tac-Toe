import React, { useState,useEffect } from "react";
import { View,SafeAreaView,StyleSheet,Text,Image, Pressable} from "react-native";
import {Square1,Square2,Square3,Square4} from "./square";
import { Audio } from 'expo-av';

const Board1=({usericonvalue,usernamevalue,usergridvalue,usersidevalue})=>{
    var userside = usersidevalue;
    const [sound, setSound] = React.useState();
    const [player1score, setPlayer1score] = useState(0);
    const [player2score, setPlayer2score] = useState(0);
    async function playSound(soundPath) {
      const { sound } = await Audio.Sound.createAsync(soundPath);
      setSound(sound);
      await sound.playAsync();
    }
    React.useEffect(() => {
      return sound
        ? () => {
            sound.unloadAsync();
          }
        : undefined;
    }, [sound]);
    const [activeTurn, setactiveTurn] = useState('X');
    const [values, setValues] = useState([
        null,null,null,
        null,null,null,
        null,null,null
    ])

    const updateBoard = (position) =>{
        playSound(require('../assets/tap.mp3'));
        if(!values[position]){
            temp = [...values]
            temp[position] =activeTurn
            setValues(temp)
            if (activeTurn === 'X'){
                setactiveTurn('O')
            }
            else{
                setactiveTurn('X')
            }
        }
    }
    const checkWinner = (values) =>{
        wins=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        for (let i = 0; i < wins.length; i++){
            const [a,b,c] = wins[i];
            if(values[a] && values[a]=== values[b] && values[a] === values[c]){
                return values[a]
            }
        }
        return null
    }
    const reset = () =>{
        setValues ([
            null,null,null,
            null,null,null,
            null,null,null
        ])
        setactiveTurn('X')
    }
    
    useEffect(()=>{
        const res = checkWinner(values)
        if (res === 'X'){
            alert("Player X won the match");
            userside==res?setPlayer1score(player1score+1):setPlayer2score(player2score+1);
            playSound(require('../assets/win.mp3'));
            reset();
        }
        else if( res === "O"){
            alert("Player O won the match");
            userside==res?setPlayer1score(player1score+1):setPlayer2score(player2score+1)
            playSound(require('../assets/win.mp3'));
            reset();
        }
        else
            console.log("no winner yet")

    },[values])
    return(
        <>
        <View>
            <Text style={styles.heading}>Tic-Tac-Toe</Text>
        </View>
        <View style={styles.playerboxes}>
            <View style={styles.player1box}>
                <View>
                    <Text style={styles.player1color}>{usernamevalue}</Text>
                </View>
                <View style={styles.innerborder1}>
                    <View style={styles.centerimage}>
                        <Image source={usericonvalue} style={styles.icons}/>
                    </View>
                    <View>
                        <Text style={styles.player1font2}>{usersidevalue}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.player1font2}>{player1score}</Text>
                </View>
            </View>
            <View style={styles.player2box}>
                <View>
                    <Text style={styles.player2color}>Player - 2</Text>
                </View>
                <View style={styles.innerborder2}>
                    <View style={styles.centerimage}>
                        <Image source={require("../assets/2.png")} style={styles.icons}/>
                    </View>
                    <View>
                        <Text style={styles.player2font2}>{usersidevalue=="X"?"O":"X"}</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.player2font2}>{player2score}</Text>
                </View>
            </View>
        </View>
        <View style={styles.board}>
            <Square1 styleName="BottomRightBorder" onPress={()=>updateBoard(0)} value={values[0]} usersideval = {userside}/>
            <Square1 styleName="BottomRightBorder" onPress={()=>updateBoard(1)} value={values[1]} usersideval = {userside}/>
            <Square1 styleName="BottomBorder" onPress={()=>updateBoard(2)} value={values[2]} usersideval = {userside}/>
            <Square1 styleName="BottomRightBorder" onPress={()=>updateBoard(3)} value={values[3]} usersideval = {userside}/>
            <Square1 styleName="BottomRightBorder" onPress={()=>updateBoard(4)} value={values[4]} usersideval = {userside}/>
            <Square1 styleName="BottomBorder" onPress={()=>updateBoard(5)} value={values[5]} usersideval = {userside}/>
            <Square1 styleName="RightBorder" onPress={()=>updateBoard(6)} value={values[6]} usersideval = {userside}/>
            <Square1 styleName="RightBorder" onPress={()=>updateBoard(7)} value={values[7]} usersideval = {userside}/>
            <Square1 onPress={()=>updateBoard(8)} value={values[8]} usersideval = {userside}/>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    heading:{
        color:"#77B1FF",
        fontSize:24,
        marginTop:-50,
        fontFamily:"SofiaPro-SemiBold"
    },
    icons:{
        width:32,
        height:32,
    },
    centerimage:{
        margin:5,
        alignItems:"center",
    },
    board:{
        textAlign:'center',
        justifyContent:'center',
        width:400,
        height:400,
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        margin:"auto",
        bottom:-70
    },
    playerboxes:{
        display:"flex",
        flexDirection:"row"
    },
    player1box:{
        width:132,
        height:180,
        borderWidth:1.5,
        borderColor:"#C4A8FF",
        borderRadius:8,
        margin:20
    },
    player2box:{
        width:132,
        height:180,
        borderWidth:1.5,
        borderColor:"#FFD9AD",
        borderRadius:8,
        margin:20
    },
    player1color:{
        color:"#C4A8FF",
        fontSize:12,
        margin:10
    },
    player2color:{
        color:"#FFD9AD",
        fontSize:12,
        margin:10
    },
    player1font2:{
        color:"#C4A8FF",
        fontSize:32,
        textAlign:"center",
    },
    player2font2:{
        color:"#FFD9AD",
        fontSize:32,
        textAlign:"center",
    },
    innerborder1:{
        borderWidth:1.5,
        borderBottomColor:"#C4A8FF",
        borderTopColor:"#C4A8FF",
    },
    innerborder2:{
        borderWidth:1.5,
        borderBottomColor:"#FFD9AD",
        borderTopColor:"#FFD9AD",
    }
});
    
export default Board1