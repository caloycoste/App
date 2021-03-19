/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native'
import { Icon } from 'react-native-elements'

function Missions() {

    const [data, setData] = useState([]);
    const [modal, setModal] = useState(false)

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/missions')
            .then((response) => response.json())
            .then((json) => setData(json))
    }, [])

    return (
        <View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={styles.container}>
                            <Text style={styles.title}>{item.mission_name}</Text>
                            <Text style={styles.details}>{item.description}</Text>
                        </View>
                    )} />
                <View>
                    <TouchableOpacity onPress={() => { setModal((prev) => !prev) }}>
                        <Text>See Missions Table</Text>
                    </TouchableOpacity>
                    <Modal animationType='slide' visible={modal}>
                        <Icon name='close' onPress={()=>setModal((prev)=> !prev)}/>
                        <Text>Table</Text>
                    </Modal>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginHorizontal: 30,
    },

    title: {
        color: 'teal',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10
    },

    details: {
        textAlign: 'justify',
        marginBottom: 20,
        lineHeight: 20,
    }
}


)

export default Missions
