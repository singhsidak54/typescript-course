import React, { useState } from 'react';
import { v4 as getId } from "uuid";
import ShoppingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from "./models/Item";
import './App.css';


function App() {
  const [items, setItems] = useState<Item[]>([]);
  const addItem = (product: string, quantity: number) => {
    setItems([...items, {id: getId(), product, quantity }]);
  }

  return (
    <div>
      <ShoppingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
