import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { InlineStyle } from './components/InlineStyle';
import { StyledJsx } from './components/StyledJsx';
import { StyledComponents } from './components/StyledComponents';
import { Emotion } from './components/Emotion';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <InlineStyle />
        <StyledJsx />
        <StyledComponents />
        <Emotion />
      </div>
    </>
  );
}

export default App;
