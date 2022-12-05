import { Button } from "antd";
import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const RegList = ({ todos, setTodos, list, name, sectors }) => {
  const deleteHand = () => {
    setTodos(todos.filter((el) => el.id !== list.id));
    console.log(todos);
  };
  const editHand = () => {
    console.log("Edit");
  };

  return (
    <li>
      <span>
        <h3>{name}</h3>
        <p>{sectors}</p>
      </span>
      <div>
        <Button onClick={deleteHand}>
          <DeleteOutlined />
        </Button>
        <Button onClick={editHand}>
          <EditOutlined />
        </Button>
      </div>
    </li>
  );
};

export default RegList;
