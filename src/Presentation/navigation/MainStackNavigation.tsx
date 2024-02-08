import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from '../screens/auth/login/LogIn'
import Register from '../screens/auth/register/Register'

export type TMainStackNavigationParamlist = {
  LogIn: undefined
  Register: undefined
}

const Stack = createNativeStackNavigator<TMainStackNavigationParamlist>()

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EC5878'
        },
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen
        name='LogIn'
        component={LogIn}
        options={{
          title: 'Inicio de Sesión'
        }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          title: 'Crear Cuenta'
        }}
      />
    </Stack.Navigator>
  )
}

export default MainStackNavigation
