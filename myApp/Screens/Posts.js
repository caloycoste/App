/* eslint-disable prettier/prettier */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import History from './History'
import Missions from './Missions'
import Search from './Search'
import Messages from './Messages'

function Posts() {

    const tab = createBottomTabNavigator();

    return (
        <tab.Navigator tabBarOptions={{
            showLabel: false,
            activeTintColor:'teal',
            inactiveTintColor: 'black',
            activeBackgroundColor:'#F2F2F2',
        }}>
            <tab.Screen name='History' component={History}
                options={{
                    tabBarIcon: ({color}) => 
                        <Icon name='home' type='font-awesome' color={color}/>}}/>
            <tab.Screen name='Missions' component={Missions} 
                options={{
                    tabBarIcon: ({color}) => 
                        <Icon name='flag' type='font-awesome' color={color}/>}}/>
            <tab.Screen name='Search' component={Search} 
                options={{
                    tabBarIcon: ({color}) => 
                    <Icon name='search' type='font-awesome' color={color}/>
                }}/>
            <tab.Screen name='Messages' component={Messages} 
                options={{
                    tabBarIcon: ({color}) => 
                    <Icon name='envelope' type='font-awesome' color={color}/>
                }}
            />
        </tab.Navigator>

    )
}

export default Posts
