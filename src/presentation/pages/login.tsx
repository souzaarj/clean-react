import React from 'react'
import Styles from './login-styles.scss'
import { LoginHeader, Footer, Input, FormStatus } from '@/presentation/components'

const Login: React.FunctionComponent = () => {
  return (
    <div className={Styles.login} >
      <LoginHeader />
     <form action="" className={Styles.form}>
      <h2>Login</h2>
      <Input type="email" name="email" placeholder="Degite seu e-mail"/>
      <Input type="password" name="senha" placeholder="Digite sua senha"/>
      <button className={Styles.submit} type="submit">Entrar</button>
      <span className={Styles.link}> Criar conta </span>
      <FormStatus />
     </form>
    <Footer />
    </div>
  )
}

export default Login
