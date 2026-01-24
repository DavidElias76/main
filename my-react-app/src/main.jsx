import { StrictMode } from 'react'
// the createRoot method is imported from the react-dom/client package and is used to render React components to the DOM.
import { createRoot } from 'react-dom/client' 

import './index.css' // we import the index.css file for the app styling which defines the global style of your css(Resets, fonts, body styles)
import Greetings from './App.jsx'

// {the greetings component being rendered to the root element and using the strict mode wrapper}
// The purpose of the createRoot function is to define the HTML element where a React component should be displayed.

// The render() method defines what to render in the HTML container.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greetings />
  </StrictMode>
)


// this is the entry point of your app and where the main component is rendered to the DOM