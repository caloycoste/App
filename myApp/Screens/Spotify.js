/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { Icon } from 'react-native-elements'

function Spotify() {
    return (
        <View>
            <View>
                <Icon name='spotify' type='font-awesome' />
                <Text>Million of Songs.</Text>
                <Text>Free on Spotify</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Sign up free</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='google' type='font-awesome'/>
                    <Text>Sign up free</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

export default Spotify
