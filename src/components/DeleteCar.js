import React, { Component } from "react";

const DeleteCar = () => {
  const [list, setList] = React.useState(['']);

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }

  return (
    <ul>
      {list.map((item) => (
        <li key={item.model}>
          <span>{item.engine}</span>
          <span>{item.description}</span>
          <span>{item.price}</span>
          <button type="button" onClick={() => handleRemove(item.id)}>
           Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default DeleteCar;
