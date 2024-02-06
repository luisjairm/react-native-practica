import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import styles from './styles'

export interface IOnChangeProps {
  text: string
  name: string
}

export interface IOnBlur {
  name: string
}
export interface IOnFocus {
  name: string
}

export interface IInputProps {
  name: string
  placehoder: string
  value: string
  label: string
  error: string
  hasError: boolean
  active: boolean
  secureTextEntry: boolean
  onChange: ({ name, text }: IOnChangeProps) => void
  onFocus: ({ name }: IOnFocus) => void
  onBlur: ({ name }: IOnBlur) => void
}

const Input = ({
  placehoder,
  value,
  name,
  label,
  onChange,
  onBlur,
  onFocus,
  hasError,
  error,
  active,
  secureTextEntry
}: IInputProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.content}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[styles.containerInput]}>
          <Text style={[styles.label]}>{label}</Text>
          <TextInput
            placeholder={placehoder}
            value={value}
            onChangeText={(text) => onChange({ name, text })}
            onFocus={() => onFocus({ name })}
            onBlur={() => onBlur({ name })}
            style={[styles.input]}
            secureTextEntry={secureTextEntry}
          />
          {
        hasError
          ? (
            <Text style={[styles.error]}>{error}</Text>
            )
          : null
      }
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Input
