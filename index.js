//Function to get the total number of book pages in the Ice and Fire series
function fetchIceAndFire () {
  let numPages = 0
  fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => {
      json.forEach((book) => {
        //let numPages = 0
        numPages += book.numberOfPages
        //console.log(numPages)
      })
    })
  .then(() => console.log(numPages));
}

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then((res) => res.json())
    .then((json) => renderBooks(json))
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
