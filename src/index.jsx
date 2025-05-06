import { StrictMode } from 'react'
import React, {Suspense} from 'react';
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from './App.jsx'
import './i18n'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Loader = () => {
    return <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',backgroundColor:'#1f2645'}}>
        <div className="loader">
            <div className="react-star">
                <div className="nucleus"></div>
                <div className="electron electron1"></div>
                <div className="electron electron2"></div>
                <div className="electron electron3"></div>
            </div>
        </div>
    </div>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Suspense fallback={<Loader/>}>
          <App/>
      </Suspense>
  </StrictMode>,
)
