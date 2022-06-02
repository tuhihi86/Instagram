import { View, TextInput, StyleSheet, Text, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Validator from 'email-validator'
import axios from 'axios'

const URL_CONNECTION = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDDkPLvaBAUzp-j8q4X-ilWAOw9Or5wqWM'

const SignupForm = ({ navigation }) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'A username is required'),
        password: Yup.string().required().min(8, 'Your password has to have at least 8 characters')
    })

    const onSignup = (email,username,password) => {
        console.log(email,username,password)
        axios.post(`${URL_CONNECTION}`, {
          email,
          password,
          username,
          returnSecureToken: true
        })
        .then(function (response) {
          console.log('Success',response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return (
        <View style={styles.wapper}>
            <Formik
                initialValues={{ email: '', username: '', password: '' }}
                onSubmit={values => { onSignup(values.email,values.username, values.password) }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
                    <>
                        <View style={[styles.inputField,
                        {
                            borderColor: values.email.length < 1 || Validator.validate(values.email)
                                ? '#ccc' : 'red'
                        }]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Email"
                                autoCapitalize='none'
                                keyboardType="email-address"
                                textContentType='emailAddress'
                                autofocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField,
                        {
                            borderColor: values.email.length < 1 || Validator.validate(values.email)
                                ? '#ccc' : 'red'
                        }]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Username"
                                autoCapitalize='none'
                                textContentType='username'
                                autofocus={true}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField, {
                            borderColor: 1 > values.password.length || values.password.length >= 8
                                ? '#ccc' : 'red'
                        }]}>
                            <TextInput
                                placeholderTextColor="#444"
                                placeholder="Password"
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={styles.text}>
                            <Text style={{ color: '#6BB0F5' }}>Forgot password?</Text>
                        </View>
                        <Pressable titleSize={20} style={styles.button(isValid)}
                            onPress={handleSubmit}
                            disabled={!isValid}>
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>
                        <View style={styles.singupContainer} >
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Text style={{ color: '#6BB0F5' }}>Log In</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wapper: {
        marginTop: 80
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1
    },
    text: {
        alignItems: 'flex-end',
        marginBottom: 30
    },
    button: isValid => ({
        backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
    }),
    buttonText: {
        fontWeight: "600",
        color: '#fff',
        fontSize: 20
    },
    singupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50
    }
})

export default SignupForm