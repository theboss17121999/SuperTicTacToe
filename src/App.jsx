import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { RecoilRoot } from 'recoil';
import { MainPage } from './Components/MainPage';
import { NineCrossNine } from './Components/NineCrossNine';

// Lazy load the NineCrossNine component
// const NineCrossNineLazy = lazy(() => import('./Components/NineCrossNine'));

// Error boundary component
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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/game" element={<NineCrossNineLazy />} />
              <Route path="/" element={<MainPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </RecoilRoot>
    </BrowserRouter>
  );

}

export default App;
