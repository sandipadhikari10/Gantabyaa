import * as React from 'react';

export const SessionContext = React.createContext(null)

export function SessionProvider({ children }) {
  const [session, setSession] = React.useState(null)

  async function fetchSessionData() {
    const session = await fetch('/api/auth/session').then(res => res.json())
    if (session.statusCode === 401) {
      setSession(null)
    } else {
      setSession(session)
    }
  }

  React.useEffect(() => {
    fetchSessionData()
  }, [])


  return <SessionContext.Provider value={{
    removeSession: () => setSession(null),
    revalidateSession: () => fetchSessionData(),
    session
  }}>
    {children}
  </SessionContext.Provider >
}
