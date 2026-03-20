import React from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { MainContent } from './components/layout/MainContent';
import { Footer } from './components/layout/Footer';
import { AIAssistant } from './components/features/AIAssistant'; // Import AIAssistant

import './App.css'; // Make sure this import exists



function App() {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
      <AIAssistant />
    </div>
  );
}

export default App;