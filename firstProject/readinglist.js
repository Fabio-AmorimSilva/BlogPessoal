const booksList = document.querySelector(".books");
const btnSubmit = document.querySelector(".submitBtn");
const booksStand = document.querySelector(".booksList");
const lightDark = document.querySelector(".bright");
const brightValue = document.querySelector("output");
const bodyStyle = document.querySelector("body");

//Criação de elementos
//Título dos livros
let genre = document.createElement("h3");

//Banco de dados de livros
let classics = [
  "Conde de Monte Cristo",
  "Grande Sertão Veredas",
  "Graça Infinita",
  "Robinson Crusoé",
];
let fiction = [
  "Um Conto de Duas Cidades",
  "O Guia do Mochileiro das Galáxias",
  "Viagens de Gulliver",
  "Um Conto de Natal",
];
let nonfiction = [
  "Por de trás da Mascára",
  "Jardim das Aflições",
  "Nova Era e Revolução Cultural",
];
let fantasy = [
  "A Batalha do Apocalipse",
  "Sherlock Holmes",
  "Senhor dos Anéis",
];
let romance = ["Revolta de Atlas", "Montanha Mágica"];

//Vetores com os gêneros dos livros
let allBooks = ["classics", "fiction", "nonfiction", "fantasy", "romance"];
let arrayBooks = [classics, fiction, nonfiction, fantasy, romance];

function booksCreate() {
  //Remove todas as imagens e títulos anteriores
  var allImages = document.querySelectorAll("figure");

  for (let im = 0; im < allImages.length; im++) {
    allImages[im].parentNode.removeChild(allImages[im]);
  }

  //Início da inserção dos elementos da busca do usuário
  var string = booksList.value.toLowerCase();
  let i = 0;

  //Insere o gênero na página html
  genre.textContent =
    booksList.value.slice(0, 1).toUpperCase() +
    booksList.value.slice(1).toLocaleLowerCase();
  booksStand.appendChild(genre);

  while (i < allBooks.length) {
    if (string == allBooks[i]) {
      let count = 1;

      //Insere os títulos e as capas da categoria selecionada
      for (let j = 0; j < arrayBooks[i].length; j++) {
        var fig = document.createElement("figure");
        var book = document.createElement("img");
        var title = document.createElement("figcaption");
        title.textContent = arrayBooks[i][j];
        title.setAttribute("class", "booksList");
        //Insere as imagens conforme a categoria escolhida
        book.setAttribute("src", allBooks[i] + "/image" + count + ".jpg");
        book.setAttribute("class", "booksList figure-img img-fluid rounded");
        fig.setAttribute("class", "figure");
        title.setAttribute("class", "figure-caption text-end");
        booksStand.appendChild(fig);
        fig.appendChild(book);
        fig.appendChild(title);
        count++;
      }
    }

    i++;
  }
}

function enterBook(event){
  if(event.keyCode == 13){
    booksCreate();
  }
}


btnSubmit.addEventListener("click", booksCreate);
document.addEventListener("keyup", enterBook);

brightValue.innerHTML = lightDark.value;

function lightMoreLess() {
  brightValue.innerHTML = this.value;
  bodyStyle.brightness(this.value);
}

lightDark.addEventListener("input", lightMoreLess);

/*
lightDark.oninput = function(){

	brightValue.innerHTML = this.value;
}
*/
