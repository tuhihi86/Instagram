import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/logo-instagram.png')} />
      </TouchableOpacity>
      
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
          <Image style={styles.icon} source={require('../../assets/plus-2-math.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../../assets/like--v1.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.underBadgeText}>11</Text>
          </View>
          <Image style={styles.icon} source={require('../../assets/facebook-messenger.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: 'row'
  },
  logo: {
    height: 50,
    width: 100,
    resizeMode: 'contain',
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent:'center',
  },
  underBadgeText: {
    color: 'white',
    fontWeight: "600",
  }
})
export default Header