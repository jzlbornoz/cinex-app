import React from "react";
import { createRoot } from 'react-dom/client';
import { App } from './routes/App';
import './index.css';

createRoot(
    document.getElementById('app')
).render(
    <App />
)