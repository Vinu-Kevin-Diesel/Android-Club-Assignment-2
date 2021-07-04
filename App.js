/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { 
  NavigationContainer, 
 } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';

 const Drawer = createDrawerNavigator();
 
 



 
 const App = () => {
   return (
     <NavigationContainer >
       <Drawer.Navigator 
       initialRouteName="Home" drawerStyle={{
       backgroundColor: '#ffffff',
     width: 240,
   }}
   drawerContent={props => <DrawerContent {...props}/>}
   >
         <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
       </Drawer.Navigator>
  
     </NavigationContainer>
   );   
  }
 
 
 export default App;
 