/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Screens/Home'
import About from './Screens/About'
import SignUp from './Screens/SignUp'
import myApps from './Screens/myApps'
import Facebook from './Screens/Facebook'
import Twitter from './Screens/Twitter'
import Instagram from './Screens/Instagram'
import Spotify from './Screens/Spotify'
import SpaceX from './Screens/SpaceX'


const stack = createStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen name='Home' component={Home}
          options={{ title: 'myApp' }} />
        <stack.Screen name='About' component={About}
          options={{ title: 'About' }} />
        <stack.Screen name='Sign Up' component={SignUp}
          options={{ title: 'Sign Up' }} />
        <stack.Screen name='myApps' component={myApps}
          options={{ title: 'myApps' }} />
        <stack.Screen name='Facebook' component={Facebook}
          options={{ title: 'Facebook' }} />
        <stack.Screen name='Twitter' component={Twitter}
          options={{ title: 'Twitter' }} />
        <stack.Screen name='Instagram' component={Instagram}
          options={{ title: 'Instagram' }} />
        <stack.Screen name='Spotify' component={Spotify}
          options={{ title: 'Spotify' }} />
        <stack.Screen name='SpaceX' component={SpaceX}
          options={{ title: 'SpaceX' }} />
      </stack.Navigator>
    </NavigationContainer>

  )
}


export default App
