import React, { useState } from 'react'
import { View, Text, TextInput, Image, Button } from 'react-native'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { Divider } from 'react-native-elements'

const PLACEHOLDER_IMG = 'https://www.jamiemaison.com/creating-a-simple-text-editor/placeholder.png'

const uploadPostSchema = Yup.object().shape({
    imageurl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit.')
})

const FormikPostUpload = () => {
    const [thumbnailUrl, setThumbnaulUrl] = useState(PLACEHOLDER_IMG)
    return (
        <Formik initialValues={{ caption: '', imageUrl: '' }}
            onSubmit={(values) => console.log(values)}
            validationSchema={uploadPostSchema}
            validateOnMount={true}
            >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid }) => (
                <>
                    <View style={{ margin: 20, justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Image style={{ width: 100, height: 100 }} source={{ uri: PLACEHOLDER_IMG }} />
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <TextInput
                                style={{ color: 'white', fontSize: 20 }}
                                placeholder='Write a caption...'
                                placeholderTextColor='gray'
                                multiple={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption} />
                        </View>
                    </View>
                    <Divider width={0.2} orientation='vertical' />
                    <TextInput
                        style={{ color: 'white', fontSize: 18 }}
                        placeholder='Enter image URL'
                        placeholderTextColor='gray'
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl} />
                    {errors.imageUrl && (
                        <Text>
                            {errors.imageUrl}
                        </Text>
                    )}
                    <Button onPress={handleSubmit} title='Share' disabled={!isValid}/>
                </>
            )}
        </Formik>
    )
}

export default FormikPostUpload