import './Ingredient.css'

export default function Ingredient(props) {

    function handleClick() {
        props.onRemove(props.id)
    }

    return <div onClick={handleClick} className={props.name}>
        {/* {props.name}  */}
    </div>
}