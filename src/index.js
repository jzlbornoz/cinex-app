import React from "react";
import { createRoot } from 'react-dom/client';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { App } from './routes/App';
import './index.css';

createRoot(
    document.getElementById('app')
).render(
    <App />
)

AOS.init();