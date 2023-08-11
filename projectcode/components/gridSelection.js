import React from "react";
import { View,StyleSheet,Text,Image,FlatList,TouchableOpacity} from "react-native";
import { useState } from "react";

const GridSelection = ({onPressGrid}) => {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const data = [
        { id: '1', name: "3 x 3" },
        { id: '2', name: "4 x 4" },
        { id: '3', name: "5 x 5" },
        { id: '4', name: "6 x 6" },
    ];

    const handleItemPress = (index) => {
        setSelectedItemIndex(index);
        var grid = data[index].name
        onPressGrid(grid)
        };
        const renderItem = ({ item, index }) => {
        const isSelected = index === selectedItemIndex;
        const itemStyle = isSelected ? styles.selectedsquare : styles.square;
        const textStyle = isSelected ? styles.selectedtext : styles.textcolor;
        return (
            <TouchableOpacity onPress={() => handleItemPress(index)}>
            <View style={itemStyle} >
            <Text style={[textStyle,styles.other]}>{item.name}</Text>
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


export default GridSelection