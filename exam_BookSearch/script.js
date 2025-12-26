// Click handler for search button
const captureSearchValue = () => {
  const searchInput = document.getElementById('search-bar');
  const inputValue = searchInput.value;
  return inputValue
};

// Filter books based on search input
const filterBooks = (search,books) => {
  const flattenedValues = flattenObjectValuesIntoArray(books);
  return books.filter((book, index) => flattenedValues[index].includes(search));
};

// Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
const structureBooksAsHtml = (books) => {
  const formattedBooks = [];
  for (let i=0;i<books.length;i++) {
    formattedBooks.push(structureBookAsHtml(books[i]));
  } return formattedBooks;
};

// Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
const searchBtnClickHandler = (books) => {
  // 1. Capture the search input value
  const searchValue = captureSearchValue().toLowerCase().trim();

  // 2. Filter the books based on the search value
  const filteredBooks = filterBooks(searchValue, books);

  // 3. Structure the filtered books as HTML elements
  const bookElements = structureBooksAsHtml(filteredBooks);

  // 4. Render the books to the DOM
  renderBooksToDom(bookElements);
};

// Grab search button from the DOM
const searchBtn = document.getElementById("search-btn");

// Attach an event listener to the search button
searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });


