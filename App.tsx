import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider} from 'native-base';

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
      <NativeBaseProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar networkActivityIndicatorVisible={true} hidden={false} />
      </NativeBaseProvider>
    );
  }
}
