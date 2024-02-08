import React from 'react'
import { View } from 'react-native'
import Input from '../../../components/input'
import { TFormState, useForm } from '../../../hooks/useForm'
import styles from './styles'

const initialState: TFormState = {
  name: {
    active: false,
    error: '',
    hasError: false,
    isFormValid: false,
    name: 'name',
    value: ''
  }
}

const Register = () => {
  const { formState } = useForm(initialState)

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          label='Nombre'
          name={formState.name.name}
          active={formState.name.active}
          error={formState.name.error}
          hasError={formState.name.hasError}

        />
      </View>
    </View>
  )
}

export default Register
