import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'

export default function FlatButton({text,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.Button}>
            <Text style={styles.ButtonText}>{text}</Text>
        </View>
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    Button:{
        borderRadius:8,
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:"#f01d71"
    },
    ButtonText:{
        fontWeight:"bold",
        textAlign:"center",
        fontSize:16,
        color:"white",
        textTransform:"uppercase"

    }
})
