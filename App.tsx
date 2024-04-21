<<<<<<< HEAD
const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import MenuAberto from "./screens/MenuAberto";
import TelaInicial from "./screens/TelaInicial";
import OlhoFechado from "./screens/OlhoFechado";
import Procurar from "./screens/Procurar";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="MenuAberto"
              component={MenuAberto}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TelaInicial"
              component={TelaInicial}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OlhoFechado"
              component={OlhoFechado}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Procurar"
              component={Procurar}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
=======
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { StatusBar } from 'react-native';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from "@expo-google-fonts/roboto"
import { Routes } from './src/routes';
import { Loading } from './src/components/Loading';


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      {fontsLoaded ? <Routes /> : <Loading/>}
    </ThemeProvider>
  );
}
>>>>>>> d3070ac166bfc0ad301831dcc07a11b5adce0b7e
