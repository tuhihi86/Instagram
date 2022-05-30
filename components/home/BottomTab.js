import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png',
    },
    {
        name: 'Profile',
        active: 'https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png',
        inactive: 'https://cdn.vox-cdn.com/thumbor/xBIBkXiGLcP-kph3pCX61U7RMPY=/0x0:1400x788/1200x800/filters:focal(588x282:812x506)/cdn.vox-cdn.com/uploads/chorus_image/image/70412073/0377c76083423a1414e4001161e0cdffb0b36e1f_760x400.0.png',
    }
]

const BottomTab = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }}
            style={[
                styles.icon,
                // icon.name == 'Profile' ? styles.profilePic() : null,
                // activeTab == 'Profile' && icon.name == activeTab ? styles.profilePic(activeTab) : null
                ]} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wapper: {
        position:'relative',
        width: '100%',
        zIndex:999,
        backgroundColor: '#000'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        padding: 10
    },
    icon: {
        width: 30,
        height: 30
    },
    profilePic:(activeTab = '')=>({
        borderRadius:50,
        borderColor:'#fff',
        borderWidth: activeTab == 'Profile' ? 2: 0,
    })
})

export default BottomTab