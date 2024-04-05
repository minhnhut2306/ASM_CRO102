import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet,View } from 'react-native';
import AppNavigation from './src/app/AppNavigation';
import { AppProvider } from './src/app/main/AppContext';
import { Provider } from 'react-redux';
import store from './src/app/api/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppProvider>
        <View style={styles.container}>
          <StatusBar />
          <AppNavigation />
        </View>
      </AppProvider>
    </Provider>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
