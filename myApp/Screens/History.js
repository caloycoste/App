/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native'
import { View, Text, ActivityIndicator, StyleSheet, Modal } from 'react-native'
import { Icon } from 'react-native-elements'

function History() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/history')
            .then((response) => response.json()
                .then((json) => setData(json)))
        setIsLoading(false)
    }, [])

    return (
        <View style={styles.container}>
            {isLoading ? <View><ActivityIndicator size='large' animating /></View>
                : <View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity onPress={() => { setModal((prev) => !prev) }}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </TouchableOpacity>
                                <View>
                                    <Modal animationType='slide' visible={modal}>
                                        <TouchableOpacity onPress={() => { setModal((prev) => !prev) }}>
                                            <Icon name='close' />
                                        </TouchableOpacity>
                                        <View>
                                            <Text>{item.title}</Text>
                                            <Text>{item.details}</Text>
                                        </View>
                                    </Modal>
                                </View>
                            </View>
                        )} />
                </View>}
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
    },

    title: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'teal'
    },

    details: {
        textAlign: 'justify',
        marginBottom: 10,
        paddingRight: 20,

    }


}


)

export default History