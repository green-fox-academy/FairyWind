import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Stage({ picture, currentIndex }) {
  return (
    <View style={styles.stage}>
      <Image style={{height:100}} source={picture[currentIndex].src} ></Image>
      <Text>{picture[currentIndex].description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  stage: {
    flex:3,
    backgroundColor:'red',
    width:300,
    height:300,
  },
});