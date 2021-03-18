/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import { View, Text, ActivityIndicator } from 'react-native'

function Posts() {

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/history')
            .then((response) => response.json()
                .then((json) => setData(json)))
        setIsLoading(false)
    }, [])

    return (
        <View>
            {isLoading ? <View><ActivityIndicator size='large' animating /></View> 
            : <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View>
                            <Text>{item.title}</Text>
                            <Text>{item.details}</Text>
                        </View>
                    )} />
            </View>}
        </View>


    )


}

export default Posts