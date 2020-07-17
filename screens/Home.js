import React,{useState} from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity, Modal, Keyboard,TouchableWithoutFeedback} from 'react-native'
import {globalStyles} from '../styles/global'
import {Button} from 'react-native-elements'
import Card from '../shared/Card'
import { MaterialIcons } from '@expo/vector-icons'
import { set } from 'react-native-reanimated'
import ReviewForm from './ReviewForm'



export default function Home({navigation}) {
    const [modelOpen, setModelOpen] = useState(false)
    const [reviews, setReviews] = useState([
        { title: "PlayerUnknown's Battlegrounds", rating: 5, body: 'Player Unknown Battleground known as PUBG is a game of adventure and fun', key: '1' },
        
      ]);
    

    const addReview=(review)=>{
        review.key=Math.random().toString();
        setReviews((prevReviews)=>{
            return [review,...prevReviews]
        });
    setModelOpen(false)
  }
    return (
        
        <View style={globalStyles.container}>
            <Modal visible={modelOpen} animationType="slide" >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                    <MaterialIcons 
                    name="close"
                    size={24}
                    onPress={()=>setModelOpen(false)}
                    style={{...styles.add,...styles.close}}
                    />
                    <ReviewForm addReview={addReview} />
                </View>
                </TouchableWithoutFeedback>
                </Modal>
               
            
            <MaterialIcons 
                name="add"
                size={24}
                onPress={()=>setModelOpen(true)}
                style={styles.add}
            />
            <FlatList 
                data={reviews}
                renderItem={({item})=>(
                    <TouchableOpacity onPress={()=>navigation.navigate('ReviewDetails',item)}>
                        <Card>
                            <Text style={globalStyles.innerText}>{item.title}</Text>    
                        </Card>
                    </TouchableOpacity>
                )}
            />
            
        </View>
    )
}

const styles=StyleSheet.create({
    add:{
        marginBottom:10,
        alignSelf:"center",
        borderWidth:1,
        borderColor:"#f2f2f2",
        padding:10,
        borderRadius:10
    },
    close:{
        marginTop:20,
        marginBottom:10
    },
    modalContent:{
        flex:1   
    }
})
