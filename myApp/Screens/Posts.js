/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import { View, Text } from 'react-native'

function Posts() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/history')
            .then((response) => response.json()
                .then((json) => setData(json))), []
    }

    )

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ history }) => (
                    <Text>{history.title}</Text>
                )} />
        </View>
    )


}

export default Posts