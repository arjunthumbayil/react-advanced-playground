import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
// reducer function

const Index = () => {
  const reducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
      const newPeople = [...state.people, action.payload];
      return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "Item Added",
      };
    }
    if (action.type === "NO_VALUE") {
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Please enter Value",
      };
    }
    throw new Error("no matching action type");
  };

  const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: "",
  };
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + " this is coming from the input");
    if (name) {
      const newItem = { id: new Date().getDate().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  return (
    <>
      {state.isModalOpen && <Modal modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add_Item</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
