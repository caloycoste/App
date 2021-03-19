/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

function Twitter() {
    return (
        <View style={styles.container}>
            <Icon name='twitter' type='font-awesome' 
            color='#1da1f2' size={30} marginTop={10}/>
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>See what's happening in the world right now.</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Create account</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Have an account already?</Text>
                <TouchableOpacity>
                    <Text>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        display:'flex',
        backgroundColor:'#f5f8fa', 
        height: '100%'
    },

    welcomeContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:150
    },

    welcomeText: {
        color:'#14171a',
        fontWeight:'bold',
        fontSize: 30,
        textAlign:'left',
        marginHorizontal:45,
    },

    btn: {
        marginTop: 40,
        backgroundColor:'#1da1f2',
        height:50,
        borderRadius:30,
        width:'80%',
        justifyContent:'center'
    },

    btnText: {
        color:'#f5f8fa',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        
    }
})

export default Twitter
