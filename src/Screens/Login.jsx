import { useEffect } from 'react'

const APP_LOGIN_URL = 'https://app.kuberopay.com/login'

const Login = () => {
  useEffect(() => {
    window.location.replace(APP_LOGIN_URL)
  }, [])

  return null
}

export default Login
