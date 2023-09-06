import { AddController } from './AddController.js';
import { AjudaController } from './AjudaController.js';
import { ContatoController } from './ContatoController.js';
import { HomeController } from './HomeController.js';
import { SobreController } from './SobreController.js';

export class Router {
  constructor() {
    this.routes = {
      '#home': HomeController,
      '#add': AddController,
      '#ajuda': AjudaController,
      '#contato': ContatoController,
      '#sobre': SobreController,
    };
  }

  navigate() {
    const hash = window.location.hash;
    if (hash === '') {
      return new this.routes['#home']();
    }
    new this.routes[hash]();
  }
}
