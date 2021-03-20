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

            <View style={styles.loginContainer}>
                <View style={styles.loginSubContainer}>
                <Text style={{color: '#aab8c2', fontSize:15}}>Have an account already?</Text>
                <TouchableOpacity>
                    <Text style={{color:'#1da1f2', fontSize:15}}> Log in</Text>
                </TouchableOpacity>
                </View>
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
        marginVertical:160
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
    },

    loginContainer: {
        flex:1,
        justifyContent:'flex-end'
    },

    loginSubContainer: {
        position:'absolute',
        bottom:0,
        display:'flex',
        flexDirection:'row',
        marginHorizontal:45,
        marginBottom:20,
    }
})

export default Twitter
