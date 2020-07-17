import React from 'react'
import { StyleSheet, Text,View, Keyboard} from 'react-native'
import {globalStyles} from '../styles/global'
import {Formik} from 'formik'
import { TextInput, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { Button, Icon } from 'react-native-elements'
import * as yup from 'yup'
import FlatButton from '../shared/FlatButton'


const reviewSchema=yup.object({
    title:yup.string().required().min(4),
    body:yup.string().required().min(10),
    rating:yup.string().required().test('is-number','rating should be btween 1-5',(val)=>{return val<6 && val>0})
})
export default function ReviewForm({addReview}){

   
    return (
    
        <View style={globalStyles.container}>
            <Formik
            initialValues={{title:'',body:'',rating:''}}
            validationSchema={reviewSchema}
            onSubmit={(values)=>{
                addReview(values)
                

            }}
            >
            {(formikProps)=>(
                <View>
                    <TextInput 
                        minHeight={50}
                        placeholder="Review Title"
                        style={globalStyles.input}
                        onChangeText={formikProps.handleChange("title")}
                        value={formikProps.values.title}
                        onBlur={formikProps.handleBlur('title')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.title && formikProps.errors.title}</Text>
                    <TextInput 
                        multiline
                        minHeight={100}
                        placeholder="Review Body"
                        style={globalStyles.input}
                        onChangeText={formikProps.handleChange("body")}
                        value={formikProps.values.body}
                        onBlur={formikProps.handleBlur('body')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.body && formikProps.errors.body}</Text>
                    <TextInput 
                        placeholder="Rate It(1-5)"
                        minHeight={50}
                        style={globalStyles.input}
                        onChangeText={formikProps.handleChange("rating")}
                        value={formikProps.values.rating}
                        keyboardType="numeric"
                        onBlur={formikProps.handleBlur('rating')}
                    />
                    <Text style={globalStyles.errorText}>{formikProps.touched.rating && formikProps.errors.rating}</Text>
                    <FlatButton onPress={formikProps.handleSubmit} text="submit"/>
                    
                    
                </View>
            )
            
            }

            </Formik>
            
        </View>
    
    
    )
        }