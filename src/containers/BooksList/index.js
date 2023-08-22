import React, { useState, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleBookDelete, handleEditBook } from "redux/actions/app";
import { booksSelector } from "redux/selectors/app";

import Box from "components/Box";
import Button from "components/Button";
import Loadable from "components/Loadable";

import { Container, ListItem, Name, Category, Price, Placeholder } from "./styles";

const AddEditBook = Loadable(lazy(() => import("containers/AddEditBook")));

function BooksList() {
  const [selectedBook, setSelectedBook] = useState({});
  const books = useSelector(booksSelector);
  const dispatch = useDispatch();

  function handleDelete(event, index) {
    event.stopPropagation();
    dispatch(handleBookDelete(index));
  }

  function handleSubmit(book) {
    const index = books.findIndex((item) => item.id === selectedBook.id);
    dispatch(handleEditBook(index, book));
    setSelectedBook({});
  }

  return (
    <>
      <Container>
        {books.length ? (
          books.map((book, index) => (
            <ListItem key={book.id} onClick={() => setSelectedBook(book)}>
              <Box>
                <Name>{book.name}</Name>
                <Category>{book.category}</Category>
                <Price>{book.price}</Price>
              </Box>
              <Button color="red" variant="outlined" onClick={(event) => handleDelete(event, index)}>
                Delete
              </Button>
            </ListItem>
          ))
        ) : (
          <Placeholder>No books found in the records</Placeholder>
        )}
      </Container>
      {!!selectedBook.id && (
        <AddEditBook
          open={!!selectedBook.id}
          book={selectedBook}
          handleSubmit={handleSubmit}
          onClose={() => setSelectedBook({})}
        />
      )}
    </>
  );
}

export default BooksList;
