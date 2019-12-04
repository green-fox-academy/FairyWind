import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Stage from './component/stage';
import LeftArrow from './component/leftArrow';
import RightArrow from './component/rightArrow';
import picture from './data/pictureData'
import Thumbnail from './component/thumbnail';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  function updateIndex(currentIndex) {
    if (currentIndex < 0 || currentIndex >= picture.length) {
      return;
    }
    setCurrentIndex(currentIndex);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stage}>
        <LeftArrow currentIndex={currentIndex} updateIndex={updateIndex} />
        <Stage picture={picture} currentIndex={currentIndex} />
        <RightArrow currentIndex={currentIndex} updateIndex={updateIndex} />
      </View>
      <Thumbnail picture={picture} updateIndex={updateIndex} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stage: {
    flexDirection: 'column'
  }
});
