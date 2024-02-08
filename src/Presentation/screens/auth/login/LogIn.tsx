import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input, { IOnBlur, IOnChangeProps, IOnFocus } from '../../../components/input'
import { TFormState, useForm } from '../../../hooks/useForm'
import { parseData } from '../../../libs/parseData'
import { TMainStackNavigationParamlist } from '../../../navigation/MainStackNavigation'

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

interface ILoginScreenProps extends NativeStackScreenProps<TMainStackNavigationParamlist> {}

export default function LogIn ({ navigation }: ILoginScreenProps) {
  const { formState, onChange, isFormValid } = useForm(initialState)

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
    const data = parseData(formState)
    console.log('FORM data ', JSON.stringify(data, null, 2))
  }

  return (
    <View style={styles.container}>
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
        <TouchableOpacity
          disabled={!isFormValid}
          style={isFormValid ? styles.buttonContainer : styles.buttonDisabled}
          onPress={onHandleLogin}
        >
          <Text style={styles.titleButton}>Inica Sesión</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Crea una Cuenta</Text>
      </TouchableOpacity>

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
  },
  buttonContainer: {
    backgroundColor: '#EC5878',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleButton: {
    fontWeight: '500',
    color: 'white',
    fontSize: 13
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  registerText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold'
  }
})
