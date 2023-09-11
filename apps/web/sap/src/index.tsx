import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Router from './main/routes/router'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@ui5/webcomponents-react'

import '@ui5/webcomponents/dist/Assets'
import '@ui5/webcomponents-fiori/dist/Assets'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
