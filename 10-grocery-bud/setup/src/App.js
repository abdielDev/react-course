import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [item, setItem] = useState({name: '', itemID: ''});
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const changeName = (e) => {
    setItem({
      ...item,
      name: e.target.value,
    })
  }
  const addItem = (e) => {
    e.preventDefault();
    if(isEditing) {
      setItems([...items].map(el => {
        if(el.itemID === item.itemID) return {...item}
        return el
      }));
      setItem({name: '', itemID: ''})
      setIsEditing(false)
      showAlert(true, 'success', 'Item edited')
    } else {
      setItems([...items, {...item, itemID: Math.floor(Math.random() * (10000 - 0 + 1) + 0)}]);
      setItem({name: '', itemID: ''})
      showAlert(true, 'success', 'Item created')
    }
  };
  const editItem = (id) => {
    setItem(items.find(el => el.itemID === id))
    setIsEditing(true)
  };
  const deleteItem = (id) => {
    setItems(items.filter(element => element.itemID !== id))
    showAlert(true, 'danger', 'Item removed')
  };
  const removeItems = () => {
    setItems([])
    showAlert(true, 'danger', 'Items removed')
  };
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  return <>
    <section className="section-center">
      <form className="grocery-form">
        {alert.show && <Alert showAlert={showAlert} {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" onChange={changeName} className="grocery" placeholder="e.g. eggs" value={item.name} />
          <button type="button" className="submit-btn" onClick={addItem}>{isEditing ? 'edit' : 'submit'}</button>
        </div>
      </form>
      <List items={items} deleteItem={deleteItem} editItem={editItem} />
      <button className="clear-btn" onClick={removeItems}>clear items</button>
    </section>
  </>
}

export default App
