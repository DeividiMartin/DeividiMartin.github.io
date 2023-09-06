import Controller from '../classes/Controller.js';
import { host } from '../config.js';

// Altere a constante host para apontar para o URL do seu backend no Render


export class AddController extends Controller {
  constructor() {
    super();
    this._render('add').then(() => {
      this.form = document.getElementById("myForm");
      this.imagemInput = document.getElementById('imagem');

      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    });
  }

  async handleSubmit() {
    const { name, email, cidade, estado, bairro, rua, message } = this.form;
    const formData = new FormData();
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('cidade', cidade.value);
    formData.append('estado', estado.value);
    formData.append('bairro', bairro.value);
    formData.append('rua', rua.value);
    formData.append('message', message.value);

    if (this.imagemInput.files[0]) {
      formData.append('imagem', this.imagemInput.files[0]);
    }

    try {
      const response = await fetch(host + '/enviar-email', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        alert('Email enviado com sucesso!');
      } else {
        alert('Falha ao enviar email. Tente novamente mais tarde.');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário', error);
      alert('Ocorreu um erro ao enviar o formulário.');
    }
  }
}
