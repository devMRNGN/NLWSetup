import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold, 
  Inter_700Bold, 
  Inter_800ExtraBold} 
  from '@expo-google-fonts/inter';
import { Loading } from './src/assets/components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  });

  if(!fontsLoaded){
    return (
      <Loading />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello devMRNGN!</Text>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'Inter_800ExtraBold',
  }
});
