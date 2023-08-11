import React from "react";
import { View,SafeAreaView,StyleSheet,Text,Image} from "react-native";
import {Square1,Square2,Square3,Square4} from "./square";
import { useState,useEffect } from "react";
import { Audio } from 'expo-av';

const Board4=({usericonvalue,usernamevalue,usergridvalue,usersidevalue})=>{
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

    const [activeTurn,setactiveTurn] = useState('X');
    const [values,setValues] = useState([
        null,null,null,null,null,null,
        null,null,null,null,null,null,
        null,null,null,null,null,null,
        null,null,null,null,null,null,
        null,null,null,null,null,null,
        null,null,null,null,null,null
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
            [0, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, 17],
            [18, 19, 20, 21, 22, 23],
            [24, 25, 26, 27, 28, 29],
            [30, 31, 32, 33, 34, 35],
            [0, 6, 12, 18, 24, 30],
            [1, 7, 13, 19, 25, 31],
            [2, 8, 14, 20, 26, 32],
            [3, 9, 15, 21, 27, 33],
            [4, 10, 16, 22, 28, 34],
            [5, 11, 17, 23, 29, 35],
            [0, 7, 14, 21, 28, 35],
            [5, 10, 15, 20, 25, 30]
        ]
        for (let i = 0; i < wins.length; i++){
            const [a,b,c,d,e,f] = wins[i];
            if(values[a] && values[a]=== values[b] && values[a] === values[c] && values[a]=== values[d] && values[a] === values[e]&& values[a] === values[f]){
                return values[a]
            }
        }
        return null
    }
    const reset = () =>{
        setValues ([
            null,null,null,null,null,null,
            null,null,null,null,null,null,
            null,null,null,null,null,null,
            null,null,null,null,null,null,
            null,null,null,null,null,null,
            null,null,null,null,null,null
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
            userside==res?setPlayer1score(player1score+1):setPlayer2score(player2score+1);
            playSound(require('../assets/win.mp3'));
            reset();
        }
        else
            console.log("no winner yet")

    },[values])
    return(
        <><View>
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
                    <Text style={styles.player2color}>P2- AI</Text>
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
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(0)} value={values[0]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(1)} value={values[1]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(2)} value={values[2]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(3)} value={values[3]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(4)} value={values[4]} usersideval = {userside} />
            <Square4 styleName="BottomBorder"onPress={()=>updateBoard(5)} value={values[5]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(6)} value={values[6]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(7)} value={values[7]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(8)} value={values[8]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(9)} value={values[9]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(10)} value={values[10]} usersideval = {userside} />
            <Square4 styleName="BottomBorder"onPress={()=>updateBoard(11)} value={values[11]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(12)} value={values[12]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(13)} value={values[13]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(14)} value={values[14]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(15)} value={values[15]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(16)} value={values[16]} usersideval = {userside} />
            <Square4 styleName="BottomBorder"onPress={()=>updateBoard(17)} value={values[17]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(18)} value={values[18]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(19)} value={values[19]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(20)} value={values[20]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(21)} value={values[21]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(22)} value={values[22]} usersideval = {userside} />
            <Square4 styleName="BottomBorder"onPress={()=>updateBoard(23)} value={values[23]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(24)} value={values[24]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(25)} value={values[25]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(26)} value={values[26]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(27)} value={values[27]} usersideval = {userside} />
            <Square4 styleName="BottomRightBorder"onPress={()=>updateBoard(28)} value={values[28]} usersideval = {userside} />
            <Square4 styleName="BottomBorder"onPress={()=>updateBoard(29)} value={values[29]} usersideval = {userside} />
            <Square4 styleName="RightBorder"onPress={()=>updateBoard(30)} value={values[30]} usersideval = {userside} />
            <Square4 styleName="RightBorder"onPress={()=>updateBoard(31)} value={values[31]} usersideval = {userside} />
            <Square4 styleName="RightBorder"onPress={()=>updateBoard(32)} value={values[32]} usersideval = {userside} />
            <Square4 styleName="RightBorder"onPress={()=>updateBoard(33)} value={values[33]} usersideval = {userside} />
            <Square4 styleName="RightBorder"onPress={()=>updateBoard(34)} value={values[34]} usersideval = {userside} />
            <Square4 onPress={()=>updateBoard(35)} value={values[35]} usersideval = {userside} />
        </View>
    </>
    )
}

const styles = StyleSheet.create({
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
      heading:{
        color:"#77B1FF",
        fontSize:24,
        marginTop:-50,
        fontFamily:"SofiaPro-SemiBold"
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
    },
    centerimage:{
        margin:5,
        alignItems:"center",
    },
    icons:{
        width:32,
        height:32,
    },
});
    
export default Board4