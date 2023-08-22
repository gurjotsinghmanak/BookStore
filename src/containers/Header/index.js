import React, { useState, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleAddBook } from "redux/actions/app";
import { booksSelector } from "redux/selectors/app";

import Button from "components/Button";
import Loadable from "components/Loadable";
import { Container, Wrapper, Logo } from "./styles";

const AddEditBook = Loadable(lazy(() => import("containers/AddEditBook")));

function Header() {
  const [isAddBookModalOpen, setIsAddBookModalOpen] = useState(false);
  const books = useSelector(booksSelector);
  const dispatch = useDispatch();

  function handleSubmit(book) {
    const lastId = books[books.length - 1].id;
    dispatch(handleAddBook({ ...book, id: lastId + 1 }));
    setIsAddBookModalOpen(false);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Logo>Books</Logo>
          <Button color="secondary" variant="contained" onClick={() => setIsAddBookModalOpen(true)}>
            Add
          </Button>
        </Wrapper>
      </Container>
      {isAddBookModalOpen && (
        <AddEditBook
          open={isAddBookModalOpen}
          handleSubmit={handleSubmit}
          onClose={() => setIsAddBookModalOpen(false)}
        />
      )}
    </>
  );
}

export default Header;
