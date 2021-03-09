import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/form-context'
import { Validation } from '../protocols'

type Props = {
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    console.log(state)
    setState(
      {
        ...state,
        emailError: validation.validate('email', state.email),
        passwordError: validation.validate('password', state.password)

      }
    )
  }, [state.email, state.password])

  return (
    <div className={Styles.login} >
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form action="" className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Degite seu e-mail"/>
          <Input type="password" name="password" placeholder="Digite sua senha"/>
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}> Criar conta </span>
          <FormStatus />
        </form>
      </Context.Provider>
    <Footer />
    </div>
  )
}

export default Login
