const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

type TValidateInput = ({ value, name }: { value: string, name: string }) => { error: string, hasError: boolean }

export const validateInput: TValidateInput = ({ value, name }) => {
  let hasError = false
  let error = ''

  const formatValue = value.trim()

  switch (name) {
    case 'email':
      if (formatValue === '') {
        hasError = true
        error = 'Email required'
      } else if (!emailRegex.test(value)) {
        hasError = true
        error = 'Email is invalid'
      } else {
        hasError = false
        error = ''
      }
      break

    case 'password':
      if (formatValue === '') {
        hasError = true
        error = 'Password is required'
      } else if (!passwordRegex.test(value)) {
        hasError = true
        error = 'Password is invalid'
      }
      break
  }

  return {
    hasError,
    error
  }
}
