import './Menu.css'

const allIngredients = ['Bottom bun', 'Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onion', 'Pickles', 'Top bun']

export default function Menu({ onAdd, onReset, onCarbonator}) {
    return <section className="menu">
        {allIngredients.map(ing =>
            <button className="ing-btn" onClick={() => onAdd(ing)}>{ing}</button>)}
        <button className="ing-btn" onClick={onCarbonator}>Carbonator</button>
        <button className="ing-btn" onClick={onReset}>Reset</button> 

    </section> 
}
