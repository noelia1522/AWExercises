import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import "./ShoppingList.css";
import Dropdown from "../components/Dropdown";
import _ from "lodash";
import classNames from "classnames";
import Loader from "../components/Loader";

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItemsFromServer();
  }, []);

  function fetchItemsFromServer() {
    let itemsFromServer;
    fetch("/tasks")
      .then((res) => res.json())
      .then((fetchedItems) => {
        itemsFromServer = fetchedItems.map((item: any) => {
          const { _id: id, title, count = 1 } = item;
          return { id, title, count };
        });
        setlistItems(itemsFromServer);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
  }

  function addItemToDatabase() {
    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: value, checked: false, count: 1 }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchItemsFromServer();
      })
      .catch((e) => console.log(e));
  }

  function deleteItem(itemID: number) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: itemID }),
    };
    fetch("/tasks/remove", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchItemsFromServer();
      });
  }

  function updateCount(updateType: string, { id, count }: any) {
    console.log(count);

    let updatedCount;
    if (updateType === "increase") {
      updatedCount = count++;
    } else if (updateType === "decrease") {
      updatedCount = count--;
    }
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, count: updatedCount }),
    };
    fetch("tasks/updateCount", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        fetchItemsFromServer();
      });
  }

  function increaseQuantity(index: number): any {
    const newList = [...listItems];
    newList[index].count++; //newList[3]
    setlistItems(newList);
  }

  function decreaseQuantity(itemId: number) {
    let newList = [...listItems];
    const index = _.findIndex(newList, { id: itemId });
    if (newList[index].count === 1) {
      deleteItem(itemId);
      return;
    }
    updateCount("decrease", newList[index]);
  }

  function formHandler(event: any) {
    setValue(event.target.value);
    console.log(value);
  }

  function addItem(event: any, newValue?: string) {
    event.preventDefault();
    setHighlight(-1);
    let newReceivedValue;
    if (newValue) {
      newReceivedValue = newValue;
    } else newReceivedValue = value;

    let sameItemIndex = _.findIndex(listItems, { title: newReceivedValue });
    addItemToDatabase();
    setValue("");
    if (sameItemIndex >= 0) {
      setHighlight(sameItemIndex);
    }
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
    <div className="shoppinglist-container">
      {listItems.length === 0 ? (
        <h2 className="firstLine">The shopping list is empty</h2>
      ) : (
        <div className="firstLine">
          Shopping list has {listItems.length} items
        </div>
      )}
      {!isLoading && (
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
                        onClick={() => decreaseQuantity(item.id)}
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
      )}
      {isLoading && <Loader></Loader>}

      <div className="addBoxContainer">
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
      <form className="form">
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
        <button type="submit" className="setBut" onClick={setBudgetForList}>
          Set
        </button>
        <div>The budget is {budget} euros.</div>
      </form>
      <div className="noteContainer">
        <input className="addInput" value={note} onChange={noteHandler}></input>
        <button className="incBut" onClick={addNotes}>
          Add comment
        </button>
        <div className="note">Notes: {comment}</div>
      </div>
    </div>
  );
};
