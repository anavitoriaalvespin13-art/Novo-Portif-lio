  function ToggleMenu(){
    let menuAtivo = document.getElementById("menu")
    menuAtivo.classList.toggle("ativo")

    console.log(menuAtivo)
    const links = document.querySelectorAll('#menu a');

links.forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById("menu").classList.remove("ativo");
  });
});
  }

  const formulario = document.getElementById('form')
  const mensagemSucesso = document.getElementById('mensagemSucesso')
  const resposta  = document.getElementById('resposta')

  formulario.addEventListener('submit', async function(e) {
    e.preventDefault()

    const formData = new FormData(formulario)

    try {
      const response = await fetch(formulario.action, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        mensagemSucesso.style.display = 'flex'
        formulario.reset()
      } else {
        alert('Erro ao enviar. Tente novamente.')
      }
    } catch (error) {
      alert('Erro ao enviar. Tente novamente.')
    }

  })

     // Fecha modal ao clicar nele
   mensagemSucesso.addEventListener('click', function() {
    mensagemSucesso.style.display = 'none'
  })

  const elementos = document.getElementsByClassName('elementos')

  function animandoElementos(){
      elementos.forEach(elemento => {
      const distancia = elemento.getBoundingClientRect().top
       
     }) 

     console.log(distancia)
  }

  function Ativar(){
    let listaAtiva = document.getElementById("lista")
    listaAtiva.classList.toggle("ativa")

    console.log("lista Ativa")
  }
 

 

