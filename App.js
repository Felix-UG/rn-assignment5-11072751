import { StatusBar } from 'expo-status-bar';
import react ,{useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image , Appearance} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './tabs/HomeScreen';
import CardsScreen from './tabs/CardsScreen';
import StatisticsScreen from './tabs/StatisticsScreen';
import SettingsScreen from './tabs/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

export default function App() {

  const[theme, setTheme] = useState(Appearance.getColorScheme());
  Appearance.addChangeListener((scheme) => {
    console.log(scheme)
  }) 

  return (
  <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen 
      name="Home"
      component={HomeScreen}
      options={{
      headerShown: false, 
        tabBarIcon: ({ color, size}) => (
          <Image source={require('./assets/home.png') }/>
        ),
      }}
    />  
    <Tab.Screen 
      name="My Cards"
      component={CardsScreen}
      options={{
      headerShown: false, 
        tabBarIcon: ({ color, size}) => (
          <Image source={require('./assets/myCards.png') }/>
        ),
      }}
    />  
    <Tab.Screen 
      name="Statistics"
      component={StatisticsScreen}
      options={{
      headerShown: false, 
        tabBarIcon: ({ color, size}) => (
          <Image source={require('./assets/statistics.png') }/>
        ),
      }}
    />  
    <Tab.Screen 
      name="Settings"
      component={SettingsScreen}
      options={{
      headerShown: false, 
        tabBarIcon: ({ color, size}) => (
          <Image source={require('./assets/settings.png') }/>
        ),
      }}
    />  
  </Tab.Navigator>
  </NavigationContainer>  
  );
}

const styles = StyleSheet.create({});
