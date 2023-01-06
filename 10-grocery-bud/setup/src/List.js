import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, deleteItem, editItem }) => {
  return <div className="grocery-container">
    <div className="grocery-list">
      {items.map(({name, itemID}) => <article className="grocery-item">
        <p className="title">{name}</p>
        <div className="btn-container">
          <button type="button" className="edit-btn" onClick={() => editItem(itemID)}>
            <FaEdit />
          </button>
          <button type="button" className="delete-btn" onClick={() => deleteItem(itemID)}>
            <FaTrash />
          </button>
        </div>
      </article>)}
    </div>
  </div>
}

export default List
