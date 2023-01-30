import React, { useState, useEffect } from "react";
import Button from "./Button";
import "./ShoppingList.css";
import Dropdown from "./Dropdown";
import _ from "lodash";
import classNames from "classnames";

type ShoppingListProps = {
  items: {
    id: number;
    title: string;
    count: number;
  }[];
};

export const ShoppingList = ({ items }: ShoppingListProps) => {
  const [listItems, setlistItems] = useState(items);
  const [value, setValue] = useState("");
  const [note, setNote] = useState("");
  const [comment, setComment] = useState("");
  const [selectedOption, setSelectedOption] = useState("50-100");
  const [budget, setBudget] = useState("0");
  const [highlighted, setHighlight] = useState(-1);

  useEffect(() => {
    //fetching data
    // fetch("https://jsonplaceholder.typicode.com/todos")
    // .then(response => response.json())
    // .then((data => {
    //   console.log(data);
    //   setlistItems(data);
    // }))
    console.log("Hello! We are in the useEffect!");
  }, []);

  useEffect(() => {
    let itemsFromServer;
    fetch("/tasks")
      .then((res) => res.json())
      .then((fetchedItems) => {
        itemsFromServer = fetchedItems.map((item: any) => {
          const { _id: id, title, count = 1 } = item;
          return { id, title, count };
        });
        setlistItems(itemsFromServer);
      });
  }, []);
  // useEffect(()=>{
  //   if(listItems.length > 2)
  //   alert("Too many items!")
  //   console.log("Hello! We are in the useEffect!");
  // },[listItems]);

  function deleteItem(myIndex: number) {
    const newList = listItems.filter((item, index) => index != myIndex);
    return newList;
  }

  function increaseQuantity(index: number): any {
    const newList = [...listItems];
    newList[index].count++; //newList[3]
    setlistItems(newList);
  }

  function decreaseQuantity(index: number) {
    let newList = [...listItems];
    newList[index].count--;
    if (newList[index].count === 0) {
      newList = deleteItem(index);
    }
    setlistItems(newList);
  }

  function formHandler(event: any) {
    setValue(event.target.value);
    console.log(value);
  }

  function addItem(event: any, newValue?: string) {
    console.log("new value", newValue);

    event.preventDefault();
    setHighlight(-1);
    let newReceivedValue;
    if (newValue) {
      newReceivedValue = newValue;
    } else newReceivedValue = value;

    let sameItemIndex = _.findIndex(listItems, { title: newReceivedValue });
    console.log(sameItemIndex);

    if (sameItemIndex < 0) {
      let newItem = {
        id: listItems.length + 1,
        title: newReceivedValue.toLowerCase(),
        count: 1,
      };

      let newList = [...listItems, newItem];
      setlistItems(newList);
      //post data to DB
    } else {
      setHighlight(sameItemIndex);
    }

    setValue("");
  }

  function noteHandler(event: any) {
    setNote(event.target.value);
  }

  function addNotes(event: any) {
    let newNote = note;
    setComment(newNote);
    setNote("");
  }
  function onOptionChange(event: any) {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
  }

  function setBudgetForList(event: any) {
    event?.preventDefault();
    setBudget(selectedOption);
  }
  return (
    <>
      {listItems.length === 0 ? (
        <h2 className="firstLine">The shopping list is empty</h2>
      ) : (
        <div className="firstLine">
          Shopping list has {listItems.length} items
        </div>
      )}

      <ul className="ulist">
        {listItems.map(
          (item, index) =>
            item.count > 0 && (
              <li
                className={classNames(
                  { litem: true },
                  { highlighted: highlighted === index }
                )}
                key={item.id}
              >
                <span className="itemText">{item.title}: </span>
                <span className="itemQnt">{item.count}</span>
                <div className="butContainer">
                  {item.count > 0 && (
                    // <button className='deleteBut' onClick = {() => deleteItem(item.id)}>Delete</button>
                    <button
                      className="deleteBut"
                      onClick={() => decreaseQuantity(index)}
                    >
                      Decrease
                    </button>
                  )}
                  <button
                    className="incBut"
                    onClick={() => increaseQuantity(index)}
                  >
                    Increase
                  </button>
                </div>
                {/* */}
                {/* <Button handleClick= {(event: any, id:number) => printText(event, id)} text="Click"></Button> */}
                {/* <button onClick={() => decreaseQuantity(index)}>Decrease</button> */}
              </li>
            )
        )}
      </ul>

      <div>
        <input className="addInput" value={note} onChange={noteHandler}></input>
        <button className="incBut" onClick={addNotes}>
          Add comment
        </button>
        <div>Notes: {comment}</div>
      </div>

      <div>
        <form className="addItemContainer">
          <input
            className="addInput"
            value={value}
            onChange={formHandler}
          ></input>
          <button
            type="submit"
            className="addBut"
            onClick={(event) => addItem(event)}
          >
            AddItem
          </button>
        </form>
        <Dropdown
          handleClick={(event: any, value) => addItem(event, value)}
        ></Dropdown>
      </div>
      <form>
        <div className="radio">
          <p>What is the budget for buying these items?</p>
          <label>
            <input
              type="radio"
              value="50-100"
              checked={selectedOption === "50-100"}
              onChange={onOptionChange}
            />
            50-100
          </label>
          <label>
            <br />
            <input
              type="radio"
              value="100-150"
              checked={selectedOption === "100-150"}
              onChange={onOptionChange}
            />
            100-150
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="150-200"
              checked={selectedOption === "150-200"}
              onChange={onOptionChange}
            />
            150-200
          </label>
        </div>
        <button type="submit" className="addBut" onClick={setBudgetForList}>
          Set
        </button>
        <div>The budget is {budget} euros.</div>
      </form>
    </>
  );
};
