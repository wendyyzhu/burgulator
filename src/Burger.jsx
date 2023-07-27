import './Burger.css'
import Ingredient from './Ingredient'

export default function Burger({ ingredients, onRemove }) {
    return (
        <div className='burger'>
            {ingredients.map((ing, idx) => 
                <Ingredient 
                    key={idx}  
                    id={idx}
                    name={ing} 
                    onRemove={onRemove}
                />
            )}
        </div>
    )
}