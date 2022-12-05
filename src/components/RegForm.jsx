import { Button, Form, Input, TreeSelect } from "antd";
import React from "react";

const RegForm = ({
  inputText,
  setInputText,
  todos,
  setTodos,
  sectors,
  setSectors,
}) => {
  const selectHand = (e) => {
    setSectors(e);
  };
  const inputTextHand = (e) => {
    const name = e.target.value;
    console.log(name);
    setInputText(name);
  };
  const onSubmitHand = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        name: inputText,
        sectors: sectors,
        agree: true,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
    setSectors("");
  };

  return (
    <Form>
      <Input
        placeholder="Your name"
        value={inputText}
        onChange={inputTextHand}
      />
      <br />
      <br />
      <TreeSelect
        showSearch
        style={{
          width: "100%",
        }}
        dropdownStyle={{
          maxHeight: 400,
          overflow: "auto",
        }}
        placeholder="Please select one"
        allowClear
        treeDefaultExpandAll
        onChange={selectHand}
        treeData={treeData}
      />
      <br />
      <br />
      <Button onClick={onSubmitHand} size="middle" type="primary">
        ADD NOW
      </Button>
    </Form>
  );
};

export default RegForm;

const treeData = [
  {
    value: "manufacturing",
    title: "Manufacturing",
    children: [
      {
        value: "construction materials",
        title: "Construction materials",
      },
      {
        value: "electronics and optics",
        title: "Electronics and Optics",
      },
      {
        value: "food and beverage",
        title: "Food and Beverage",
        children: [
          {
            value: "bakery & confectionery products",
            title: "Bakery & confectionery products",
          },
          {
            value: "beverages",
            title: "Beverages",
          },
          {
            value: "fish & fish products",
            title: "Fish & fish products",
          },
          {
            value: "milk & dairy products",
            title: "Milk & dairy products",
          },
          {
            value: "Other",
            title: "Other",
          },
          {
            value: "sweets & snack food",
            title: "Sweets & snack food",
          },
        ],
      },
      {
        value: "furniture",
        title: "Furniture",
        children: [
          {
            value: "bathroom/sauna",
            title: "Bathroom/sauna",
          },
          {
            value: "bedroom",
            title: "Bedroom",
          },
          {
            value: "children’s room",
            title: "Children’s room",
          },
        ],
      },
    ],
  },
];
