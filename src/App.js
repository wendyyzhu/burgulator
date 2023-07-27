import './App.css';
import { useState } from 'react';
import Menu from './Menu';
import Burger from './Burger';
import CheesyLabel from './CheesyLabel.jsx';

function App() {

  const [ingredients, setIngredients] = useState([])
  const [isVisible, setIsVisible] = useState(true)

  function add(ingredient) {
    setIngredients([ingredient, ...ingredients])
  }

  function remove(index) {
    setIngredients(ingredients.filter((elem, idx) => idx !== index))
  }

  function handleReset() {
    setIngredients([])
  }

  function handleCarbonator() {
    setIngredients(['Top bun', 'Top bun', 'Top bun', 'Top bun', 'Top bun', 'Top bun','Top bun', ...ingredients])
    // setIngredients(new Array.fill(7, 'Top bun'))
  }

  function handleToggleMenu() {
    // setIsVisible(isVisible ? false : true)
    setIsVisible(!isVisible) //negation 
  }

  return (
    <div className='page-wrapper'>
      <header>
        <button className="show-menu-btn" onClick={handleToggleMenu}>Hide/Show Ingredients</button>
      </header>
      <h1>BURGULATOR</h1>
      <CheesyLabel ingredients={ingredients}/>
        {/* <h2>Burger</h2> */}
      <Burger onRemove={remove} ingredients={ingredients}/>
      {isVisible && <h2>Choose the ingredients for your burger...</h2>}
      {isVisible && <Menu 
        onAdd={add}
        onCarbonator={handleCarbonator}
        onReset={handleReset} 
      />}
      <footer>&copy; 2023 wendyyzhu</footer>  
    </div>
  )
}

export default App;
