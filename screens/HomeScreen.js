import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import BottomTab,{bottomTabIcons} from '../components/home/BottomTab'
import Header from '../components/home/Header'
import Post from '../components/home/Post'
import Stories from '../components/home/Stories'
import { POSTS } from '../data/posts'
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTab icons={bottomTabIcons}/>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    marginTop:20
  }
})

export default HomeScreen