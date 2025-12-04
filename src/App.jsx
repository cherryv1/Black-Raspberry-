import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function App() {
  const [theme, setTheme] = useState('dark');
  const [backendStatus, setBackendStatus] = useState('Desconectado');

  // Lógica del tema camaleón
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Conexión al backend
  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await axios.get(`${API_URL}/status`);
        setBackendStatus(response.data.message);
      } catch (error) {
        setBackendStatus('Error de conexión con el backend.');
      }
    };
    checkBackend();
  }, []);

  return (
    <div className={`App theme-${theme}`} style={{
      backgroundColor: theme === 'dark' ? '#1a1a1a' : '#f0f0f0',
      color: theme === 'dark' ? 'white' : 'black',
      padding: '20px',
      borderRadius: '10px',
      border: `2px solid var(--main-color)`
    }}>
      <h1 style={{ color: 'var(--secondary-color)' }}>
        Black🍇Raspberry
      </h1>
      <p>Carrocería Inicial - Lista para la acción.</p>

      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: 'var(--main-color)',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '20px',
          transition: 'background-color 0.3s'
        }}
      >
        Botón CAMAELEÓN: Tema {theme === 'dark' ? 'Claro' : 'Oscuro'}
      </button>

      <div style={{ marginTop: '30px', borderTop: '1px solid #333', paddingTop: '20px' }}>
        <h2>Estado del Motor (BlackCore Pegasus)</h2>
        <p style={{ color: backendStatus.includes('Error') ? 'red' : 'lightgreen' }}>
          {backendStatus}
        </p>
        <p>API URL: {API_URL}</p>
      </div>
    </div>
  );
}

export default App;
