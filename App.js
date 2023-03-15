import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/Navigation/Navigation';
import {Provider} from 'react-redux';
import {Store} from './src/Redux';

function App() {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.mainConatiner}>
        <StatusBar />
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
  },
});
