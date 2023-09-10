import Controller from '../models/Controller.js';

export class SobreController extends Controller {
  constructor() {
    super();
    this._render('sobre');
  }
}
