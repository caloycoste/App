/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

function SignUp({ navigation }) {

    const [passwordSecured, setPasswordSecured] = useState(true)
    return (
        <View style={styles.container}>
            <Text style={styles.signupText}>Sign Up</Text>

            <View style={styles.inputBar}>
                <Icon name='user' type='font-awesome'/>
                <TextInput placeholder='Full Name' />
            </View>

            <View style={styles.inputBar}>
                <Icon name='map' type='font-awesome' size={20} />
                <TextInput placeholder='Country' />
            </View>

            <View style={styles.inputBar}>
                <Icon name='envelope' type='font-awesome' size={20} />
                <TextInput placeholder='Email' textContentType='emailAddress' />
            </View>

            <View style={styles.inputBar}>
                <TouchableOpacity onPress={() => setPasswordSecured(!passwordSecured)}>
                    <Icon name='eye' type='font-awesome' size={20} />
                </TouchableOpacity>
                <TextInput placeholder='Set Password' textContentType='password'
                    secureTextEntry={passwordSecured} />
            </View>

            <TouchableOpacity style={styles.signupBtn}
                onPress={() => {
                    navigation.navigate('Home')
                }}>
                <Text style={styles.signupBtnText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.iconBar}>
                <TouchableOpacity style={styles.iconBtn}>
                    <Icon name='facebook-square' type='font-awesome' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                    <Icon name='twitter' type='font-awesome' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                    <Icon name='instagram' type='font-awesome' />
                </TouchableOpacity>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        paddingTop: 50,
        paddingHorizontal: 20,
    },

    signupText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    inputBar: {
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: '#D5D5D5',
        marginLeft: 5,
        marginTop: 10,
    },

    signupBtn: {
        backgroundColor: 'teal',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 20,
    },

    signupBtnText: {
        color: '#F9F9F9',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    iconBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50
    },

    iconBtn: {
        marginHorizontal: 10,
        padding: 14,
        borderRadius: 10,
        backgroundColor: '#D5D5D5'
    },

})

export default SignUp
