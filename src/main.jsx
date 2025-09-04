// src/main.jsx (for notesapp assignment)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Amplify Gen2 config
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'

// Wire backend outputs from sandbox
Amplify.configure(outputs)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
