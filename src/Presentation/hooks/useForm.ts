import { useReducer } from 'react'
import { IOnChangeProps } from '../components/input/index'
import { validateInput } from '../libs/validateInput'

export enum InputActions {
  INPUT_CHANGE = 'INPUT_CHANGE',
  INPUT_BLUR = 'INPUT_BLUR',
  INPUT_FOCUS = 'INPUT_FOCUS',
  CLEAR_INPUT = 'CLEAR_INPUT',
  SET_INPUT = 'SET_INPUT'
}

type TInputState = {
  value: string
  error: string
  hasError: boolean
  active: boolean
  name: string
  isFormValid: boolean
}

type TFormAction = {
  type: InputActions
  data: TInputState
}

export type TFormState = {
  [key: string]: TInputState
}

const formReducer = (state: TFormState, action: TFormAction) => {
  const { type, data } = action

  switch (type) {
    case InputActions.INPUT_CHANGE:
      return {
        ...state,
        [data.name]: {
          ...state[data.name],
          value: data.value,
          error: data.error,
          hasError: data.hasError,
          active: data.active,
          isFormValid: data.isFormValid
        }
      }
    default:
      return state
  }
}

export const useForm = (initialState: TFormState) => {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const onChange = ({ text, name }: IOnChangeProps) => {
    const { hasError, error } = validateInput({ value: text, name })
    dispatch({
      type: InputActions.INPUT_CHANGE,
      data: {
        value: text,
        hasError,
        error,
        name,
        active: true,
        isFormValid: !hasError
      }
    })
  }

  return {
    formState: state,
    onChange
  }
}
