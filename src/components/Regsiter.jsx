import { Card } from "antd";
import React from "react";
import RegList from "./RegList";

const Regsiter = ({ datas, todos, setTodos }) => {
  const list = datas.map((list) => (
    <RegList
      todos={todos}
      setTodos={setTodos}
      list={list}
      key={list.id}
      name={list.name}
      sectors={list.sectors}
    />
  ));

  return (
    <Card>
      <ul className="reg_list">{list}</ul>
    </Card>
  );
};

export default Regsiter;
