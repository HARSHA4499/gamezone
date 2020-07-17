import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        borderRadius:6,
        elevation:3,
        shadowColor:"#333",
        shadowRadius:2,
        shadowOpacity:0.3,
        backgroundColor:"#fff",
        shadowOffset:{width:2,height:2},
        marginHorizontal:2,
        marginVertical:6

        
    },
    cardContent:{
        marginHorizontal:8,
        marginVertical:15
    }
})
