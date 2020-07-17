import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { globalStyles } from '../styles/global'
import { Button } from 'react-native-elements'
import Card from '../shared/Card'
import {images} from '../styles/global'

export default function ReviewDetails({navigation}) {
    const data=navigation.getParam('rating');
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.innerText}>{navigation.getParam('title')}</Text>
                <View style={styles.rating}>
                <Text style={globalStyles.innerText}>{navigation.getParam('body')}</Text>
                </View>
                <View style={styles.rating}>
                    <Text style={globalStyles.innerText}>GameZone rating: </Text>
                    <Image 
                        source={images.ratings[data]}
                    />

                </View>
                
            </Card> 
            
            
        </View>
    )
}


const styles=StyleSheet.create({
    rating:{
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:10,
        marginTop:8,
        borderTopColor:"#eee",
        borderTopWidth:1,

    }

})