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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda la altura de la ventana */
}

bbva-type-text {
  font-size: 2rem;
  color: #03226a;
  text-align: center;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
  background-color: #f1f1f1;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: calc(90vh - 20px);
  overflow-y: auto;
  padding: 20px;
  gap: 20px;
  background-color: #f9f9f9;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

.card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  flex: 0 1 calc(25% - 20px);
  min-height: 300px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card h2 {
  font-size: 1.6rem;
  color: #333;
  margin-bottom: 10px;
  text-transform: capitalize;
}

.pokemon-image {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #054a93;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;
}

.pokemon-image-button:hover .pokemon-image {
  transform: scale(1.1);
}

.pokemon-image-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.pokemon-image-button:focus {
  outline: 2px solid #007bff;
}

.card p {
  font-size: 1rem;
  color: #555;
  margin: 5px 0;
  padding: 0;
  text-transform: capitalize;
}

.pokemon-type {
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  padding: 1px 8px;
  border-radius: 20px;
  margin: 2px;
  font-weight: bold;
  text-transform: capitalize;
  color: #000;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.pokemon-type.fire:hover {
  background-color: #ed914f;
  color: #000;
}

.pokemon-type.water:hover {
  background-color: #bad7f4;
  color: #000;
}

.pokemon-type.grass:hover {
  background-color: #b5f0b5;
  color: #000;
}

.pokemon-type.flying:hover {
  background-color: #c4dff0;
  color: #000;
}

.pokemon-type.poison:hover {
  background-color: #c1acd5;
  color: #000;
}

.pokemon-type.bug:hover {
  background-color: #889b75;
  color: #000;
}

.pokemon-type.normal:hover {
  background-color: #d3d3d3;
  color: #000;
}

.pokemon-type:before {
  content: "";
  display: inline-block;
  margin-right: 8px;
  width: 16px;
  height: 16px;
  background-size: cover;
}

.pokemon-type.fire:before {
  background-image: url("/images/fuego.png");
}

.pokemon-type.water:before {
  background-image: url("/images/gotita.png");
}

.pokemon-type.grass:before {
  background-image: url("/images/hierba.png");
}

.pokemon-type.flying:before {
  background-image: url("/images/alas.png");
}

.pokemon-type.poison:before {
  background-image: url("/images/venenos.png");
}

.pokemon-type.bug:before {
  background-image: url("/images/anti-bug.png");
}

.pokemon-type.normal:before {
  background-image: url("/images/rec.png");
}

.card:hover .pokemon-image {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

bbva-button-default {
  margin-top: 12px;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .card {
    flex: 0 1 calc(50% - 20px); /* En pantallas más pequeñas, mostrar dos tarjetas por fila */
  }
}
@media (max-width: 480px) {
  .card {
    flex: 0 1 calc(100% - 20px); /* En pantallas muy pequeñas, mostrar una tarjeta por fila */
  }
}
`;
