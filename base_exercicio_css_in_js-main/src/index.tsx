import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import reportWebVitals from './reportWebVitals'

//Import dos elementos
import Cabecalho from './components/Cabecalho'
import FormVagas from './components/FormVagas'
import Hero from './components/Hero'
import Vaga from './components/Vaga'
import ListaVagas from './containers/ListaVagas'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
