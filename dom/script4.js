// alterando conteúdo

document.getElementById("titulo").innerText = "Olá Mundo!"

//alterando o css

const paragrafos = document.querySelectorAll(".paragrafo");

for(const paragrafo of paragrafos) {
  paragrafo.style.color = "red";
}

// Alternar classe de elemento

function alternarAtivo () {
  const quadrado = document.querySelector(".quadrado")

  quadrado.classList.toggle("ativo")
}

const btn = document.querySelector("#botao-alternar");

btn.addEventListener("click", () => {
  alternarAtivo();
});

// adicionar elementos pelo DOM

function adicionarItem() {
  const novoItem = document.createElement("li")

  novoItem.textContent = "Novo Item"

  document.querySelector(".lista").appendChild(novoItem);
}

const botaoAdicionar = document.querySelector("#adicionarItem");

botaoAdicionar.addEventListener("click", adicionarItem);

//Remover elemento por DOM

function removerItem(event) {
  const itemClicado = event.target;

  itemClicado.remove();
}

const itens = document.querySelector(".item")
for(const item of itens) {
  item.addEventListener("click", removerItem);
}

//Filtrando Itens

function filtrarLista() {
  const filtro = document.querySelector("#filtro").value.toUpperCase();

  const lista = document.querySelector("$listaDeItens");

  const itens = lista.getElementsByTagName("li");

  for(let i = 0; i < itens.length; i++) {
    const item = itens[i];

    const texto = item.textContent || item.innerText;

    item.style.display = texto.toUpperCase().includes(filtro) ? "" : "none";
  }
}

const inputFiltro = document.querySelector("#filtro");

inputFiltro.addEventListener("keyup", filtrarLista);

//Mover itens

function moverItem(direcao) {
  
  const lista = document.querySelector("#listaMover");
  const itens = Array.from(lista.querySelectorAll("li"));
  const itemSelecionado = lista.querySelector(".selecionado");
  
  if(!itemSelecionado) {
    alert("Selecione um item.");
    return;
  }


  const index = itens.indexOf(itemSelecionado);

  if(direcao === "cima" && index > 0) {
    lista.insertBefore(itemSelecionado, itens[index - 1]);
  } else if(direcao === "baixo" && index < itens.length - 1) {
    lista.insertBefore(itemSelecionado.nextElementSibling, itens[index]);
  }
}

function selecionarItem(event) {

  const itens = document.querySelectorAll("#listaMover li")

  itens.forEach(item => item.classList.remove("selecionado"));

  event.target.classlist.add("selecionado");
}

const itensDaLista = document.querySelectorAll("listaMover li");

itensDaLista.forEach((item) => item.addEventListener("click", selecionarItem));

const botaoCima = document.querySelector("#moverCima");
const botaoBaixo = document.querySelector("#moverBaixo");

botaoCima.addEventListener("click", () => moverItem("cima"));
botaoBaixo.addEventListener("click", () => moverItem("baixo"));

// Modal

function abrirModal() {
  document.querySelector("myModal").style.display = "block";
}

function fecharModal() {
  document.querySelector("myModal").style.display = "none";
}

const abrirBtn = document.querySelector("#abrir");
const fecharBtn = document.querySelector("#.close")

abrirBtn.addEventListener("click", abrirModal);
fecharBtn.addEventListener("click", fecharModal);

Window.addEventListener("click", (event) => {
  if(event.target === document.querySelector("#myModal")) {
    fecharModal();
  }
});


// Accordion
function toggleAccordion(event) {
  const header = event.target;
  const content = header.nextElementSibling;

  if(content.style.display === "none" || content.style.displa === "") {
    closeAllAccordionContent();
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

function closeAllAccordionContent() {
  const contents = document.querySelectorAll(".accordion-content");

  contents.forEach((content) => (content.style.display = "none"));
}


const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => header.addEventListener("click", toggleAccordion));
