/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

function Twitter() {
    return (
        <View>
            <Icon name='twitter' type='font-awesome' />
            <View>
                <Text>See what's happening in the world right now.</Text>
                <TouchableOpacity>
                    <Text></Text>
                </TouchableOpacity>
            </View>
        </View>


    )
}

export default Twitter
