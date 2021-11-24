import * as React from 'react'
import './App.css'

import { Welcome } from "./components/welcome";
import { Clock } from "./components/clock";

export default function App() {
  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      <Welcome name="propName" />
      <Clock />
    </main>
  )
}