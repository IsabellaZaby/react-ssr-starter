import React from 'react'
import App from './components/App'
import {hydrateRoot} from "react-dom/client";

const container = document.getElementById('root') as Element;
hydrateRoot(container, <App />)