import React from 'react'; 
import { View, Text, StyleSheet } from 'react-native'; 
import 
{ 
    Button, 
    Box, 
    NativeBaseProvider 
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Pages/Home';
import Page_two from '../Pages/Page_two';
import Page_three from '../Pages/Page_three';
import Page_four from '../Pages/Page_four';

const TabStack = createBottomTabNavigator();  //Stack 선언

const HomeNavigation = () => {
    return (
        <TabStack.Navigator> 
        {/* Stack.Navigator 생성 (화면을 이동할 수 있게 해 줍니다.) */}
      		<TabStack.Screen name="HOME" component={Home} options={{ headerShown: false }}/>
		    <TabStack.Screen name="Page_two" component={Page_two} options={{ headerShown: false }}/>
            <TabStack.Screen name="Page_three" component={Page_three} options={{ headerShown: false }}/>
		    <TabStack.Screen name="Page_four" component={Page_four} options={{ headerShown: false }}/>
       		{/* Stack.Screen 안에 이동할때 사용할 화면 이름(name)과 
      		실제로 이동할 페이지 인 APP_Loading(component)를 넣어 추가해줍니다. */}
    	</TabStack.Navigator>
        
    )
}

export default HomeNavigation;