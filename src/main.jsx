import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

      <App />
  </React.StrictMode>
);

// Just the rendered for the app. To add it to the html. Standard.


// Subir los cambios a git
// Falta code el valor 0 con popular y 1 con ascending en dropdown
// Trabajarle al boton siguiente que solo cambie la pagina
// Mejorar la funcion de bookmark, para que guarde el valor. Si no se puede preguntar
// Agregar la funcion sheet, que separa la lista original con la de los likes. Creando un array 
// Que guarde los objetos con like y los muestre.