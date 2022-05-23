import React from 'react'
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import { USERS } from '../../data/users'

const Stories = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {USERS.map((story, index) => (
                    <View style={styles.story} key={index}>
                        <Image style={styles.storyImage} source={{ uri: story.image }} />
                        <Text style={styles.storyText}>
                            {story.user.length > 11
                                ? story.user.slice(0, 10).toLocaleLowerCase() + ' ... '
                                : story.user.toLowerCase()}</Text>
                    </View>))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 13,
    },
    story: {
        flex: 1,
        alignItems: 'center',
    },
    storyImage: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: '#ff8501'
    },
    storyText: {
        color: 'white',
        fontSize: 10
    }
})
export default Stories