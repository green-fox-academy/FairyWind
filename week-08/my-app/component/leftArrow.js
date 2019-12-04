import React from 'react';
import { StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import arrow from '../component/arrow.png';

export default function LeftArrow({ currentIndex, updateIndex }) {

  return (
    <ImageBackground source={arrow} style={styles.arrow}>
      <TouchableOpacity  onPress={() => updateIndex(currentIndex - 1)} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  arrow: {
    flex:1,
    width:50,
    height:50,
  }
});
