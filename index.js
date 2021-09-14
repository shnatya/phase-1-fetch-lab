function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  //.then(data => renderBooks(data))
  .then(data => {
              renderBooks(data) //name of all bokks
              fetchCharacter(data)// fetch request for the 1031st character
              infoBook(data)// info of the 5th book
              totalNumOfPages(data)// total number of pages of all books
             })
}

//return total number of pages of all books
function totalNumOfPages(books) {
  const main = document.querySelector('main')
  let totalElement = document.createElement('li')

  const reducer = (accumulator, book) => {return accumulator + book.numberOfPages}
  let total = books.reduce(reducer, 0);

  totalElement.innerHTML = `
    <h2>Total number of pages of all books: ${total}</h2>
  `
  main.appendChild(totalElement)
}

//fetch request to get raw data of the 1031st character
function fetchCharacter(books) {
  fetch(books[4].characters[1030])
  .then(res => res.json())
  .then(data => infoCharacter(data))
}

//print a list of all books 
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    console.log(book)
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

//info about the 1031st character
function infoCharacter(character) {
  const main = document.querySelector('main');
  let char = document.createElement('li');
  char.innerHTML = `
    <div>
      <h2>character's name: ${character.name}</h2>
      <h2>gender: ${character.gender}</h2>  
    </div>
  `
  main.appendChild(char);
}

//returns info about the 5th book name
function infoBook(books) {
  console.log(books)
  let book = document.createElement('li')
  const main = document.querySelector('main');
    
  book.innerHTML = `
    <div>  
      <h2>Book: ${books[4].name}</h2>
      <h2>Number of pages: ${books[4].numberOfPages}</h2>
    </div>`
  main.appendChild(book);
  
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
