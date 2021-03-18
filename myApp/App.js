/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Screens/Home'
import About from './Screens/About'
import SignUp from './Screens/SignUp'


const stack = createStackNavigator();

function App() {
  return (
 
      <NavigationContainer>
        <stack.Navigator initialRouteName='Home'>
          <stack.Screen name='Home' component={Home} />
          <stack.Screen name='About' component={About} />
          <stack.Screen name='Sign Up' component={SignUp}/>
        </stack.Navigator>
      </NavigationContainer>

  )
}


export default App
