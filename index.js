function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books'
  const data = fetch(url)
    .then(function(response){
      return response.json();
    })
    .then(renderBooks);

    return data;
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