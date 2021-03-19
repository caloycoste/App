/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'

function Missions() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/missions')
        .then((response) => response.json())
        .then((json) => setData(json))
    }, [])

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <View style={styles.container}>
                        <Text style={styles.title}>{item.mission_name}</Text>
                        <Text style={styles.details}>{item.description}</Text>
                    </View>
                )
                }

            />
            
        </View>
    )
}

const styles = StyleSheet.create ({

    container: {
        borderColor:'gray',
        borderBottomWidth: 1,
        marginHorizontal:30,
    },
    
    title: {
        color:'teal',
        fontSize:18,
        fontWeight:'bold',
        marginBottom: 10,
        marginTop:10
    },

    details: {
        textAlign:'justify',
        marginBottom:20,
        lineHeight:20,
    }
}


)

export default Missions
