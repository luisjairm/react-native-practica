export interface IUserAuthenticated {
  name: string
  email: string
  password: string
  age: number
}

export type TUserLogin = Pick<IUserAuthenticated, 'email' | 'password'>
