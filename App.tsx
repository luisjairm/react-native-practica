import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Input, { IOnBlur, IOnChangeProps, IOnFocus } from './src/Presentation/components/input'

export default function App () {
  const [email, setEmail] = useState('')

  const onChange = ({ name, text }: IOnChangeProps) => {
    setEmail(text)
    console.log({ name, text })
  }

  const onFocus = ({ name }: IOnFocus) => {
    console.log('On Focus: ', name)
  }

  const onBlur = ({ name }: IOnBlur) => {
    console.log('On Blur: ', name)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
      <Input
        name='name'
        value={email}
        placehoder='Escriba su nombre completo'
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
