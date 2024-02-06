import { StyleSheet } from 'react-native'

const InputStyle = StyleSheet.create({
  content: {
    // flex: 1
  },
  containerInput: {
    gap: 5
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold'
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingVertical: 10
  },
  error: {
    color: 'red',
    fontSize: 11
  }
})

export default InputStyle
