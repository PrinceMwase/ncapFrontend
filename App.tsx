import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {

  axios.defaults.baseURL = 'http://localhost:8000';
  


  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [user, setUser] =useState ({})

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar networkActivityIndicatorVisible={true} hidden={false} />
      </SafeAreaProvider>
    );
  }
}
