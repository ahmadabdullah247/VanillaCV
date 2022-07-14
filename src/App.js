import React from 'react';
import { NavbarSimple } from './Components/Navbar'
import Section from './Components/Section/Section';
import './App.css';
import { AppShell } from '@mantine/core';

function App() {
  return (
    <div className="App">
      <AppShell
        navbar={<NavbarSimple />}
      >
        <Section
          title="Section Title"
        />
        <Section />
      </AppShell>
    </div>
  );
}

export default App;
