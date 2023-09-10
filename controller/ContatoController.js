import Controller from '../models/Controller.js';

export class ContatoController extends Controller {
  constructor() {
    super();
    this._render('contato');
  }
}
