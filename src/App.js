import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import RegForm from "./components/RegForm";
import Regsiter from "./components/Regsiter";

function App() {
  const [inputText, setInputText] = useState("");
  const [sectors, setSectors] = useState(undefined);
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Row justify="center">
        <Col xs={22} md={18} lg={8} xl={8}>
          <Card style={{ margin: "30px 0" }}>
            <p>
              Please enter your name and pick the Sectors you are currently
              involved in..
            </p>
            <RegForm
              sectors={sectors}
              setSectors={setSectors}
              inputText={inputText}
              setInputText={setInputText}
              todos={todos}
              setTodos={setTodos}
            />
          </Card>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={22} md={16} lg={12} xl={12}>
          <Regsiter datas={todos} todos={todos} setTodos={setTodos} />
        </Col>
      </Row>
    </div>
  );
}

export default App;
