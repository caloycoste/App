/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

function Spotify() {
    return (
        <View style={{ backgroundColor: '#191414', height: '100%' }}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                <View >
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
                        <Text style={{ color: 'white', fontWeight: 'bold', marginTop:10}}>Log in</Text>
                    </TouchableOpacity>
                </View>
                </View>
                
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems:'center'
    },

    subContainer: {
        bottom:0,
        position: 'absolute',
        alignItems:'center',
        marginBottom:10
    },

    welcomeText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center'
    },

    btnContainer: {
        display:'flex',
        alignItems: 'center',
        marginTop: 50,
        width:'100%',

    },

    btnFree: {
        width: '130%',
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 30,
        borderWidth: 1,
        marginVertical: 3,
        backgroundColor: '#1ed760',
    },

    btn: {
        width: '130%',
        height: 50,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'gray',
        marginVertical: 3,
    },

    btnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    }
})

export default Spotify
