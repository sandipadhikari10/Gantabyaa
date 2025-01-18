import * as React from 'react';

export const SessionContext = React.createContext(null)

export function SessionProvider({ children }) {
  const [session, setSession] = React.useState(true)

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

  function handleLogout() {
    fetch('/api/auth/logout', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => setSession(null))
      .then(navigate('/login'))
  }


  return <SessionContext.Provider value={{
    removeSession: () => setSession(null),
    revalidateSession: () => fetchSessionData(),
    session,
    logout: handleLogout
  }}>
    {children}
  </SessionContext.Provider >
}
