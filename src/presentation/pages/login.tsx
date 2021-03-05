import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'
import Context from '@/presentation/context/form/form-context'

type StateProps = {
  isLoading: boolean
  errorMessage: string
}
const Login: React.FunctionComponent = () => {
  const [state] = useState<StateProps>({
    isLoading: false,
    errorMessage: ''
  })

  return (
    <div className={Styles.login} >
      <LoginHeader />
      <Context.Provider value={state}>
        <form action="" className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Degite seu e-mail"/>
          <Input type="password" name="senha" placeholder="Digite sua senha"/>
          <button className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}> Criar conta </span>
          <FormStatus />
        </form>
      </Context.Provider>
    <Footer />
    </div>
  )
}

export default Login