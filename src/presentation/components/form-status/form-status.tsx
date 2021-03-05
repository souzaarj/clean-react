import React, { useContext } from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '../spinner/spinner'
import Context from '@/presentation/context/form/form-context'

const FormStatus: React.FunctionComponent = () => {
  const { isLoading, errorMessage } = useContext(Context)
  return (
    <div data-testId="error-wrap" className={Styles.errorWrap}>
      { isLoading && <Spinner className={Styles.spinner} /> }
      { errorMessage && <span className={Styles.error}>{errorMessage}</span> }
     </div>
  )
}

export default FormStatus
