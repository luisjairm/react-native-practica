import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import MainStackNavigation from './src/Presentation/navigation/MainStackNavigation'

export default function App () {
  return (
    <NavigationContainer>
      <StatusBar style='inverted' />
      <MainStackNavigation />
    </NavigationContainer>
  )
}
