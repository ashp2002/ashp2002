import React from 'react';
import { Button, Box, NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DrawNavigation from './src/Router/DrawNavigation'

const App = () => {
 
  return (
          <NativeBaseProvider>
            <NavigationContainer>
              <DrawNavigation />
            </NavigationContainer>
          </NativeBaseProvider>
  );
};

export default App;
