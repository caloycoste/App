/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

function myApps({ navigation }) {


    return (
        <View style={styles.container}>
            <View style={styles.optionBar}>
                <Icon name='facebook' color='#1877f2' size={40}/>
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('Facebook')}}>
                    <Text style={styles.label}>Facebook</Text></TouchableOpacity>
            </View>

            <View style={styles.optionBar}>
                <Icon name='twitter' type='font-awesome' color='#1da1f2' size={40} />
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('Twitter')}}>
                    <Text style={styles.label}>Twitter</Text></TouchableOpacity>
            </View>

            <View style={styles.optionBar}>
                <Icon name='instagram' type='font-awesome' color='#c32aa3' size={40}/>
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('Instagram')}}>
                    <Text style={styles.label}>Instagram</Text></TouchableOpacity>
            </View>

            <View style={styles.optionBar}>
                <Icon name='spotify' type='font-awesome' color='#1ed760' size={40}/>
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('Spotify')}}>
                    <Text style={styles.label}>Spotify</Text></TouchableOpacity>
            </View>

            <View style={styles.optionBar}>
                <Icon name='rocket' type='font-awesome' color='#d32323' size={40} />
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('SpaceX')}}>
                    <Text style={styles.label}>SpaceX</Text></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
    },

    optionBar: {
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        alignSelf:'center',
        marginVertical:10,
        backgroundColor:'#e1e1e1',
        width:'70%',
        padding:20,
        borderRadius:15,
    },

    label: {
        marginHorizontal:20,
        fontSize:18,
        fontWeight:'bold'
    }

})

export default myApps
