import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FichaDeFrequencia } from '../screens/Ficha-frequencia';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen 
          name="fichadefrequencia"
          component={FichaDeFrequencia}
        />
      </Navigator>
    );
  }