import React from 'react';
import { supabase } from '../utils/supabaseClient';

export default function Login({ onLogin }) {
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) {
      alert('Login failed: ' + error.message);
    } else {
      onLogin(data.user);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
