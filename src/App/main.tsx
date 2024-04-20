import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import '~Shared/ui-kit/font-families/Glory/Glory_font_face.css'
import 'reset-css'
import '~Shared/utility-styles/font-variants.scss'
import '~App/assets/main.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
