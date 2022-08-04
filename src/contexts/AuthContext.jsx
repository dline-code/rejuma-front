import React, { createContext, useState } from 'react'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)

  if (loading) {
    return (
      <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
      </div>
    )
  }

  return <AuthContext.Provider value={{ loading }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
