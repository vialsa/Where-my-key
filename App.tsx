import React from 'react';

import { AuthProvider } from './src/context/authContext';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  console.log('App rendered'); // Debugging log
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>

  );
}
