/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

function myApps({ navigation }) {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.optionBar} onPress={() => {
                navigation.navigate('Facebook')
            }}>
                <Icon name='facebook' color='#1877f2' size={40} />
                <Text style={styles.label}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBar} onPress={() => {
                navigation.navigate('Twitter')
            }}>
                <Icon name='twitter' type='font-awesome' color='#1da1f2' size={40} />
                <Text style={styles.label}>Twitter</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBar} onPress={() => {
                navigation.navigate('Instagram')
            }}>
                <Icon name='instagram' type='font-awesome' color='#c32aa3' size={40} />
                <Text style={styles.label}>Instagram</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBar} onPress={() => {
                navigation.navigate('Spotify')
            }}>
                <Icon name='spotify' type='font-awesome' color='#1ed760' size={40} />
                <Text style={styles.label}>Spotify</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionBar} onPress={() => {
                navigation.navigate('SpaceX')
            }}>
                <Icon name='rocket' type='font-awesome' color='#d32323' size={40} />
                <Text style={styles.label}>SpaceX</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },

    optionBar: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: '#e1e1e1',
        width: '70%',
        padding: 20,
        borderRadius: 15,
    },

    label: {
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold'
    }

})

export default myApps
