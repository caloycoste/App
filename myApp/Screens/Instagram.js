/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

function Instagram() {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>Instagram</Text>
                    <View>
                        <TextInput placeholder='Phone number, email or username' 
                            style={styles.formInput}/>
                        <View>
                            <TextInput placeholder='Password' 
                            textContentType='password' style={styles.formInput} />
                            <TouchableOpacity>
                                <Icon name='eye' type='font-awesome' />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text>Log In</Text>
                    </TouchableOpacity>
                    <View>
                        <Text>Forgot your login details?</Text>
                        <TouchableOpacity>
                            <Text>Get help login in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },

    subContainer: {
        alignItems: 'center',
        width:'100%'
    },

    formContainer: {
        width: '100%',
        alignContent:'center'
    },

    title: {
        fontSize:40,
        fontFamily:'serif',
        marginBottom:30
    },

    formInput: {
        borderRadius:10,
        borderColor:'gray',
        borderWidth:1,
        padding:10,
        marginBottom:10,
    }
}

)

export default Instagram
