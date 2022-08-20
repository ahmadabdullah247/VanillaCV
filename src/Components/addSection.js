import React, { useState } from "react";

const App = () => {
  const [list, setList] = useState([
    {
      id: "a",
      firstname: "Robin"
    },
    {
      id: "b",
      firstname: "Dave"
    }
  ]);

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);

    setList(newList);
  }
  const onAddBtnClick = (event) => {
    setList(list.concat({ id: list.length, firstname: "Robin" }));
  };

  return (
    <div>
      <List list={list} onRemove={handleRemove} />
      <button onClick={onAddBtnClick}>Add Section</button>
    </div>
  );
};

const List = ({ list, onRemove }) => (
  <ul>
    {list.map((item) => (
      <Item key={item.id} item={item} onRemove={onRemove} />
    ))}
  </ul>
);

const Item = ({ item, onRemove }) => (
  <li>
    <input value={item.firstname}></input>
    <button type="button" onClick={() => onRemove(item.id)}>
      Remove
    </button>
  </li>
);
