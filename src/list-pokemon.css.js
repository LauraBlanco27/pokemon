import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
@charset "UTF-8";
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: calc(100vh - 20px); /* Ajusta la altura según sea necesario */
  overflow-y: auto; /* Permitir el desplazamiento vertical */
  padding: 10px; /* Agregar algo de espacio */
  box-sizing: border-box; /* Incluir el padding en el cálculo de la altura */
}

.card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  margin: 10px;
  text-align: center;
  transition: transform 0.2s;
  flex: 0 1 calc(25% - 20px);
  box-sizing: border-box;
}

.card:hover {
  transform: scale(1.2);
}

.pokemon-image {
  max-width: 150px;
  max-height: 150px;
  margin-bottom: 10px;
}

.pokemon-image-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.pokemon-image-button:focus {
  outline: 2px solid #007bff; /* Mejora la accesibilidad mostrando el enfoque del teclado */
}
`;