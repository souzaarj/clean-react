import React from 'react'
import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '../usecases/remote-authentication-factory'
import { makeLoginValidationComposite } from './login-validation-composite-factory'

export const makeLogin: React.FC = () => {
  const remoteAuthentication = makeRemoteAuthentication()
  const validationComposite = makeLoginValidationComposite()

  return (
    <Login
    authentication={remoteAuthentication}
    validation={validationComposite}
    />
  )
}
