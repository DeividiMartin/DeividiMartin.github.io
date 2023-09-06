import Controller from '../classes/Controller.js';

export class HomeController extends Controller {
  constructor() {
    super();
    this._render('home');
  }
}
