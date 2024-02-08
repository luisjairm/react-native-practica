import { Keyboard, KeyboardAvoidingView, Platform, StyleProp, Text, TextInput, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native'
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
  placehoder?: string
  value: string
  label?: string
  error: string
  hasError: boolean
  active: boolean
  secureTextEntry?: boolean
  onChange: ({ name, text }: IOnChangeProps) => void
  onFocus: ({ name }: IOnFocus) => void
  onBlur: ({ name }: IOnBlur) => void
  containerButtonStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  inputStyle?: StyleProp<TextStyle>
  errorStyle?: StyleProp<TextStyle>
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
  secureTextEntry,
  containerButtonStyle,
  labelStyle,
  inputStyle,
  errorStyle
}: IInputProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.content}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={[
          styles.containerInput,
          containerButtonStyle
        ]}
        >
          <View>
            <Text style={[
              styles.label,
              labelStyle
            ]}
            >{label}
            </Text>
            <TextInput
              placeholder={placehoder}
              value={value}
              onChangeText={(text) => onChange({ name, text })}
              onFocus={() => onFocus({ name })}
              onBlur={() => onBlur({ name })}
              style={[
                styles.input,
                inputStyle
              ]}
              secureTextEntry={secureTextEntry}
            />
            {
        hasError
          ? (
            <Text style={[styles.error, errorStyle]}>{error}</Text>
            )
          : null
      }
          </View>
          <View>
            <Text>Icon</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default Input
