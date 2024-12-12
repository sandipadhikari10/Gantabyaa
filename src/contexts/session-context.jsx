import * as React from 'react';

export const SessionContext = React.createContext(null)

export function SessionProvider({ children }) {
  const [session, setSession] = React.useState(null)

  async function fetchSessionData() {
    const session = localStorage.getItem("session")
    if (session) {
      setSession(JSON.parse(session))
    }
  }

  React.useEffect(() => {
    fetchSessionData()
  }, [])


  return <SessionContext.Provider value={{
    removeSession: () => {
      localStorage.removeItem("session")
      setSession(null)
    },
    session
  }}>
    {children}
  </SessionContext.Provider>
}
