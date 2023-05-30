import React, { useState } from 'react';

// Define os estilos para o tema claro e escuro
const lightTheme = {
  backgroundColor: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  backgroundColor: '#000000',
  color: '#ffffff',
};

const App: React.FC = () => {
  // Define o estado para controlar o tema atual
  const [theme, setTheme] = useState(lightTheme);

  // Função para alternar entre os temas
  const toggleTheme = () => {
    if (theme === lightTheme) {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  };

  return (
    <div style={theme}>
      <h1>Exemplo de Tema Claro e Escuro</h1>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  );
};

export default App;
