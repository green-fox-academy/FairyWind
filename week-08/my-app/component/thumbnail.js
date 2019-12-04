import React from 'react';
import { StyleSheet, TouchableOpacity, View, ImageBackground } from 'react-native';

export default function Thumbnail({ picture, updateIndex }) {
  return (
    <View>
      {picture.map((element, index) =>
        <ImageBackground key={index} style={styles.thumbnail} source={element.src} >
          <TouchableOpacity onPress={() => updateIndex(index)} />
        </ImageBackground>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  thumbnail: {
    // height: '100%'
  }
});