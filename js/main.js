

function menu() {
    const conteinerNavegacao = document.querySelector('.conteinerNavegacao');
  
    if (conteinerNavegacao.style.display === 'none' || conteinerNavegacao.style.display === '') {
      conteinerNavegacao.style.display = 'block';
    } else {
      conteinerNavegacao.style.display = 'none';
    }
  }
  

