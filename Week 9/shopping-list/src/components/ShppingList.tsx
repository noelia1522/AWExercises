import React, { useState } from 'react';
import Button from './Button';
import './ShoppingList.css'

type ShoppingListProps = {
  items:
  {
  id: number,
  name: string,
  count: number
  }[]
}

export const ShoppingList = ({items}: ShoppingListProps) => {

  const [listItems, setlistItems] = useState(items);

  function deleteItem(myIndex: number) {
    const newList = listItems.filter((item, index) => index !=  myIndex);
    return newList;
  }

  function increaseQuantity(index: number):any{
    const newList = [...listItems];
    newList[index].count++; //newList[3]
    setlistItems(newList)
  }

  function decreaseQuantity(index:number) {
    let newList = [...listItems];
    newList[index].count--;
    if(newList[index].count === 0 ){
      newList = deleteItem(index);
    }
    setlistItems(newList);
  }

  return (
    <>
      {(listItems.length === 0) ? <h2 className='firstLine'>The shopping list is empty</h2>: <div className='firstLine'>Shopping list has {listItems.length} items</div>}

      <ul className='ulist'>
        {
        listItems.map((item, index) =>
        item.count > 0 &&
        <li className= "litem"
            key ={item.id}>
            <span className='itemText'>{item.name}: </span>
            <span className='itemQnt'>{item.count}</span>
            <div className='butContainer'>
              {item.count > 0 &&
              // <button className='deleteBut' onClick = {() => deleteItem(item.id)}>Delete</button>
              <button className='deleteBut' onClick={() => decreaseQuantity(index)}>Decrease</button>}
              <button className='incBut' onClick = {() => increaseQuantity(index)}>Increase</button>
            </div>
            {/* */}
            {/* <Button handleClick= {(event: any, id:number) => printText(event, id)} text="Click"></Button> */}
            {/* <button onClick={() => decreaseQuantity(index)}>Decrease</button> */}
        </li>
           )
        }

      </ul>
      <form className='addItemContainer'>
        <input className='addInput'></input>
        <button type= "submit" className='addBut'>AddItem </button>
      </form>
    </>
  )
}
