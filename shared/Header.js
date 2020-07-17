import React from 'react'
import { StyleSheet, Text, View, Image,ImageBackground} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({navigation,title}) {
    const iconHandler=()=>{
        navigation.openDrawer()
    }
    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            
            <MaterialIcons name="menu" size={30} color="black" onPress={iconHandler}  style={styles.icon}/>
                <Image source={require('../assets/heart_logo.png')} style={styles.heartLogo}/>
                <Text style={styles.headerText}>{title}</Text>
        </ImageBackground>
        
    );
}

const styles = StyleSheet.create({
    
    header:{
        width:320,
        height:60,
        flexDirection:'row',
        marginBottom:20
        
    },
    icon:{
        left:0,
        position:'absolute',
        marginTop:15,
        marginLeft:10

        
        
        
    },
    
    headerText:{
        fontWeight:"bold",
        fontSize:20,
        color:"#333",
        letterSpacing:1,
        marginLeft:5,
        marginTop:18
    },
    heartLogo:{
        width:26,
        height:22,
        marginLeft:100,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    }
    
})
