import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { addItem } from "../actions/itemActions";
import { useDispatch } from "react-redux";

const ItemModal = () => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const toggle = () => {
    setModal(!modal);
  };

  const onChangeHandler = (e) => {
    setName(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newItem = {
      name,
    };
    dispatch(addItem(newItem));
    toggle();
  };
  return (
    <div>
      <Button color="dark" style={{ marginBottom: "2rem" }} onClick={toggle}>
        Add Item
      </Button>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add To Shoppping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmitHandler}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="Add Shopping item"
                onChange={onChangeHandler}
              />
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ItemModal;
