const displayPage = () => {
  const list = document.getElementById('list');
  const addNewBook = document.getElementById('add-new');
  const contact = document.getElementById('contact-info');
  const bookPage = document.querySelector('.booklist');
  const addBookPage = document.querySelector('.addbooks');
  const contactPage = document.querySelector('.contact');
  list.addEventListener('click', () => {
    addBookPage.classList.add('hide-content');
    contactPage.classList.add('hide-content');
    bookPage.classList.remove('hide-content');
  });
  addNewBook.addEventListener('click', () => {
    addBookPage.classList.remove('hide-content');
    bookPage.classList.add('hide-content');
    contactPage.classList.add('hide-content');
  });
  contact.addEventListener('click', () => {
    bookPage.classList.add('hide-content');
    addBookPage.classList.add('hide-content');
    contactPage.classList.remove('hide-content');
  });
}

export default displayPage