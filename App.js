import React, { useEffect } from 'react';
import { Button, Box, NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import DrawNavigation from './src/Router/DrawNavigation'
import { PortalProvider } from 'react-native-portal';
import { isTablet } from './src/common/utils/deviceInfo';
import Orientation from 'react-native-orientation';

const App = () => {
  useEffect(() => {
    if (!isTablet) {
      Orientation.lockToPortrait();
    }
    return () => {
      if (!isTablet) {
        Orientation.unlockAllOrientations();
      }
    };
  }, []);

  return (
    <PortalProvider>
      <SafeAreaView style={{ flex : 1 }}>
        <NativeBaseProvider>
          <NavigationContainer>
            <DrawNavigation />
          </NavigationContainer>
        </NativeBaseProvider>
      </SafeAreaView>
    </PortalProvider>
  );
};

export default App;
