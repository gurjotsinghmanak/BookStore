import React, { useState } from "react";
import PropTypes from "prop-types";

import Modal from "components/Modal";
import ModalHeader from "components/ModalHeader";
import ModalContent from "components/ModalContent";
import ModalFooter from "components/ModalFooter";
import Button from "components/Button";
import Label from "components/Label";
import TextField from "components/TextField";

import { FooterWrap, FieldWrap } from "./styles";

function AddEditBook({ open, book, handleSubmit, onClose }) {
  const [name, setName] = useState(book.name || "");
  const [price, setPrice] = useState(book.price || "");
  const [category, setCategory] = useState(book.category || "");
  const [description, setDescription] = useState(book.description || "");

  function handlePrice(event) {
    const regex = /^\d+(\.\d{0,2})?$/;
    const { value } = event.target;
    if (regex.test(value) || value === "") {
      setPrice(value);
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <ModalHeader onClose={onClose}>Add book</ModalHeader>
      <ModalContent>
        <FieldWrap>
          <Label required>Name</Label>
          <TextField value={name} onChange={(event) => setName(event.target.value)} />
        </FieldWrap>
        <FieldWrap>
          <Label required>Price</Label>
          <TextField value={price} onChange={(event) => handlePrice(event)} />
        </FieldWrap>
        <FieldWrap>
          <Label required>Category</Label>
          <TextField value={category} onChange={(event) => setCategory(event.target.value)} />
        </FieldWrap>
        <FieldWrap>
          <Label required>Description</Label>
          <TextField value={description} isMultiline onChange={(event) => setDescription(event.target.value)} />
        </FieldWrap>
      </ModalContent>
      <ModalFooter>
        <FooterWrap>
          <Button color="red" variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => handleSubmit({ id: book.id, name, price: parseFloat(price), category, description })}
          >
            Save
          </Button>
        </FooterWrap>
      </ModalFooter>
    </Modal>
  );
}

AddEditBook.propTypes = {
  open: PropTypes.bool,
  book: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

AddEditBook.defaultProps = {
  open: false,
  book: {}
};

export default AddEditBook;
