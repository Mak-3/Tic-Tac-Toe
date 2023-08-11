import React from "react";
import { View,StyleSheet,Text,Image,FlatList,TouchableOpacity} from "react-native";
import { useState } from "react";

const ProfileIcons = ({onPressIcon}) => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const data = [
        { id: '1', name: require("../assets/1.png")},
        { id: '2', name: require("../assets/2.png")},
        { id: '3', name: require("../assets/3.png")},
        { id: '4', name: require("../assets/4.png")},
        { id: '5', name: require("../assets/5.png")},
        { id: '6', name: require("../assets/6.png")},
    ];

    const handleItemPress = (index) => {
        setSelectedItemIndex(index);
            var icon = data[index].name
            onPressIcon(icon)
        };
        const renderItem = ({ item, index }) => {
        const isSelected = index === selectedItemIndex;
        const itemStyle = isSelected ? styles.selectedicon : styles.usericon;
    
        return (
            <TouchableOpacity onPress={() => handleItemPress(index)} style={styles.rowstyling}>
            <View style={[itemStyle]} >
                <Image source={item.name} style={styles.icons}/>
            </View>
            </TouchableOpacity>
        );
        };
    
        return (
        <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id
            }
        />
        );
}

const styles = StyleSheet.create({
    usericon:{
        width:72,
        height:72,
        borderRadius:36,
        marginRight:15,
        padding:2,
    },
    icons:{
        width:64,
        height:64,
    },
    selectedicon:{
        width:72,
        height:72,
        borderRadius:36,
        padding:2,
        marginRight:15,
        borderWidth:2,
        borderColor:"#FFFFAD",
    },
    rowstyling:{
        display:"flex",
        flexDirection:"row"
    }
})


export default ProfileIcons