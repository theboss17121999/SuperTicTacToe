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
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/game" element={<NineCrossNine />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
