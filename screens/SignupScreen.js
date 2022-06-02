import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

const INSTAGRAM_LOGO = 'https://digital7.vn/wp-content/uploads/2019/09/instagram-png-instagram-png-logo-1455.png'

const SignupScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
            </View>
            <SignupForm navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12
    },
    loginContainer: {
        alignItems: 'center',
        marginTop: 60
    }
})

export default SignupScreen