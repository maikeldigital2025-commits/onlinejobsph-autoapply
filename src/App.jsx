import React, { useState, useEffect } from 'react';
import { supabase } from './utils/supabaseClient';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(res => {
      if (res.data.session) setUser(res.data.session.user);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  }, []);

  return (
    <div>
      {!user ? <Login onLogin={setUser} /> : <Dashboard user={user} />}
    </div>
  );
}

export default App;
