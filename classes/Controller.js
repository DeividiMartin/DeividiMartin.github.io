
export default class Controller {
  async _render(viewName) {
    const container = document.getElementById('inicia');

    try {
      const res = await fetch(`../view/${viewName}.html`);
      const htmlContent = await res.text();
      container.innerHTML = htmlContent;
    } catch(error){
        console.error('Erro ao carregamento do view home');
    };
  }
}