import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import { MainPage } from './Components/MainPage';
import { NineCrossNine } from './Components/NineCrossNine';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

function App() {
  return (
    <BrowserRouter basename="/SuperTicTacToe">
      <RecoilRoot>
        <ErrorBoundary>
          <Routes>
            <Route path="/game" element={<NineCrossNine />} />
            <Route path="/" element={<MainPage />} />
          </Routes>
        </ErrorBoundary>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
