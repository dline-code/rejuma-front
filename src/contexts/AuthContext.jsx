import React, { createContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import api from 'src/services/api'
import { useHistory } from 'react-router-dom'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  async function recoverUserInfo() {
    const USER_ID = JSON.parse(String(localStorage.getItem('user-id')))
    return await api.get(`/entity/${USER_ID}`)
  }

  useEffect(() => {
    const token = localStorage.getItem('zuri-token')
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
      recoverUserInfo().then(({ data }) => {
        setUser(data)
      })
    }
    setLoading(false)
  }, [])

  async function signIn({ contact, password }) {
    try {
      const { data } = await api.post('/session', { contact, password })
      console.log(data)
      if (data?.user?.typeentity?.description === 'Cliente') {
        history.push('/')
      }

      localStorage.setItem('zuri-token', JSON.stringify(data.token))
      localStorage.setItem('user-id', JSON.stringify(data.user.id))

      api.defaults.headers.common.Authorization = `Bearer ${data.token}`
      setAuthenticated(true)
      setUser(data.user)
      history.push('/#/dashboard')
    } catch (error) {
      Swal.fire('Error', `${error.response?.data?.error}`, 'error')
    }
  }

  async function signOut() {
    setAuthenticated(false)
    localStorage.removeItem('zuri-token')
    api.defaults.headers.common.Authorization = undefined
    setUser(null)
    history.push('/#/login')
  }

  if (loading) {
    return (
      <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
      </div>
    )
  }

  return (
    <AuthContext.Provider value={{ authenticated, user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
