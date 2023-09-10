import Controller from '../models/Controller.js';

export class AjudaController extends Controller {
  constructor() {
    super();
    this._render('ajuda');
  }
}
