import { createContext } from 'react'
import UseAuth from '../hooks/useAuth'

const Context = createContext()

function userProvider({ children }) {
  const { register } = UseAuth()

  return <Context.Provider value={{ register }}>{children}</Context.Provider>
}

export { Context, userProvider }
