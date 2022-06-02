import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUpload from './FormikPostUpload'

const Header = ({navigation}) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() =>navigation.goBack()}>
            <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png' }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW POST</Text>
        <Text></Text>
    </View>
)

const AddNewPost = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <FormikPostUpload navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    headerText: {
        color:'#fff',
        fontWeight:"700",
        fontSize:20,
        marginRight:23
    }
})

export default AddNewPost