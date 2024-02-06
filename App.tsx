import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, View } from 'react-native'
import Input, { IOnBlur, IOnChangeProps, IOnFocus } from './src/Presentation/components/input'
import { TFormState, useForm } from './src/Presentation/hooks/useForm'

const initialState: TFormState = {
  email: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'email',
    isFormValid: false
  },
  password: {
    value: '',
    error: '',
    hasError: false,
    active: false,
    name: 'password',
    isFormValid: false
  }
}

export default function App () {
  const { formState, onChange } = useForm(initialState)

  const onHandleChange = ({ name, text }: IOnChangeProps) => {
    onChange({ text, name })
  }

  const onFocus = ({ name }: IOnFocus) => {
    console.log('On Focus: ', name)
  }

  const onBlur = ({ name }: IOnBlur) => {
    console.log('On Blur: ', name)
  }

  const onHandleLogin = () => {
    console.log('FORM ', JSON.stringify(formState, null, 2))
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
      <View style={styles.formContainer}>
        <Input
          name={formState.email.name}
          label='Correo'
          placehoder='ejemplo@mail.com'
          value={formState.email.value}
          active={formState.email.active}
          error={formState.email.error}
          hasError={formState.email.hasError}
          onChange={onHandleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry={false}
        />
        <Input
          name={formState.password.name}
          label='Contraseña'
          placehoder='*******'
          value={formState.password.value}
          active={formState.password.active}
          error={formState.password.error}
          hasError={formState.password.hasError}
          onChange={onHandleChange}
          onFocus={onFocus}
          onBlur={onBlur}
          secureTextEntry
        />
      </View>

      <Button
        title='Login'
        onPress={onHandleLogin}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20
  },
  formContainer: {
    padding: 20,
    gap: 15,
    justifyContent: 'space-between'
  }
})
