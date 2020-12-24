import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import CameraScreen from '../screens/CameraScreen';
import ChatScreen from '../screens/ChatScreen';
import CallScreen from '../screens/CallsScreen';
import StatusScreen from '../screens/StatusScreen';
import { MainTabParamList, CameraParamList, ChatParamList, CallsParamList, StatusParamList } from '../types';
import {Fontisto} from '@expo/vector-icons'
import {Camera} from "expo/build/removed.web";

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{activeTintColor: Colors[colorScheme].background,
          style: {
              backgroundColor:Colors[colorScheme].tint,
          },
          indicatorStyle:{
              backgroundColor: Colors[colorScheme].background,
              height: 4
          },
          labelStyle: {
              fontWeight:'bold',
          },
          showIcon: true,}}>
      <MainTab.Screen
        name="Camera"
        component={CameraNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={20} />,
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatNavigator}
      />
      <MainTab.Screen
        name="Calls"
        component={StatusNavigator}
      />
      <MainTab.Screen
        name="Status"
        component={CallsNavigator}
      />

    </MainTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<CameraParamList>();
function CameraNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Camera"
        component={CameraScreen}
        options={{ headerTitle: 'Camera Screen' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<ChatParamList>();
function ChatNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Chats"
        component={ChatScreen}
        options={{ headerTitle: 'Chat Screen' }}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<CallsParamList>();
function StatusNavigator() {
    return (
        <TabThreeStack.Navigator>
            <TabThreeStack.Screen
                name="Status"
                component={StatusScreen}
                options={{ headerTitle: 'Status Screen' }}
            />
        </TabThreeStack.Navigator>
    );
}

const TabFourStack = createStackNavigator<StatusParamList>();
function CallsNavigator() {
    return (
        <TabFourStack.Navigator>
            <TabFourStack.Screen
                name="Calls"
                component={CallScreen}
                options={{ headerTitle: 'Calls Screen' }}
            />
        </TabFourStack.Navigator>
    );
}