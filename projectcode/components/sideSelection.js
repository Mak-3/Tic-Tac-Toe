import React from "react";
import { View,StyleSheet,Text,Image,FlatList,TouchableOpacity} from "react-native";
import { useState } from "react";

const SideSelection = ({ onPressSide }) => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const data = [
        { id: '1', name: "X" },
        { id: '2', name: "O" },
    ];

    const handleItemPress = (index) => {
        setSelectedItemIndex(index);
        var side = data[index].name
        onPressSide(side)
        };
        const renderItem = ({ item, index }) => {
        const isSelected = index === selectedItemIndex;
        const itemStyle = isSelected ? styles.selectedsquare : styles.square;
        const textStyle = isSelected ? styles.selectedtext : styles.textcolor;
        return (
            <TouchableOpacity onPress={() => handleItemPress(index)}>
            <View style={itemStyle} >
            <Text style={[textStyle,styles.heading]}>{item.name}</Text>
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
    },
})


export default SideSelection