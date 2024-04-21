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
