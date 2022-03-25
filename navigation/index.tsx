/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { DrawerAndroid, Text } from '../components/Themed';

import HomeScreen from '../screens/Home';
import TodayReportsScreen from '../screens/TodayReport';
import LinkingConfiguration from './LinkingConfiguration';
import AppointmentScreen from '../screens/appointment';
import PatientCreateScreen from '../screens/Patient/PatientCreateScreen';
import LoginScreen from '../screens/LoginScreen';
import TitleStyles from '../styles/title';
import { createDrawerNavigator } from '@react-navigation/drawer'
const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen} options={{ title: 'Ncap Reports' }} />
      <Drawer.Screen name='Patient' component={PatientCreateScreen} options={{ title: 'Add a Patient' }} />
      <Drawer.Screen name='TodayReport' component={TodayReportsScreen} options={{ title: 'Daily Reports' }} />
      <Drawer.Screen name='Appointment' component={AppointmentScreen} options={{ title: 'Add a visit' }} />
      <Drawer.Screen name='login' component={LoginScreen} options={{ title: 'Log in' }} />
    </Drawer.Navigator>
  )
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {



  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name="MyDrawer" component={MyDrawer}  />
        <Stack.Screen name='Patient' component={PatientCreateScreen} options={{ title: 'Add a Patient' }} />
        <Stack.Screen name='TodayReport' component={TodayReportsScreen} options={{ title: 'Daily Reports' }} />
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Ncap Reports' }} />
        <Stack.Screen name='Appointment' component={AppointmentScreen} options={{ title: 'Add a visit' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */



