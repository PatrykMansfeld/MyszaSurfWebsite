import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PrismicProvider } from '@prismicio/react'
import { client } from '../prismic'
import './Styles/_Main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
  </React.StrictMode>
) 