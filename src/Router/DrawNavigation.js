import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import 
{ 
    Button, 
    Box, 
    NativeBaseProvider 
} from "native-base";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigation from "../Router/HomeNavigation"
import Page_About from "../Pages/Page_About"

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
}

const DrawNavigation = () => {
    return (
        <Drawer.Navigator
            useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            >
            <Drawer.Screen name="LADIES CHAMPIONSHIP" component={HomeNavigation} />
            <Drawer.Screen name="Page_About" component={Page_About} />
        </Drawer.Navigator>
        
    )
}

export default DrawNavigation;