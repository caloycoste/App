/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

function Spotify() {
    return (
        <View style={{backgroundColor:'#191414'}}>
            <View style={styles.welcomeContainer}>
                <Icon name='spotify' type='font-awesome'
                    color='white' size={50} marginBottom={20} />
                <Text style={styles.welcomeText}>Million of songs.</Text>
                <Text style={styles.welcomeText}>Free on Spotify.</Text>
            </View>
            <View style={styles.btnContainer}>  
                <TouchableOpacity style={styles.btnFree}>
                    <Text style={styles.btnText}>Sign up free</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Continue with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Continue with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={{color:'white', fontWeight:'bold', margin:10}}>Log in</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    welcomeContainer: {
        alignItems: 'center',
        marginTop: 195,
    },

    welcomeText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },

    btnContainer: {
        display:'flex',
        alignItems:'center',
        marginTop:50,

    },

    btnFree: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height: 50,
        borderRadius: 30,
        borderWidth:1,
        marginVertical:3,
        backgroundColor:'#1ed760',
        width:'85%'

    },

    btn: {
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        height: 50,
        borderRadius: 30,
        borderWidth:1,
        borderColor:'gray',
        marginVertical:3,
        width:'85%',
        textAlign:'center'
    },

    btnText: {
        fontSize:18, 
        fontWeight:'bold', 
        color:'white',
    }
})

export default Spotify
