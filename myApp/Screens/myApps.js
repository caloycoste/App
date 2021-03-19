/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

function myApps({ navigation }) {


    return (
        <View>
            <View>
                <Icon name='facebook' type='font-awesome' color='#1877f2' />
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('Facebook')}}>
                    <Text>Facebook</Text></TouchableOpacity>
            </View>

            <View>
                <Icon name='twitter' type='font-awesome' color='#1da1f2' />
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('Twitter')}}>
                    <Text>Twitter</Text></TouchableOpacity>
            </View>

            <View>
                <Icon name='instagram' type='font-awesome' color='#c32aa3' />
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('Instagram')}}>
                    <Text>Instagram</Text></TouchableOpacity>
            </View>

            <View>
                <Icon name='spotify' type='font-awesome' color='#1ed760' />
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('Spotify')}}>
                    <Text>Spotify</Text></TouchableOpacity>
            </View>

            <View>
                <Icon name='rocket' type='font-awesome' color='#d32323' />
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('SpaceX')}}>
                    <Text>SpaceX</Text></TouchableOpacity>
            </View>

        </View>



    )
}

export default myApps
