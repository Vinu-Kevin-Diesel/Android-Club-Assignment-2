import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      barStyle={{ backgroundColor: 'tomato' }}
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#D60E1E',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarColor: '#70E20E',
        tabBarIcon: ({ color }) => (
          <Icon name="bell" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#1F04EE',
        tabBarIcon: ({ color }) => (
          <Icon name="account" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreStackScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#F900F1',
        tabBarIcon: ({ color }) => (
          <Icon name="alpha-e-box-outline" color={color} size={26} />
        ),
      }}
    />

  </Tab.Navigator>
  
);

export default MainTabScreen;

 const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
            headerStyle : {
              backgroundColor: '#D60E1E',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold'
            }
          }}>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
              title: 'HOME SCREEN',
              headerLeft: () => (
                  <Icon.Button name="menu" size={25}
                  backgroundColor="#D60E1E" onPress={() => navigation.openDrawer()}
                  >
                  </Icon.Button>
              )
            }}/>
          </HomeStack.Navigator>
    );
    
    const DetailsStackScreen = ({navigation}) => (
      <DetailsStack.Navigator screenOptions={{
              headerStyle : {
                backgroundColor: '#70E20E',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}>
              <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
                title: 'DETAILS SCREEN'
              }}/>
            </DetailsStack.Navigator>
      );

      const ProfileStackScreen = ({navigation}) => (
        <ProfileStack.Navigator screenOptions={{
                headerStyle : {
                  backgroundColor: '#1F04EE',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}>
                <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
                  title: 'PROFILE SCREEN'
                }}/>
              </ProfileStack.Navigator>
        );

        const ExploreStackScreen = ({navigation}) => (
            <DetailsStack.Navigator screenOptions={{
                    headerStyle : {
                      backgroundColor: '#F900F1',
                    },
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                      fontWeight: 'bold'
                    }
                  }}>
                    <DetailsStack.Screen name="Profile" component={ExploreScreen} options={{
                      title: 'EXPLORE SCREEN'
                    }}/>
                  </DetailsStack.Navigator>
            );