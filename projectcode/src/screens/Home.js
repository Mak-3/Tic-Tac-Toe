import React from "react";
import { Text,View,StyleSheet,Image,Button} from "react-native";
import { Audio } from 'expo-av';
import Header from "../../components/header";
import NeonButton from "../../components/neonbutton";
import { useNavigation } from "@react-navigation/native";

const Home = () =>{
  const navigation = useNavigation();
  function navigateToProfile() {
    stopSound();
    navigation.navigate("Profile");
}
  const [sound, setSound] = React.useState();
  const [isPlaying, setIsPlaying] = React.useState(false);
  async function playSound() {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require('../../assets/Intro.mp3')
      );
      const { status } = await Audio.requestPermissionsAsync();
      if (status === 'granted') {
        await sound.playAsync({ shouldPlay: true, isLooping: true });
        setIsPlaying(true);
      } else {
        console.warn('Audio focus not granted.');
      }
      setSound(sound);
    } catch (error) {
      console.error('Error playing sound: ', error);
    }
  }
  function stopSound() {
    if (sound) {
      sound.stopAsync();
      sound.unloadAsync();
      setIsPlaying(false);
    }
  }
  React.useEffect(() => {
    playSound();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);
    return(
        <View style={styles.container}>
            <View>
              <Header/>
            </View>
            <View>
                <Image source={require("../../assets/tic-tac-toeBg.png")} style={styles.logo}></Image>
            </View>
            <View>
                <NeonButton text="Pass & Play" onPress={navigateToProfile}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        width:300,
        height:300,
        marginVertical:50
    },
    container:{
        flex:1,
        backgroundColor:"#010B1A",
        justifyContent:"center",
        textAlign:"center",
        alignItems:"center"
    }
})
export default Home
