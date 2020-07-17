import {createStackNavigator} from 'react-navigation-stack'
import About from '../screens/About'
import Header from '../shared/Header'
import React from 'react'

const screens={
    About:{
        screen:About,
        navigationOptions:({navigation})=>{
            return {
                headerTitle:()=><Header navigation={navigation} title='About App'/>
            }
            
            
            
        }
    
    },
}

const AboutStack=createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:"lightgrey",
            height:60
        },
        headerTintColor:"black"
    }
        
    
})

export default AboutStack