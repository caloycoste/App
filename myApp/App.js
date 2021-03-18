/* eslint-disable prettier/prettier */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Screens/Home'
import About from './Screens/About'
import SignUp from './Screens/SignUp'
import Posts from './Screens/Posts'


const stack = createStackNavigator();

function App() {
  return (
 
      <NavigationContainer>
        <stack.Navigator initialRouteName='Home'>
          <stack.Screen name='Home' component={Home} 
            options={{title: 'myApp'}}/>
          <stack.Screen name='About' component={About} 
            options={{title: 'About'}}/>
          <stack.Screen name='Sign Up' component={SignUp}
            options={{title: 'Sign Up'}}/>
          <stack.Screen name='Posts' component={Posts}
            options={{title: 'Feed'}}/>
        </stack.Navigator>
      </NavigationContainer>

  )
}


export default App
