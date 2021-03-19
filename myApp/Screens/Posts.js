/* eslint-disable prettier/prettier */
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
import History from './History'
import Missions from './Missions'
import Capsules from './Capsules'
import Search from './Search'

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
            <tab.Screen name='Capsules' component={Capsules} 
                options={{
                    tabBarIcon: ({color}) => 
                    <Icon name='rocket' type='font-awesome' color={color}/>
                }}
            />
            <tab.Screen name='Search' component={Search} 
                options={{
                    tabBarIcon: ({color}) => 
                    <Icon name='search' type='font-awesome' color={color}/>
                }}
            />
        </tab.Navigator>

    )
}

export default Posts
