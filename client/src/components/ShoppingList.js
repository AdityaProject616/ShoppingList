import React from "react";
import {useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems, deleteItems } from "../actions/itemActions";
import { useDispatch, useSelector } from "react-redux";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const itemDetails = useSelector((state) => state.itemDetails);
  const items = itemDetails.items;

  const onDeleteHandler = (_id) => {
    dispatch(deleteItems(_id));
  };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Container>
      <ListGroup>
        <TransitionGroup className="shopping-list">
          {items.map(({ _id, name }) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn "
                  color="danger"
                  size="sm"
                  onClick={() => onDeleteHandler(_id)}
                >
                  &times;
                </Button>
                {name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ShoppingList;
