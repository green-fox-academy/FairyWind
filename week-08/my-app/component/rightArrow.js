import React from 'react';
import arrow from '../component/arrow.png';
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function RightArrow({ currentIndex, updateIndex }) {

  return (
    <ImageBackground source={arrow} style={styles.arrow}>
      <TouchableOpacity onPress={() => updateIndex(currentIndex + 1)} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  arrow: {
    flex: 1,
    width: 50,
    height: 50,
    transform: ([{ rotateX: '180deg' }])
  }
});