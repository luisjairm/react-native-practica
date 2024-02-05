import React from 'react'
import { TextInput, View } from 'react-native'

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
  onChange: ({ name, text }: IOnChangeProps) => void
  onFocus: ({ name }: IOnFocus) => void
  onBlur: ({ name }: IOnBlur) => void
}

const Input = ({
  placehoder,
  value,
  name,
  onChange,
  onBlur,
  onFocus
}: IInputProps) => {
  return (
    <View>
      <TextInput
        placeholder={placehoder}
        value={value}
        onChangeText={(text) => onChange({ name, text })}
        onFocus={() => onFocus({ name })}
        onBlur={() => onBlur({ name })}
      />
    </View>
  )
}

export default Input
