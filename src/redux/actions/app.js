import { HANDLE_BOOK_DELETE, HANDLE_ADD_BOOK, HANDLE_EDIT_BOOK } from "redux/constants/app";

export function handleBookDelete(index) {
  return {
    type: HANDLE_BOOK_DELETE,
    index
  };
}

export function handleAddBook(book) {
  return {
    type: HANDLE_ADD_BOOK,
    book
  };
}

export function handleEditBook(index, book) {
  return {
    type: HANDLE_EDIT_BOOK,
    index,
    book
  };
}
