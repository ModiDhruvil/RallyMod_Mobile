import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import axios from 'axios';
axios.defaults.baseURL = 'http://rallymod.com/api/v1/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
      <AppNavigation />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})