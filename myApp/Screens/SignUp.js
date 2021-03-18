/* eslint-disable prettier/prettier */
import React from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

function SignUp({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.signupText}>Sign Up</Text>
            <TextInput
                placeholder='Full Name'
                style={styles.input}
            />
            <TextInput
                placeholder='Country'
                style={styles.input}
            />
            <TextInput
                placeholder='Email'
                textContentType='emailAddress'
                style={styles.input} />
            <TextInput
                placeholder='Set Password'
                textContentType='password'
                style={styles.input} />
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

    input: {
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#D5D5D5',
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
