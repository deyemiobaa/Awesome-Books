import Date from "./modules/datetime.js";
import displayPage from "./modules/page-navigation.js"
import CreateBook from './modules/pageNav';
const library = new CreateBook();

library.addandRemoveBook();
Date()
displayPage()