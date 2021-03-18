/* eslint-disable prettier/prettier */
import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import History from './History'
import Missions from './Missions'
import Capsules from './Capsules'

function Posts() {

    const tab = createBottomTabNavigator();

    return (
        <tab.Navigator>
            <tab.Screen name='History' component={History} />
            <tab.Screen name='Missions' component={Missions} />
            <tab.Screen name='Capsules' component={Capsules} />
        </tab.Navigator>

    )
}

export default Posts
