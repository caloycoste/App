/* eslint-disable prettier/prettier */
import React from 'react'
import { Keyboard } from 'react-native'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'


function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to myApp!</Text>
            <Text style={styles.loginText}>Login</Text>
            <TextInput
                placeholder='Username'
                style={styles.input}
            />
            <TextInput
                placeholder='Password'
                textContentType='password'
                style={styles.input}
            />
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}
                onPress={() => {
                    navigation.navigate('About')
                }}>
                <Text style={styles.loginBtnText}>Login</Text>
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

            <View style={styles.signup}>
                <Text style={styles.signupText}>Don't have an account yet?</Text>
                <TouchableOpacity style={styles.signupBtn}
                    onPress={() => {
                        navigation.navigate('Sign Up')
                    }}><Text>Sign up</Text></TouchableOpacity>
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

    welcomeText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
    },

    loginText: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold',
    },

    input: {
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#D5D5D5',
    },

    forgotPassword: {
        fontSize: 13,
        alignSelf: 'flex-end',
        marginTop: 10,

    },

    loginBtn: {
        backgroundColor: 'teal',
        paddingVertical: 12,
        borderRadius: 10,
        marginTop: 10,
    },

    loginBtnText: {
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

    signup: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    signupText: {
        marginHorizontal: 5
    }




}


)

export default Home
