import * as React from 'react'
import './App.css'

import { Welcome } from "./components/welcome";
import { Clock } from "./components/clock";
import {NameForm} from "./components/form";

export default function App() {
  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      <Welcome name="propName" />
      <Clock />
      <NameForm />
    </main>
  )
}