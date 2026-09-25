import { useEffect } from 'react'

const APP_LOGIN_URL = 'https://app.kuberopay.com/login'

export const GetStart = () => {
  useEffect(() => {
    window.location.replace(APP_LOGIN_URL)
  }, [])

  return null
}
