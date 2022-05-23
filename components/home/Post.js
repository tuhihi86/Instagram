import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl:
            'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-like-instagram-flatart-icons-outline-flatarticons.png',
        likedImageurl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like.png'
    },
    {
        name: 'Comment',
        imageUrl:
            'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-chat-instagram-flatart-icons-outline-flatarticons.png',
    },
    {
        name: 'Share',
        imageUrl:
            'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-send-instagram-flatart-icons-outline-flatarticons.png',
    },
    {
        name: 'Save',
        imageUrl:
            'https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/ffffff/external-bookmark-instagram-flatart-icons-outline-flatarticons.png',
    }
]
const Post = ({ post }) => {
    return (
        <View style={styles.container}>
            <Divider orientation="vertical" width={1} />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={styles.viewFooter}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
            </View>
        </View>
    )
}

const PostHeader = ({ post }) => {
    return (
        <View style={styles.containerPostHeader}>
            <View style={styles.postHeader}>
                <Image source={{ uri: post.profile_picture }} style={styles.imageProfile} />
                <Text style={styles.textProfile}>{post.user}</Text>
            </View>
            <Text style={styles.textProfile}>...</Text>
        </View>
    )
}

const PostImage = ({ post }) => {
    return (
        <View style={styles.imageView}>
            <Image source={{ uri: post.imageUrl }} style={styles.image} />
        </View>
    )
}

const PostFooter = () => (
    <View style={{ flexDirection: 'row' }}>
        <View style={styles.leftpostFooter}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
        </View>
    </View >
)

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
)

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: "600" }}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)
 
const Caption = ({ post }) => (
    <View style={{marginTop:5}}>
            <Text style={{color:'white', fontWeight: "600" }}>{post.user}:</Text>
            <Text style={{color:'white', marginLeft:5}}>{post.caption}</Text>
    </View>
)

const CommentsSection = ({post}) => ({
    
})

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    containerPostHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center',
    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    imageProfile: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },
    textProfile: {
        color: 'white',
        marginLeft: 5,
        fontWeight: '700'
    },
    image: {
        height: '100%',
        resizeMode: 'cover',
    },
    imageView: {
        width: '100%',
        height: 300,
    },
    footerIcon: {
        width: 33,
        height: 33
    },
    viewFooter: {
        marginHorizontal: 15,
        marginTop: 10
    },
    leftpostFooter: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between'
    }
})
export default Post