import { StyleSheet, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NewsList } from './Components/NewsList/NewsList';

export default function App() {

  return (
    <View style={styles.container}>
      <NewsList/>
      {/* <StatusBar style="auto" /> */}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
