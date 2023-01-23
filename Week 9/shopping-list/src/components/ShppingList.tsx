import React from 'react'

type ShoppingListProps = {
  items:
  {
  item: string,
  count?: number
  }[]
}

export const ShoppingList = ({items}: ShoppingListProps) => {
  return (
    <div>
      <ul>
        {
        items.map((item) =>
        <li>
         <span style = {{paddingRight: "5px"}}>{item.item}</span>
         <span>{item.count ? item.count : 0}</span>
        </li>
            )
        }
      </ul>

    </div>
  )
}
